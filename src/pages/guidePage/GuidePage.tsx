import {observer, useObserver} from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import './GuidePage.scss';
import FAQComponent from "../../components/guidePage/FAQComponent/FAQComponent";
import CallToActionAbout from "../../components/aboutPage/CallToActionAbout/CallToActionAbout";



const GuidePage = () => {
    return (
            <>
                <CallToActionAbout />
                <FAQComponent />
            </>
    );
}

export default GuidePage;
