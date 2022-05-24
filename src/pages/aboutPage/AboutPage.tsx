import React from "react"
import './AboutPage.scss';
import CallToActionAbout from "../../components/aboutPage/CallToActionAbout/CallToActionAbout";
import AboutMain from "../../components/aboutPage/AboutMain/AboutMain";


const AboutPage = () => {
    return (
        <>
            <CallToActionAbout></CallToActionAbout>
            <AboutMain></AboutMain>
        </>
    )
}

export default AboutPage
