import React from 'react'
import './FAQComponent.scss'
import Faq from 'react-faq-component';
import FAQItem from "./FAQItem/FAQItem";
import Image from "../../../assets/images/gig_Background.png"

const data = {
    title: <p className={"{ h3 font-statewideBold }"}>How to optimize your profile</p>,
    rows: [
        {
            title: <p className={"{ h4 font-statewideLight }"}>How to register your profile</p>,
            content: <FAQItem
                step1Text={"Click the login button in the top right hand corner"}
                step2Text={"Than click the REGISTER FOR FREE text"}
                step3Text={"Next fill in your account info and finalize registration"}
                image={Image}
            />,
        },
        {
            title: <p className={"{ h4 font-statewideLight }"}>How to optimize your profile</p>,
            content: <FAQItem
                introText={"In order to ensure that organisations will be more likely to accept your offer personalizing" +
                    "your profile is a crucial part - The more you can showoff the aspect that make specifically you a " +
                    "unique caster the more likely you are to be accepted to cast their games"}
                step1Text={"Add a profile picture that show who you are and most importantly DONT FORGET TO SMILE"}
                step2Text={"Update your profile details to include the things that make your way of casting DIFFERENT"}
                step3Text={"Make sure to have links to aspecially your twitch account associated with your profile"}
                step4Text={"And last but most importantly dont forget to add some highlight clips on your profile" +
                    "to show your unique skills in action"}
                image={Image}
            />,
        },
        {
            title: <p className={"{ h4 font-statewideLight }"}>How send an offer for a match</p>,
            content: <FAQItem
                step1Text={"Hej med jer"}
                step2Text={"Hej med jer"}
                step3Text={"Hej med jer"}
                image={Image}
            />,
        },
        {
            title: <p className={"{ h4 font-statewideLight }"}>How to check if the organisation accepted your offer</p>,
            content: <FAQItem
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
    arrowColor: "white"
};

const config = {
    animate: true,
    tabFocus: true
};

const FAQ = () => {

    return (
        <div className={"[ FAQ ]"}>
            <div className={"FAQ__Wrapper    { margin-top-xxl margin-bottom-xxl }"}>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
            </div>
        </div>
    )
}

export default FAQ
