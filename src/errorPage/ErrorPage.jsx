import React from "react";
import Title from "../home/header/Title";
import './errorPage.css'
const ErrorPage = () => {
    function BackBtn(){
        window.location.pathname="/";
    }
    return (
        <div>
        <Title/>
        <div className="back_arrow_btn" onClick={()=>BackBtn()}>
                <img src="https://thumbs.dreamstime.com/b/back-arrow-icon-special-red-round-button-back-arrow-icon-isolated-special-red-round-button-abstract-illustration-102221714.jpg" alt="back arrow button img" />
            </div>
            <div className="error_gif">
                <img src="https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif" alt="404 gif" />
            </div>
        </div>
    )
}
export default ErrorPage;