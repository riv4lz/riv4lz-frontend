import React, { createRef, useEffect, useRef, useState } from 'react'
import './ProfileDetails.scss'
import Btn from "../../button/Btn";
import ProfileImg from '../../../assets/images/ProfileDetails_ProfileImgTemp.png'
import Facebook from '../../../assets/icons/social-media/Facebook_White.svg'
import Twitter from '../../../assets/icons/social-media/Twitter_White.svg'
import Instagram from '../../../assets/icons/social-media/Instagram_White.svg'
import Discord from '../../../assets/icons/social-media/Discord_White.svg'
import Telegram from '../../../assets/icons/social-media/Telegram_White.svg'
import { useStore } from '../../../Stores/store';

import Axios from 'axios';

const ProfileDetails = ({id} : any) => {
    const { userStore, imageStore, authStore } = useStore();
    const [file, setFile] = useState<File>();


    const reload = () => window.location.reload();
    
    const request = () => console.log('request');
    

    const uploadImage = async (event: any) => {
        console.log(event);

        const formData = new FormData();
        formData.append('file', event[0]);
        formData.append('upload_preset', 'profileImage');
        await Axios.post('https://api.cloudinary.com/v1_1/riv4lz/image/upload', formData).then(async (response) => {
            await imageStore.uploadImage({
                userId: authStore.user !== undefined ? authStore.user.id : "",
                imageUrl: response.data.secure_url,
                imageType: 0
            })
        })
        setTimeout(reload, 200);
    }

    useEffect(() => {
        const getUser = async () => {
            await userStore.loadUser(id);
        }
        
        getUser();

    }, [])

    const inputFile = createRef<HTMLInputElement>();
    const changeProfileImage = () => {
        
        if(inputFile.current !== null && inputFile.current !== undefined) {
        inputFile.current.click();
        }
    }

    return (
        <div className='ProfileDetails'>
            <input type="file" ref={inputFile} onChange={(e) => uploadImage(e.target.files)} style={{display: 'none'}} />
            <div className='ProfileDetails__ProfileImage'>
                <div className='test'>
                    <img src={userStore.user?.profileImageUrl !== undefined ? userStore.user?.profileImageUrl : 'https://i.imgur.com/sH2IN1A_d.webp?maxwidth=760&fidelity=grand'} className="ProfileDetails__ProfileImage_Image" />
                    {authStore.user?.id === id ?
                        <div className="overlay display-flex justify-content-center align-items-center cursor-pointer" onClick={changeProfileImage}>
                            <div className="p1 font-poppins clr-secondary">Change profile Picture</div>
                        </div>
                        : null}
                </div>
                <Btn onClick={request} classes={"btn_Profile_Collaborator P5_Statewide_Bold Text_Dark_Blue"}>Request as Collaborator</Btn>
            </div>
            <div className={"ProfileDetails__Description"}>
                <span className={"ProfileDetails__Description__GamerTag H1 Text_Secondary"}>{userStore.user?.name}</span>
                <span className={"ProfileDetails__Description__RealName P1_Statewide_light Text_Secondary"}>
                    {userStore.user?.name}</span>
                <div className={"ProfileDetails__Description__SocialIcons"}>
                    <a href={userStore.user?.facebookURL}>
                        <img src={Facebook} className={"ProfileDetails__Description__SocialIcons__Icon"}></img></a>
                    <a href={userStore.user?.twitterURL}>
                        <img src={Twitter} className={"ProfileDetails__Description__SocialIcons__Icon"}></img></a>
                    <a href={userStore.user?.twitchURL}>
                        <img src={Instagram} className={"ProfileDetails__Description__SocialIcons__Icon"}></img></a>
                    <a href={userStore.user?.discordURL}>
                        <img src={Discord} className={"ProfileDetails__Description__SocialIcons__Icon"}></img></a>
                    <a href={userStore.user?.facebookURL}>
                        <img src={Telegram} className={"ProfileDetails__Description__SocialIcons__Icon"}></img></a>
                </div>
                <span className={"ProfileDetails__Description__Description P3_Poppins Text_Secondary"}>
                    {userStore.user?.description}
                </span>
            </div>
            <div className={"ProfileDetails__AdditionalDetails"}></div>
        </div>
    )
}


// @ts-ignore
export default ProfileDetails
