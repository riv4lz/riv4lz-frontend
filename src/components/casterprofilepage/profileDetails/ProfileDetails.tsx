import React from 'react'
import './ProfileDetails.scss'
import Btn from "../../button/Btn";
import ProfileImg from '../../../assets/images/ProfileDetails_ProfileImgTemp.png'
import Facebook from '../../../assets/icons/social-media/Facebook_White.svg'
import Twitter from '../../../assets/icons/social-media/Twitter_White.svg'
import Instagram from '../../../assets/icons/social-media/Instagram_White.svg'
import Discord from '../../../assets/icons/social-media/Discord_White.svg'
import Telegram from '../../../assets/icons/social-media/Telegram_White.svg'


const ProfileDetails = (caster: any) => {
    const test = () => {
        console.log("Success");
    }

    return (
        <div className='ProfileDetails'>
            <div className='ProfileDetails__ProfileImage'>
                <img src={ProfileImg} className='ProfileDetails__ProfileImage_Image'/>
                <Btn onClick={test} classes={"btn_CallToAction_Blue"}>Request as Collaborator</Btn>
            </div>
            <div className={"ProfileDetails__Description"}>
                <span className={"ProfileDetails__Description__GamerTag H1 Text_Secondary"}>{caster.caster.gamerTag}</span>
                <span className={"ProfileDetails__Description__RealName P1_Statewide_light Text_Secondary"}>
                    {caster.caster.firstName} {caster.caster.lastName} </span>
                <div className={"ProfileDetails__Description__SocialIcons"}>
                    <a href={caster.caster.facebookURL}><
                        img src={Facebook} className={"ProfileDetails__Description__SocialIcons__Icon"}></img></a>
                    <a href={caster.caster.twitterURL}>
                        <img src={Twitter} className={"ProfileDetails__Description__SocialIcons__Icon"}></img></a>
                    <a href={caster.caster.twitchURL}>
                        <img src={Instagram} className={"ProfileDetails__Description__SocialIcons__Icon"}></img></a>
                    <a href={caster.caster.discordURL}>
                        <img src={Discord} className={"ProfileDetails__Description__SocialIcons__Icon"}></img></a>
                    <a href={caster.caster.facebookURL}>
                        <img src={Telegram} className={"ProfileDetails__Description__SocialIcons__Icon"}></img></a>
                </div>
                <span className={"ProfileDetails__Description__Description P3_Poppins Text_Secondary"}>
                    {caster.caster.description}
                </span>
            </div>
            <div className={"ProfileDetails__AdditionalDetails"}></div>
        </div>
    )
}


// @ts-ignore
export default ProfileDetails