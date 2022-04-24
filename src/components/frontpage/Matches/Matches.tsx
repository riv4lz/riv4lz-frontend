import React, { useState } from 'react'
import './Matches.scss'
import Tricked from '../../../assets/images/Esports-orgs/Tricked.svg'
import Astralis from '../../../assets/images/Esports-orgs/Astralis.svg'
import Twitch from '../../../assets/icons/social-media/twitch.svg'
import Youtube from '../../../assets/icons/social-media/youtube.svg'

const Matches = () => {
    const [upcomingState, setUpcommingState] = useState(true);
    const [finishedState, setFinishedState] = useState(false);

    const onUpcoming = () => {
        setUpcommingState(true);
        setFinishedState(false);
    }

    const onFinished = () => {
        setUpcommingState(false);
        setFinishedState(true);
    }

    return (
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

                    {upcomingState === true ? <Upcoming /> : <Finished />}

                </div>
            </div>
        </div>
    )
}

const Upcoming = () => {
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
                    <div className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
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
                    <div className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
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
                    <div className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
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
                    <div className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
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

const Finished = () => {
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
                    <div className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
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
                    <div className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
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
                    <div className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
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
                    <div className='matches_InfoButton Flex Justify_Center Align_Center P3_Oxanium Bold Text_Dark_Blue'>
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