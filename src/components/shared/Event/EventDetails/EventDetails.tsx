import React, { useEffect } from 'react'
import './EventDetails.scss'
import Tricked from '../../../../assets/images/Esports-orgs/Tricked.svg'
import Btn from '../../../button/Btn'

const EventDetails = ({ Event, handleClose, show }: any) => {
    return (
        <div className='Event_Container' style={{ display: show ? 'block' : 'none' }}>
            <div className='Event_Wrapper Flex Text_Secondary'>
                <div className='Event_Title Flex Justify_Center Align_Center H2'>
                    MATCH OVERVIEW
                </div>
                <div className='Event_DetailsContainer Grid'>
                    <div className='Event_HiringInfo'>
                        <div className='Hiring'>
                            <div className='Title P1_Statewide_Bold Flex Justify_Center Align_Center'>hiring organisation</div>
                            <div className='Info Flex Justify_Start Align_Center'>
                                <div className='Logo'>
                                    <img src={Tricked} alt='Tricked' />
                                </div>
                                <div className='Info_Container '>
                                    <div className='name P2_Statewide_Bold Text_Secondary'>{Event.organiser}</div>
                                    <div className='tag P4_Statewide_light Text_Secondary'>{Event.description}</div>
                                </div>
                            </div>
                        </div>
                        <div className='Participants '>
                            <div className='Title P1_Statewide_Bold Flex Justify_Center Align_Center'>Participants</div>
                            <div className='Info Flex Justify_Evenly Align_Center'>
                                <div className='team P2_Statewide_Bold Text_Secondary'>{Event.teamOne}</div>
                                <div className='vs H3 Text_Primary'>VS</div>
                                <div className='team P2_Statewide_Bold Text_Secondary'>{Event.teamTwo}</div>
                            </div>
                        </div>
                    </div>
                    <div className='Event_GameDetails'>
                        <div className='Title P1_Statewide_Bold Flex Justify_Center Align_Center'>
                            DETAILS
                        </div>
                        <div className='Component_Container Grid'>
                            <div className='Info_component Flex Justify_Center'>
                                <div className='Component_Title P2_Statewide_Bold'>
                                    Time
                                </div>
                                <div className='Info P4_Statewide_light'>
                                    {Event.time}
                                </div>
                            </div>
                            <div className='Info_component Flex Justify_Center'>
                                <div className='Component_Title P2_Statewide_Bold'>
                                    Channel
                                </div>
                                <div className='Info P4_Statewide_light'>
                                    {Event.channel}
                                </div>
                            </div>

                            <div className='Info_component Game Flex Justify_Center'>
                                <div className='Component_Title P2_Statewide_Bold'>
                                    game
                                </div>
                                <div className='Info P4_Statewide_light'>
                                    {Event.game}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Event_button Flex Justify_Center Align_Center'>
                    <Public Close={handleClose} />
                </div>
            </div>
        </div>
    )
}


const Public = ({ Close }: any) => {
    return (
        <Btn onClick={Close} children='Close' classes='btn_CallToAction_Blue P3_Oxanium Bold Text_Dark_Blue' />
    )
}


export default EventDetails