import React, { createRef, useEffect } from 'react'
import './Cta.scss'
import Btn from "../../button/Btn";
import BannerImage from '../../../assets/images/ProfileDetails_BannerImgTemp.png'
import { useStore } from '../../../stores/store';
import Axios from 'axios';


const Cta = ({ id }: any) => {
    const { userStore, authStore, imageStore } = useStore();
    const test = () => {
    }

    const reload = () => window.location.reload();

    const uploadImage = async (event: any) => {
        const formData = new FormData();
        formData.append('file', event[0]);
        formData.append('upload_preset', 'profileImage');
        await Axios.post('https://api.cloudinary.com/v1_1/riv4lz/image/upload', formData).then(async (response) => {
            await imageStore.uploadImage({
                userId: authStore.user !== undefined ? authStore.user.id : "",
                imageUrl: response.data.secure_url,
                imageType: 1
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

        if (inputFile.current !== null && inputFile.current !== undefined) {
            inputFile.current.click();
        }
    }

    return (
        <div className='[ Cta ]    { display-grid justify-content-center align-items-center }'>
            <input type="file" ref={inputFile} onChange={(e) => uploadImage(e.target.files)} style={{ display: 'none' }} />
            <div className={"[ Text ]    { display-flex flex-direction-column justify-content-space-evenly }"}>
                <span className={"Text__Title    { h3 font-statewideBold clr-white }"}>hire {userStore.user?.name}</span>
                <span className={"Text_SubTitle    { font-oxanium fw-600 p0}"}>Send a match request</span>
                <span className={"Text__MainText    { p4 font-poppins clr-white }"}>
                    As an organisation or a tournament organisor you can request a specfic caster
                    for a specific match. <br /><br />
                    This can help you get the perfect that for your specfic needs and tailor your
                    event after it.
                </span>
                <div className='Text__Buttons    { display-grid }'>
                    <Btn onClick={test} classes={"btn_Profile_CheckAvailability    { p4 font-statewideBold clr-white }"} >check availability</Btn>
                    <Btn onClick={test} classes={"btn_Profile_SetupBooking    { p5 font-statewideBold clr-dark-blue }"}>setup booking request</Btn>
                </div>
            </div>
            <div className='[ Banner ]    { display-flex align-items-center justify-content-center }'>
                <div className='Banner__Wrapper'>
                    <div className='[ Overlay ]'>
                        <img src={userStore.user?.bannerImageUrl !== null && userStore.user.bannerImageUrl !== '' ? userStore.user?.bannerImageUrl : 'https://i.imgur.com/sH2IN1A_d.webp?maxwidth=760&fidelity=grand'} className="Overlay__BannerImage" />
                        {authStore.user?.id === id ?
                            <div className="Overlay__ChangeBannerImage    { display-flex justify-content-center align-items-center cursor-pointer }" onClick={changeProfileImage}>
                                <div className="p1 font-poppins clr-secondary">Change Banner Image</div>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}


// @ts-ignore
export default Cta