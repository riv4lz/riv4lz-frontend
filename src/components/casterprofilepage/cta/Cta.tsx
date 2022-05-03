import React from 'react'
import './Cta.scss'
import Btn from "../../button/Btn";
import BannerImage from '../../../assets/images/ProfileDetails_BannerImgTemp.png'


const Cta = () => {
    const test = () => {
        console.log("Success");
    }

    return (
        <div className='Cta'>
            <div className={"Cta__Text"}>
                <span className={"Cta__Text__Title H3 Text_Secondary"}>hire plykkeranden</span>
                <span className={"Cta__Text_SubTitle "}>Send a match request</span>
                <span className={"Cta__Text__MainText P4_Poppins Text_Secondary"}>
                    As an organisation or a tournament organisor you can request a specfic caster<br />
                    for a specific match. <br />
                    This can help you get the perfect that for your specfic needs and tailor your <br />
                    event after it.
                </span>
                <Btn onClick={test} classes={"btn_CallToAction_Blue"} >check availability</Btn>
                <Btn onClick={test} classes={"btn_CallToAction_White"}>setup booking request</Btn>
            </div>
            <img src={BannerImage} className={"Cta__Image"}></img>
        </div>
    )
}


// @ts-ignore
export default Cta