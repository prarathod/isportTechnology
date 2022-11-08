import './homeBody.css';
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const HomeBody = (props) => {
    let { selectedDate, fixtureData, GetSelectedMatchId } = props;
    console.log("props",props)
    const [displayData, setDisplayData] = useState([]);
    const history = useHistory();

    const filterDisplayData = () => {
        let tempArr = []
        fixtureData.filter(fixture => fixture.dateToCheck === selectedDate.fullDate)
            .map((fixture, index) => {
                tempArr.push(fixture);
            })

        let showArr = [];
        tempArr.map((elm) => {
            let count = 0;
            showArr.map((el) => {
                if (el.LeagueName === elm.LeagueName) {
                    el.Obj.push(elm);
                    count++;
                }
            })
            if (count === 0) {
                showArr.push({ LeagueName: elm.LeagueName, Obj: [elm] })
            }
        })
        setDisplayData(showArr);
        console.log(displayData)
    }


    useEffect(() => {
        filterDisplayData();
    }, [fixtureData, selectedDate]);

    const handleClick = (elm) => {
        console.log('Button is cliked!');
        // GetSelectedMatchId(elm)
        window.location.pathname="/bidpage"
        // props.history.push(`/bidpage`);
    }

    return (
        <>
            <div className='Homebody-main'>
                <div className="homebody-header">
                    <div>
                        <img src='https://w7.pngwing.com/pngs/960/395/png-transparent-football-drawing-podcast-football-blue-sport-happy-birthday-vector-images-thumbnail.png' alt='foot-ball logo' className='home-body-img' />
                    </div>
                    <div>
                        <p>Football</p>
                    </div>
                </div>
                <div className="homebody-body">
                    <div>
                        {displayData.map((fixture, index) => {
                            return (
                                <div key={`${index}`}>
                                    <p className='LeagueNameHeader'>{fixture.LeagueName}</p>
                                    {fixture.Obj.map((elm) => {
                                        return (
                                            <div className='LeaguNeMatches' onClick={() => handleClick(elm) }>
                                                <p>{`${elm.Team1Name}`} <span className='LeaguNeMatchesTime'>{`${elm.MatchTime}`}</span> {`${elm.Team2Name}`}</p>
                                                <hr />
                                            </div>
                                        )
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomeBody;