import React from "react"
import './AboutPage.scss';
import CallToActionAbout from "../../components/aboutPage_Components/CallToActionAbout/CallToActionAbout";
import MainSection from "../../components/aboutPage_Components/MainSection/MainSection";


const AboutPage = () => {
    return (
        <>
            <CallToActionAbout></CallToActionAbout>
            <MainSection></MainSection>
        </>
    )
}

export default AboutPage
