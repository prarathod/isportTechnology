import './dateView.css';
import React, { useEffect, useState } from 'react';

const DateView = ({getSelectedDate}) => {
    const [dateArr, setDateArr] = new useState([]);


    const tempDatasArr = () => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let tempArr = [];

        const d = new Date();      
        let currentDate = d.getDate()
        for (let i = 0; i < 7; i++) {
            let dates = d.getDate();
            let weekday = weekdays[d.getDay()];
            let month = months[d.getMonth()];
            tempArr.push({
                "fullDate":`${dates}/${d.getMonth()+1}/${d.getFullYear()}`,
                "dates":dates,
                "weekday":weekday,
                "month":month
            })
            d.setDate(currentDate + i+1)
        }
        return tempArr;
    }
    useEffect(() => {
        let tempDatasArrOutput = tempDatasArr();
        setDateArr(tempDatasArrOutput);
        getSelectedDate(tempDatasArrOutput[0])
    }, [])


    // console.log("date:- ",dateArr);
    return (
        <>
            <div className='dates-main'>
                {dateArr.map((elm)=>{
                    return (<>
                        <div onClick={()=>getSelectedDate(elm)}>
                            <p>{elm.weekday}</p>
                            <p>{elm.dates} {elm.month.substring(0,3)}</p>
                        </div>
                    </>
                    );
                })}
            </div>
        </>
    );
}
export default DateView;