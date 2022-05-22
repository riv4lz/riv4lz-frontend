import React from 'react'
import './FAQComponent.scss'
import Faq from 'react-faq-component';
import FAQItemComponent from "./FAQItemComponent/FAQItemComponent";
import Image from "../../../assets/images/gig_Background.png"

const data = {
    title: "HOW TO USE OUR PLATFORM",
    rows: [
        {
            title: "How to register your profile",
            content: <FAQItemComponent
                step1Text={"Click the login button in the top right hand corner"}
                step2Text={"Hej med jer"}
                step3Text={"Hej med jer"}
                image={Image}
            />,
        },
        {
            title: "How to optimize your profile",
            content: <FAQItemComponent
                step1Text={"Hej med jer"}
                step2Text={"Hej med jer"}
                step3Text={"Hej med jer"}
                image={Image}
            />,
        },
        {
            title: "How to create an event",
            content: <FAQItemComponent
                step1Text={"Hej med jer"}
                step2Text={"Hej med jer"}
                step3Text={"Hej med jer"}
                image={Image}
            />,
        },
        {
            title: "How to accept an offer",
            content: <FAQItemComponent
                step1Text={"Hej med jer"}
                step2Text={"Hej med jer"} 
                step3Text={"Hej med jer"}
                image={Image}
            />,
        }]
}

const styles = {
    bgColor: 'transparent',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: "white",
    // rowContentColor: 'grey',
    // arrowColor: "red",
    arrowColor: "white"
};

const config = {
    animate: true,
    //arrowIcon: "V",
    tabFocus: true
};

const FAQComponent = () => {

    return (
        <div className={"FAQComponent"}>
            <div className={"FAQComponent__Wrapper margin-top-xxl margin-bottom-xxl"}>
            <Faq
                data={data}
                styles={styles}
                config={config}
                className={"test"}
            />
            </div>
        </div>
    )
}

export default FAQComponent
