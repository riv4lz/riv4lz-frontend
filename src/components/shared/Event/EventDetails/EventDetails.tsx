import React, { useState } from 'react'
import './EventDetails.scss'
import Tricked from '../../../../assets/images/Esports-orgs/Tricked.svg'
import Btn from '../../../button/Btn'

const EventDetails = ({ Event, handleClose, show }: any) => {
    const [casterState, setCasterState] = useState(true);
    const [organisationState, setOrganisationState] = useState(false);
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
                {casterState ? <Caster /> : organisationState ? <Organisation /> : null}
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

const Caster = () => {
    const [offer, setOfferState] = useState("");

    const onSendOffer = () => {
        console.log(offer)
    }
    return (
        <div className='Caster_Container Flex Justify_Center Align_Center'>

            <div className='Caster_Title Flex Justify_Center Align_Center P1_Statewide_Bold Text_Secondary'>Send Offer</div>
            <div className='Caster_Paragraph Flex Justify_Center Align_Center P4_Statewide_light'>If you exceed the povided min and maximum values by the organisation, your acceptance rate will be significantly lower</div>
            <div className='Caster_Component_Container Grid'>
                <div className='Budget'>
                    <div className='Title P1_Statewide_Bold'>Organisation budget</div>
                    <div className='Info Flex Justify_Center Align_Center P1_Oxanium Bold'> 250kr </div>
                </div>
                <div className='Offer P1_Statewide_Bold'>
                    <div className='Title'>Your Offer</div>
                    <div className='input_Container Flex Justify_Center Align_Center'>
                        <input className='P3_Oxanium Bold Text_Secondary' type="text" onChange={e => setOfferState(e.target.value)} />
                        <Btn classes='btn_Offer_Solid P3_Oxanium Bold Text_Dark_Blue' children='Send Offer' onClick={onSendOffer} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const CasterButtons = ({ Close }: any) => {
    return (
        <Btn onClick={Close} children='Close' classes='btn_CallToAction_Blue P3_Oxanium Bold Text_Dark_Blue' />
    )
}
const Organisation = () => {
    const offers: any[] = [{
        caster: {
            ProfileImage: 'https://i.imgur.com/lpWSQZX_d.webp?maxwidth=760&fidelity=grand',
            firstname: 'John',
            lastname: 'Doe',
            gamerTag: 'JohnDoe',
            description: 'Lorem ipsum dolor sit amet',
        },
        casterOffer: '10$'
    }, {
        caster: {
            ProfileImage: 'https://i.imgur.com/lpWSQZX_d.webp?maxwidth=760&fidelity=grand',
            firstname: 'John',
            lastname: 'Doe',
            gamerTag: 'JohnDoe',
            description: 'Lorem ipsum dolor sit amet',
        },
        casterOffer: '10$'
    }, {
        caster: {
            ProfileImage: 'https://i.imgur.com/lpWSQZX_d.webp?maxwidth=760&fidelity=grand',
            firstname: 'John',
            lastname: 'Doe',
            gamerTag: 'JohnDoe',
            description: 'Lorem ipsum dolor sit amet',
        },
        casterOffer: '10$'
    }, {
        caster: {
            ProfileImage: 'https://i.imgur.com/lpWSQZX_d.webp?maxwidth=760&fidelity=grand',
            firstname: 'John',
            lastname: 'Doe',
            gamerTag: 'JohnDoe',
            description: 'Lorem ipsum dolor sit amet',
        },
        casterOffer: '10$'
    }];

    return (
        <div className='Offer_Container Flex Justify_Center Align_Center'>
            <div className='Offer_Title Flex Justify_Start Align_Center P1_Statewide_Bold Text_Secondary'>Caster Applications</div>
            <div className='Component_Container Flex Align_Start'>
                {offers.map((offer: any) => {
                    return (
                        <div className='Component_Wrapper Flex Justify_Start Align_Center'>
                            <div className='image Flex Justify_Center Align_Center'> <img src={offer.caster.ProfileImage} alt="" /></div>
                            <div className='name_container Flex Justify_Around Align_Center'>
                                <div className='name P1_Statewide_Bold Text_Secondary'>
                                    {offer.caster.firstname} {offer.caster.lastname} - {offer.caster.gamerTag}
                                </div>
                                <div className='description P4_Statewide_Bold Text_Secondary'>
                                    {offer.caster.description}
                                </div>
                            </div>
                            <div className='offer_container Flex Justify_End Align_Center'>
                                <div className='offer P1_Statewide_Bold Text_Secondary'>{offer.casterOffer}</div>
                                <div className='accept btn_Offer_Solid'>Accept</div>
                                <div className='decline btn_Offer_Outline'>Decline</div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}


export default EventDetails