import Title from '../home/header/Title';
import React from "react";
import BackArrowButton from './BackArrowButton';
import BidPageBody from './BidPageBody';

const BidPage = ({selectedMatch}) =>{
    console.log("selectedMatch",selectedMatch)
    return (
        <>
            <Title/>
            <BackArrowButton/>
            <BidPageBody/>
        </>
    )
}

export default BidPage;