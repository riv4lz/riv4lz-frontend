import React, { useEffect, useState } from 'react'
import './UpdateProfile.scss'
import { useStore } from '../../../stores/store'
import Btn from '../../button/Btn'
import { createMatchDTO, Team } from "../../../stores/eventStore";
import { v4 as uuidv4 } from "uuid";


const UpdateProfile = ({ show, handleClose }: any) => {
    const { userStore } = useStore()

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [facebookUrl, setFacebookUrl] = useState('');
    const [twitterUrl, setTwitterUrl] = useState('');
    const [discordUrl, setDiscordUrl] = useState('');
    const [twitchUrl, setTwitchUrl] = useState('');
    const [profile, setProfile] = useState('');
    const [bannerImageUrl, setBannerImageUrl] = useState('');

    useEffect(() => {
        setName(userStore.user.name);
        setDescription(userStore.user.description);
        setFacebookUrl(userStore.user.facebookUrl);
        setTwitterUrl(userStore.user.twitterUrl);
        setDiscordUrl(userStore.user.discordUrl);
        setTwitchUrl(userStore.user.twitchUrl);
        setProfile(userStore.user.profileImageUrl);
    }, []);


    const updateInfo = async () => {
        console.log(name);
        userStore.user.name = name;
        userStore.user.description = description;
        userStore.user.facebookUrl = facebookUrl;
        userStore.user.twitterUrl = twitterUrl;
        userStore.user.discordUrl = discordUrl;
        userStore.user.twitchUrl = twitchUrl;
        userStore.user.profileImageUrl = profile;
        userStore.user.bannerImageUrl = bannerImageUrl;
        userStore.updateUserProfile(userStore.user);

        handleClose()


    }

    return (
        <div className='[ Event ]' style={{ display: show ? 'block' : 'none' }}>
            <div className='Event__Wrapper   { display-flex clr-white }'>
                <div className='Event__Title    { flex-flow h2 font-statewideBold }'>
                    Update profile
                </div>
                <div className='[ Details ]    { Grid }'>
                    <div className='[ Teams ]'>
                        <div className='Teams__Participants    { display-flex flex-direction-column }'>
                            <div className='Teams__Participants__Title    { p1 font-statewideBold flex-flow }'>
                                Basically details
                            </div>
                            <input
                                className='LoginInput__Field'
                                type="text"
                                id='name'
                                placeholder='Write here'
                                value={name}
                                onChange={(e) => setName(e.target.value)}>
                            </input>
                            <input
                                className='LoginInput__Field'
                                type="text"
                                id='description'
                                placeholder='Write here'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}>
                            </input>
                            <input
                                className='LoginInput__Field'
                                type="text"
                                id='description'
                                placeholder='Write here'
                                value={profile}
                                onChange={(e) => setProfile(e.target.value)}>
                            </input>
                            <input
                                className='LoginInput__Field'
                                type="text"
                                id='bannerImageUrl'
                                placeholder='Write here'
                                value={bannerImageUrl}
                                onChange={(e) => setBannerImageUrl(e.target.value)}>
                            </input>
                        </div>
                    </div>
                    <div className='[ GameDetails ]'>
                        <div className='GameDetails__Title    { p1 font-statewideBold flex-flow }'>
                            social details
                        </div>
                        <input
                            className='LoginInput__Field'
                            type="text"
                            id='facebookUrl'
                            placeholder='Write here'
                            value={facebookUrl}
                            onChange={(e) => setFacebookUrl(e.target.value)}>
                        </input>
                        <input
                            className='LoginInput__Field'
                            type="text"
                            id='twitterUrl'
                            placeholder='Write here'
                            value={twitterUrl}
                            onChange={(e) => setTwitterUrl(e.target.value)}>
                        </input>
                        <input
                            className='LoginInput__Field'
                            type="text"
                            id='discordUrl'
                            placeholder='Write here'
                            value={discordUrl}
                            onChange={(e) => setDiscordUrl(e.target.value)}>
                        </input>
                        <input
                            className='LoginInput__Field'
                            type="text"
                            id='twitchUrl'
                            placeholder='Write here'
                            value={twitchUrl}
                            onChange={(e) => setTwitchUrl(e.target.value)}>
                        </input>
                    </div>
                </div>
                <div className='[ Buttons ]    { gap-2 flex-flow }'>
                    <Btn onClick={handleClose} children='Close' classes='btn_CallToAction_White    { p3 font-oxanium fw-600 clr-darkblue }' />
                    <Btn onClick={updateInfo} children='Update' classes='btn_CallToAction_Blue    { p3 font-oxanium fw-600 clr-darkblue }' />
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile