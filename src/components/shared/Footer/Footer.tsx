import React from 'react'
import './Footer.scss'

import FooterMain from "./FooterMain/FooterMain";
import CopyrightContainer from "./CopyrightContainer/CopyrightContainer";

const Footer = () => {
    return (
        <div className={"[ Footer ]"}>
            <FooterMain></FooterMain>
            <CopyrightContainer/>
        </div>
    )
}

export default Footer
