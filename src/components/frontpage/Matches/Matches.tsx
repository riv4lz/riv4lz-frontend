import React, { useState } from 'react'
import './Matches.scss'
import Tricked from '../../../assets/images/Esports-orgs/Tricked.svg'
import Astralis from '../../../assets/images/Esports-orgs/Astralis.svg'
import Twitch from '../../../assets/icons/social-media/twitch.svg'
import Youtube from '../../../assets/icons/social-media/youtube.svg'
import EventDetails from '../../shared/Event/EventDetails/EventDetails'

const Matches = () => {
    const [upcomingState, setUpcommingState] = useState(true);
    const [finishedState, setFinishedState] = useState(false);
    const [eventDetails, setEventDetails] = useState<IEventDetails>({
        org: '',
        tagline: '',
        orgKarma: 0,
        team1: '',
        team2: '',
        date: '',
        channel: '',
        league: '',
        language: '',
        graphics: '',
        game: ''
    });

    const onUpcoming = () => {
        setUpcommingState(true);
        setFinishedState(false);
    }

    const onFinished = () => {
        setUpcommingState(false);
        setFinishedState(true);
    }

    const [showState, setShowState] = useState(false);
    const show = (event: any) => {
        setEventDetails(event);
        setShowState(true);
    }

    const hide = () => {
        setShowState(false);
    }

    return (
        <>
            { showState ?
            <EventDetails show={showState} handleClose={hide} Event={eventDetails} /> : null
        }
            <div className='matches_Container Flex Justify_Center Align_Center'>
                <div className='matches_Wrapper Flex Justify_Center Align_Center'>
                    <div className='matches_Title H2 Text_Secondary'>
                        Matches
                    </div>
                    <div className='matches_Buttons P1_Oxanium Bold Flex Justify_Center Align_Center'>
                        <div style={{ color: upcomingState === true ? '#279BBB' : 'white' }} onClick={onUpcoming}>Upcoming</div>
                        <div style={{ color: finishedState === true ? '#279BBB' : 'white' }} onClick={onFinished}>Finished</div>
                    </div>

                    <div className='matches_MatchContainer Grid Justify_Center Align_Center'>

                        {upcomingState === true ? <Upcoming show={(value: any) => show(value)}  /> : <Finished show={show} setEventDetails={setEventDetails} />}

                    </div>
                </div>
            </div>
        </>
    )
}

const Upcoming = ({ show }: any ) => {

    return (
        <>
            <div className='matches_Component Flex Justify_Center Align_Center'>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Astralis} alt="Astralis" />
                </div>
                <div className='matches_Info Flex Justify_Center Align_Center Text_Secondary'>
                    <div className='matches_InfoTitle P1_Oxanium Bold '>
                        Tricked VS Astralis Talent
                    </div>
                    <div className='matches_InfoDate P3_Oxanium Medium'>
                        December 25, 2022 4:00 PM
                    </div>
                    <div className='matches_InfoSocials Flex Justify_Center Align_Center'>
                        <img src={Youtube} alt="Astralis" />
                        <img src={Twitch} alt="Astralis" />
                    </div>
                    <div onClick={() => show({
                        org: 'CPH Flames',
                        tagline: 'lorem ipsum',
                        orgKarma: 2.5,
                        team1: 'CPH Flames',
                        team2: 'AGF Esports',
                        date: 'Juni 25, 2022 3:00 PM',
                        channel: 'https://www.twitch.tv/CPH_Flames',
                        league: 'ESL One',
                        language: 'English',
                        graphics: 'Provided',
                        game: 'CS:GO'

                    })} className='matches_InfoButton pointer Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
                        See more
                    </div>
                </div>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Tricked} alt="Tricked" />
                </div>
            </div>
            <div className='matches_Component Flex Justify_Center Align_Center'>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Astralis} alt="Astralis" />
                </div>
                <div className='matches_Info Flex Justify_Center Align_Center Text_Secondary'>
                    <div className='matches_InfoTitle P1_Oxanium Bold '>
                        Tricked VS Astralis Talent
                    </div>
                    <div className='matches_InfoDate P3_Oxanium Medium'>
                        December 25, 2022 4:00 PM
                    </div>
                    <div className='matches_InfoSocials Flex Justify_Center Align_Center'>
                        <img src={Youtube} alt="Astralis" />
                        <img src={Twitch} alt="Astralis" />
                    </div>
                    <div onClick={() => show({
                        org: 'Tricked',
                        tagline: 'Tricked',
                        orgKarma: 3.5,
                        team1: 'Tricked',
                        team2: 'Astralis',
                        date: 'December 25, 2022 4:00 PM',
                        channel: 'https://www.twitch.tv/tricked',
                        league: 'ESL One',
                        language: 'English',
                        graphics: 'Provided',
                        game: 'League of Legends'

                    })} className='matches_InfoButton pointer Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue' >
                        See more
                    </div>
                </div>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Tricked} alt="Tricked" />
                </div>
            </div>
            <div className='matches_Component Flex Justify_Center Align_Center'>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Astralis} alt="Astralis" />
                </div>
                <div className='matches_Info Flex Justify_Center Align_Center Text_Secondary'>
                    <div className='matches_InfoTitle P1_Oxanium Bold '>
                        Tricked VS Astralis Talent
                    </div>
                    <div className='matches_InfoDate P3_Oxanium Medium'>
                        December 25, 2022 4:00 PM
                    </div>
                    <div className='matches_InfoSocials Flex Justify_Center Align_Center'>
                        <img src={Youtube} alt="Astralis" />
                        <img src={Twitch} alt="Astralis" />
                    </div>
                    <div onClick={() => show({
                        org: 'Astralis',
                        tagline: 'To the stars',
                        orgKarma: 4,
                        team1: 'Astralis',
                        team2: 'Cepter',
                        date: 'August 5, 2022 8:00 PM',
                        channel: 'https://www.twitch.tv/Astralis',
                        league: 'ESL One',
                        language: 'English',
                        graphics: 'Provided',
                        game: 'Rocket league'

                    })} className='matches_InfoButton pointer Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
                        See more
                    </div>
                </div>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Tricked} alt="Tricked" />
                </div>
            </div>
            <div className='matches_Component Flex Justify_Center Align_Center'>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Astralis} alt="Astralis" />
                </div>
                <div className='matches_Info Flex Justify_Center Align_Center Text_Secondary'>
                    <div className='matches_InfoTitle P1_Oxanium Bold '>
                        Tricked VS Astralis Talent
                    </div>
                    <div className='matches_InfoDate P3_Oxanium Medium'>
                        December 25, 2022 4:00 PM
                    </div>
                    <div className='matches_InfoSocials Flex Justify_Center Align_Center'>
                        <img src={Youtube} alt="Astralis" />
                        <img src={Twitch} alt="Astralis" />
                    </div>
                    <div onClick={() => show({
                        org: 'Tricked',
                        tagline: 'Tricked',
                        orgKarma: 3.5,
                        team1: 'Tricked',
                        team2: 'Astralis',
                        date: 'December 25, 2022 4:00 PM',
                        channel: 'https://www.twitch.tv/tricked',
                        league: 'ESL One',
                        language: 'English',
                        graphics: 'Provided',
                        game: 'League of Legends'

                    })} className='matches_InfoButton pointer Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
                        See more
                    </div>
                </div>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Tricked} alt="Tricked" />
                </div>
            </div>
        </>
    )
}

