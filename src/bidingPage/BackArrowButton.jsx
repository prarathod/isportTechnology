import "./backArrowButton.css";
import React from "react";
const BackArrowButton = ()=>{
    function BackBtn(){
        window.location.pathname="/";
    }
    return (
        <>
            <div className="back_arrow_btn" onClick={()=>BackBtn()}>
                <img src="https://thumbs.dreamstime.com/b/back-arrow-icon-special-red-round-button-back-arrow-icon-isolated-special-red-round-button-abstract-illustration-102221714.jpg" alt="back arrow button img" />
            </div>
            <div  className="backArrowHeader">
                <p>Make It A Bet Builder?</p>
            </div>
        </>
    )
}

export default BackArrowButton;