import React, {createRef, useEffect, useState} from 'react'
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
import UpdateProfile from "../../casterprofilepage/updateProfile/UpdateProfile";


const ProfileDetails = ({ id }: any) => {
    const { userStore, authStore, imageStore } = useStore();
    const [showState, setShowState] = useState(false);
    const [showState1, setShowState1] = useState(false);
    const [image, setImage] = useState('');
    let imageUrl: any;


    const load = () => setShowState(true)

    const show = async() => {
        setTimeout(load, 10)
    }

    const hide = async() => {
        setShowState(false);
    }


    const inputFile = createRef<HTMLInputElement>();
    const test = async () => {

    }
    const reload = () => window.location.reload();

    const uploadImage = async (event: any) => {
        const formData = new FormData();
        formData.append('file', event[0]);
        formData.append('upload_preset', 'profileImage');
        await Axios.post('https://api.cloudinary.com/v1_1/riv4lz/image/upload', formData).then(async (response) => {
            userStore.user.profileImageUrl = response.data.secure_url;
        })
        console.log(userStore.user.profileImageUrl);
        setShowState1(true);
        setShowState1(false);
        userStore.updateUserProfile(userStore.user);
        console.log(userStore.user);
    }

    const updateProfile = async () => {
        setImage(imageUrl);
    }

    
    useEffect(() => {
        const getUser = async () => {
            await userStore.loadUser(id);
        }

        getUser();

    }, [])

    const changeProfileImage = () => {

        if (inputFile.current !== null && inputFile.current !== undefined) {
            inputFile.current.click();
        }
    }

    return (
        <div className='[ ProfileDetails ]    { padding-top-6 padding-bottom-6 justify-content-center }'>
            {showState ?
                <UpdateProfile  show={showState} handleClose={hide} /> : null
            }
            {showState1 ?
                <div></div> : null
            }
            {userStore.user.userType === 1 ?
                <div id='createEvent' className='CreateMatch display-flex justify-content-center align-items-center cursor-pointer' onClick={show}>
                    <p className='h3 font-poppins clr-darkblue'>+</p>
                </div>
                : null}
        <input type="file" ref={inputFile} onChange={(e) => uploadImage(e.target.files)} style={{display: 'none'}} />
        <div className='ProfileDetails__ProfileImage__Wrapper'>
            <div className='[ Overlay ]'>
                <img src={userStore.user?.profileImageUrl !== undefined ? userStore.user?.profileImageUrl : 'https://i.imgur.com/sH2IN1A_d.webp?maxwidth=760&fidelity=grand'} className="Overlay__Profile_Image" />
                {authStore.user?.id === id ?
                    <div className="Overlay__ChangeProfilePic    { margin-bottom-xs display-flex justify-content-center align-items-center cursor-pointer }" onClick={changeProfileImage}>
                        <div className="{ p1 font-poppins clr-secondary }">Change profile Picture</div>
                    </div>
                    : null}
            </div>
            <Btn onClick={test} classes={"btn_Profile_Collaborator    { p5 font-statewideBold darkblue }"}>See matches from this org</Btn>
        </div>
        <div className={"[ Description ]    { align-items-center }"}>
            <span className={"Description__GamerTag    { h1 font-statewideBold clr-white }"}>{userStore.user?.name}</span>
            <span className={"Description__RealName    { p1 font-statewideBold clr-white fw-300 }"}>
                {userStore.user?.name}</span>
            <div className={"Description__SocialIcons"}>
                <a href={userStore.user?.facebookUrl}>
                    <img src={Facebook} className={"Description__SocialIcons__Icon    { padding-right-1 }"}></img></a>
                <a href={userStore.user?.twitterUrl}>
                    <img src={Twitter} className={"Description__SocialIcons__Icon     { padding-right-1 }"}></img></a>
                <a href={userStore.user?.twitchUrl}>
                    <img src={Instagram} className={"Description__SocialIcons__Icon    { padding-right-1 }"}></img></a>
                <a href={userStore.user?.discordUrl}>
                    <img src={Discord} className={"Description__SocialIcons__Icon    { padding-right-1 }"}></img></a>
                <a href={userStore.user?.facebookUrl}>
                    <img src={Telegram} className={"Description__SocialIcons__Icon     { padding-right-1 }"}></img></a>
            </div>
            <span className={"Description__Description    { p3 font-poppins clr-white margin-top-l }"}>
                {userStore.user?.description}
            </span>
        </div>
    </div>
    )
}


// @ts-ignore
export default ProfileDetails