import { useState, useEffect } from "react";
import "./BidPageBody.css";
import React from "react";
import './BidPageBody.css';
const BidPageBody = () => {
    const [selectValue, setSelectValue] = useState([]);
    const [dropDownValue, setDropDownValue] = useState([]);
    async function APICall() {
        let selectCall = await fetch("http://cms.bettorlogic.com/api/BetBuilder/GetMarkets?sports=1")
        selectCall = await selectCall.json();

        let dropDown = await fetch("http://cms.bettorlogic.com/api/BetBuilder/GetSelections?sports=1")
        dropDown = await dropDown.json();

        setSelectValue(selectCall);
        setDropDownValue(dropDown);
    }
    
    useEffect(() => {
        APICall();
    }, [])
    return (
        <>
            <div className="selct-main">
                <div>
                    <label className="label">BetSlip Selection:</label>
                    <select>{selectValue.map((elm) => {
                        return (
                            <option value={`{${elm.MarketId}}`}>{`${elm.MarketName}`}</option>
                        )
                    })}
                    </select>
                </div>
                <div>
                    <label className="label">Legs:</label>
                    <select>{dropDownValue.map((elm) => {
                        return (
                            <option value={`{${elm.selectionId}}`}>{`${elm.selectionValue}`}</option>
                        )
                    })}
                    </select>
                </div>
            </div>
        </>
    )
}
export default BidPageBody;