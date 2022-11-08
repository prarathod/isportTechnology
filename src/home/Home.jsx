import React, { useEffect, useState } from "react";
import DateView from "./header/DateView";
import Title from "./header/Title";
import HomeBody from "./home-body/HomeBody";

const Home =(props)=>{
    let {GetSelectedMatchId} = props;
    const [fixtureData,setFixtureData] = useState([]);
    const [selectedDate,setSelectedDate] = useState(new Date().toString());

    const getSelectedDate = (date)=>{
        setSelectedDate(date);
    }

    const getFixtureData = async()=>{
        try{
           let response = await fetch("http://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1")
           response = await response.json();
           response = response.map(item=>{
            
            let arr = item.MatchDate.split(" ")[0].split("/")
            let dateToCheck = `${arr[1]}/${arr[0]}/${arr[2]}`;
            return({...item,dateToCheck})
           })
           setFixtureData(response);
        }catch(error){
            console.log("getFixture error",error)
        }
    }

    useEffect(()=>{
        getFixtureData()
    },[]);

    return (
        <>
            <Title/>
            <DateView getSelectedDate={getSelectedDate}/>
            <HomeBody selectedDate={selectedDate} fixtureData={fixtureData} GetSelectedMatchId={GetSelectedMatchId} {...props}/>
        </>
    );
}

export default Home;