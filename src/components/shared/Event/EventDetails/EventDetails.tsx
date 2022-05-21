import React, { useEffect, useState } from 'react'
import './EventDetails.scss'
import Tricked from '../../../../assets/images/Esports-orgs/Tricked.svg'
import Btn from '../../../button/Btn'
import { useStore } from '../../../../Stores/store'
import { OrgStore } from '../../../../Stores/orgStore'
import { v4 as uuidv4 } from 'uuid';

const EventDetails = ({ isOrg, isCaster, Event, handleClose, show }: any) => {
    const { userStore, offerStore } = useStore()
    const [casterState, setCasterState] = useState(isCaster);
    const [organisationState, setOrganisationState] = useState(isOrg);
    const [o, setOffers] = useState<any>([]);

    useEffect(() => {
        setOffers(offerStore.offers);
    }, [])

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
                                    <div className='name P2_Statewide_Bold Text_Secondary'>{Event.organisationProfile.name}</div>
                                    <div className='tag P4_Statewide_light Text_Secondary'>{Event.organisationProfile.description}</div>
                                </div>
                            </div>
                        </div>
                        <div className='Participants '>
                            <div className='Title P1_Statewide_Bold Flex Justify_Center Align_Center'>Participants</div>
                            <div className='Info Flex Justify_Evenly Align_Center'>
                                <div className='team P2_Statewide_Bold Text_Secondary'>{Event.teams[0].name}</div>
                                <div className='vs H3 Text_Primary'>VS</div>
                                <div className='team P2_Statewide_Bold Text_Secondary'>{Event.teams[1].name}</div>
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
                                    {Event.organisationProfile.twitchURL}
                                </div>
                            </div>

                            <div className='Info_component Game Flex Justify_Center'>
                                <div className='Component_Title P2_Statewide_Bold'>
                                    game
                                </div>
                                <div className='Info P4_Statewide_light'>
                                    {Event.id}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {casterState ? <Caster Event={Event} handleClose={handleClose} /> : organisationState && userStore.user.id === Event.organisationProfile.id ? <Organisation handleClose={handleClose} /> : null}
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

const Caster = ({ Event, handleClose }: any) => {
    const {offerStore, authStore} = useStore();
    const [offer, setOfferState] = useState("");

    const onSendOffer = () => {

        offerStore.sendOffer({id: uuidv4(), offerStatus: 0, eventId: Event.id, casterId: authStore.user?.id ? authStore.user.id : ""});
        console.log(offerStore.offers);
        handleClose();
        alert("Offer sent!");
    }
    return (
        <div className='Caster_Container Flex Justify_Center Align_Center'>

            <div className='Caster_Title Flex Justify_Center Align_Center P1_Statewide_Bold Text_Secondary'>Send Offer</div>
            <div className='Caster_Paragraph Flex Justify_Center Align_Center P4_Statewide_light'>If you exceed the povided min and maximum values by the organisation, your acceptance rate will be significantly lower</div>
            <div className='Caster_Component_Container Grid'>
                <div className='Budget'>
                    <div className='Title P1_Statewide_Bold'>Organisation budget</div>
                    <div className='Info Flex Justify_Center Align_Center P1_Oxanium Bold'> {Event.price} </div>
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

const Organisation = ({handleClose}: any ) => {
    const { offerStore } = useStore()

    interface test {
        id: string,
        offerStatus: number
    }

    const onAcceptOffer = async (offer: any) => {
        const status = await offerStore.acceptOffer({id: offer.id, offerStatus: 1});
        console.log(status);
        
    }

    const onDeclineOffer = async (offer: any) => {
        const status = await offerStore.declineOffer({id: offer.id, offerStatus: 2});
        console.log(status);
        
    }

    return (
        <div className='Offer_Container Flex Justify_Center Align_Center'>
            <div className='Offer_Title Flex Justify_Start Align_Center P1_Statewide_Bold Text_Secondary'>Caster Applications</div>
            <div className='Component_Container Flex Align_Start'>
                {offerStore.offers.map((offer: any) => {
                    return (
                        <div key={offer.id} className='Component_Wrapper Flex Justify_Start Align_Center'>
                            <div className='image Flex Justify_Center Align_Center'> <img src={offer.caster.profileImage !== null ? offer.caster.profileImage : 'https://i.imgur.com/sH2IN1A_d.webp?maxwidth=760&fidelity=grand'} alt="" /></div>
                            <div className='name_container Flex Justify_Around Align_Center'>
                                <div className='name P1_Statewide_Bold Text_Secondary'>
                                    {offer.caster.name}
                                </div>
                                <div className='description P4_Statewide_Bold Text_Secondary'>
                                    {offer.caster.description}
                                </div>
                            </div>
                            <div className='offer_container Flex Justify_End Align_Center'>
                                <div className='accept btn_Offer_Solid' onClick={() => onAcceptOffer(offer)}>Accept</div>
                                <div className='decline btn_Offer_Outline' onClick={() => onDeclineOffer(offer)}>Decline</div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}


export default EventDetails