import React, { createRef, useEffect } from 'react'
import './Cta.scss'
import Btn from "../../button/Btn";
import BannerImage from '../../../assets/images/ProfileDetails_BannerImgTemp.png'
import { useStore } from '../../../Stores/store';
import Axios from 'axios';


const Cta = ({ id }: any) => {
    const { userStore, authStore, imageStore } = useStore();
    const test = () => {
        console.log("Success");
    }

    const reload = () => window.location.reload();

    const uploadImage = async (event: any) => {
        console.log(event);

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
        console.log(userStore.user.bannerImageUrl)

    }, [])

    const inputFile = createRef<HTMLInputElement>();
    const changeProfileImage = () => {

        if (inputFile.current !== null && inputFile.current !== undefined) {
            inputFile.current.click();
        }
    }

    return (
        <div className='Cta'>
            <input type="file" ref={inputFile} onChange={(e) => uploadImage(e.target.files)} style={{ display: 'none' }} />
            <div className={"Cta__Text"}>
                <span className={"Cta__Text__Title H3 Text_Secondary"}>hire {userStore.user?.name}</span>
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
            <div className='Cta_ImageContainer '>
                <div className='test'>
                    <img src={userStore.user?.bannerImageUrl !== null ? userStore.user?.bannerImageUrl : 'https://i.imgur.com/sH2IN1A_d.webp?maxwidth=760&fidelity=grand'} className="ProfileDetails__ProfileImage_Image" />
                    {authStore.user?.id === id ?
                        <div className="overlay display-flex justify-content-center align-items-center cursor-pointer" onClick={changeProfileImage}>
                            <div className="p1 font-poppins clr-secondary">Change Banner Image</div>
                        </div>
                        : null}
                </div>
            </div>
        </div>
    )
}


// @ts-ignore
export default Cta