import React from "react";
import './GuidePage.scss';
import CallToActionAbout from "../../components/aboutPage/CallToActionAbout/CallToActionAbout";
import FAQ from "../../components/guidePage/FAQ/FAQComponent";

const GuidePage = () => {
    return (
            <>
                <CallToActionAbout />
                <FAQ />
            </>
    );
}

export default GuidePage;
