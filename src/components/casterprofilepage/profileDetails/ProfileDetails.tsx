import React from 'react'
import './ProfileDetails.scss'
import Btn from "../../button/Btn";
import ProfileImg from '../../../assets/images/ProfileDetails_ProfileImgTemp.png'
import Facebook from '../../../assets/icons/social-media/Facebook_White.svg'
import Twitter from '../../../assets/icons/social-media/Twitter_White.svg'
import Instagram from '../../../assets/icons/social-media/Instagram_White.svg'
import Discord from '../../../assets/icons/social-media/Discord_White.svg'
import Telegram from '../../../assets/icons/social-media/Telegram_White.svg'


const ProfileDetails = () => {
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
                <span className={"ProfileDetails__Description__GamerTag H1 Text_Secondary"}>PLYKKERANDEN</span>
                <span className={"ProfileDetails__Description__RealName P1_Statewide_light Text_Secondary"}>MIA ANDERSEN</span>
                <div className={"ProfileDetails__Description__SocialIcons"}>
                    <img src={Facebook} className={"ProfileDetails__Description__SocialIcons__Icon"}></img>
                    <img src={Twitter} className={"ProfileDetails__Description__SocialIcons__Icon"}></img>
                    <img src={Instagram} className={"ProfileDetails__Description__SocialIcons__Icon"}></img>
                    <img src={Discord} className={"ProfileDetails__Description__SocialIcons__Icon"}></img>
                    <img src={Telegram} className={"ProfileDetails__Description__SocialIcons__Icon"}></img>
                </div>
                <span className={"ProfileDetails__Description__Description P3_Poppins Text_Secondary"}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
            </div>
            <div className={"ProfileDetails__AdditionalDetails"}></div>
        </div>
    )
}


// @ts-ignore
export default ProfileDetails