const Finished = ({ show }: any) => {
    return (
        <>
            <div className='matches_Component Flex Justify_Center Align_Center'>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Tricked} alt="Tricked" />
                </div>
                <div className='matches_Info Flex Justify_Center Align_Center Text_Secondary'>
                    <div className='matches_InfoTitle P1_Oxanium Bold '>
                        Tricked VS Astralis Talent
                    </div>
                    <div className='matches_InfoDate P3_Oxanium Medium'>
                        December 25, 2022 4:00 PM
                    </div>
                    <div className='matches_InfoSocials Flex Justify_Center Align_Center'>
                        <img src={Youtube} alt="Astralis" />
                        <img src={Twitch} alt="Astralis" />
                    </div>
                    <div onClick={show} className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
                        See more
                    </div>
                </div>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Astralis} alt="Astralis" />
                </div>
            </div>
            <div className='matches_Component Flex Justify_Center Align_Center'>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Tricked} alt="Tricked" />
                </div>
                <div className='matches_Info Flex Justify_Center Align_Center Text_Secondary'>
                    <div className='matches_InfoTitle P1_Oxanium Bold '>
                        Tricked VS Astralis Talent
                    </div>
                    <div className='matches_InfoDate P3_Oxanium Medium'>
                        December 25, 2022 4:00 PM
                    </div>
                    <div className='matches_InfoSocials Flex Justify_Center Align_Center'>
                        <img src={Youtube} alt="Astralis" />
                        <img src={Twitch} alt="Astralis" />
                    </div>
                    <div onClick={show} className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
                        See more
                    </div>
                </div>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Astralis} alt="Astralis" />
                </div>
            </div>
            <div className='matches_Component Flex Justify_Center Align_Center'>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Tricked} alt="Tricked" />
                </div>
                <div className='matches_Info Flex Justify_Center Align_Center Text_Secondary'>
                    <div className='matches_InfoTitle P1_Oxanium Bold '>
                        Tricked VS Astralis Talent
                    </div>
                    <div className='matches_InfoDate P3_Oxanium Medium'>
                        December 25, 2022 4:00 PM
                    </div>
                    <div className='matches_InfoSocials Flex Justify_Center Align_Center'>
                        <img src={Youtube} alt="Astralis" />
                        <img src={Twitch} alt="Astralis" />
                    </div>
                    <div onClick={show} className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
                        See more
                    </div>
                </div>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Astralis} alt="Astralis" />
                </div>
            </div>
            <div className='matches_Component Flex Justify_Center Align_Center'>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Tricked} alt="Tricked" />
                </div>
                <div className='matches_Info Flex Justify_Center Align_Center Text_Secondary'>
                    <div className='matches_InfoTitle P1_Oxanium Bold '>
                        Tricked VS Astralis Talent
                    </div>
                    <div className='matches_InfoDate P3_Oxanium Medium'>
                        December 25, 2022 4:00 PM
                    </div>
                    <div className='matches_InfoSocials Flex Justify_Center Align_Center'>
                        <img src={Youtube} alt="Astralis" />
                        <img src={Twitch} alt="Astralis" />
                    </div>
                    <div onClick={show} className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
                        See more
                    </div>
                </div>
                <div className='matches_Logo Flex Justify_Center Align_Center'>
                    <img src={Astralis} alt="Astralis" />
                </div>
            </div>
        </>
    )
}


export default Matches