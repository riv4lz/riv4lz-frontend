import React from "react"
import './AboutPage.scss';
import CallToActionAbout from "../../components/aboutPage/CallToActionAbout/CallToActionAbout";
import MainSection from "../../components/aboutPage/MainSection/MainSection";


const AboutPage = () => {
    return (
        <>
            <CallToActionAbout></CallToActionAbout>
            <MainSection></MainSection>
        </>
    )
}

export default AboutPage
