import React from 'react'
import './Cta.scss'
import Btn from "../../button/Btn";
import BannerImage from '../../../assets/images/ProfileDetails_BannerImgTemp.png'
import { useStore } from '../../../Stores/store';


const Cta = () => {
    const { casterStore } = useStore();
    const test = () => {
        console.log("Success");
    }

    return (
        <div className='Cta'>
            <div className={"Cta__Text"}>
                <span className={"Cta__Text__Title H3 Text_Secondary"}>hire {casterStore.caster?.name}</span>
                <span className={"Cta__Text_SubTitle "}>Send a match request</span>
                <span className={"Cta__Text__MainText P4_Poppins Text_Secondary"}>
                    As an organisation or a tournament organisor you can request a specfic caster
                    for a specific match. <br /><br />
                    This can help you get the perfect that for your specfic needs and tailor your 
                    event after it.
                </span>
                <div className='Cta_Buttons Grid'>
                    <Btn onClick={test} classes={"btn_Profile_CheckAvailability P4_Statewide_Bold Text_Secondary"} >check availability</Btn>
                    <Btn onClick={test} classes={"btn_Profile_SetupBooking P5_Statewide_Bold Text_Dark_Blue"}>setup booking request</Btn>
                </div>
            </div>
            <div className='Cta_ImageContainer'>
                <img src={casterStore.caster?.bannerImage !== null ? casterStore.caster?.bannerImage : 'https://imgs.xkcd.com/comics/real_programmers.png'} className={"Cta__Image"}></img>
            </div>
        </div>
    )
}


// @ts-ignore
export default Cta