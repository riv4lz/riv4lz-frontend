import React, { useEffect, useState } from 'react'
import './EventDetails.scss'
import Tricked from '../../../../assets/images/Esports-orgs/Tricked.svg'
import Btn from '../../../button/Btn'
import { useStore } from '../../../../stores/store'
import { v4 as uuidv4 } from 'uuid';
import GetImageService from '../../../../services/getImageService'

const EventDetails = ({ isOrg, isCaster, Event, handleClose, show }: any) => {
    const { userStore, offerStore, eventStore } = useStore()
    const [casterState, setCasterState] = useState(isCaster);
    const [organisationState, setOrganisationState] = useState(isOrg);
    const [o, setOffers] = useState<any>([]);

    useEffect(() => {
        if (eventStore.finished.includes(Event)) {
            setCasterState(false);
            setOrganisationState(false);
        }
        setOffers(offerStore.offers);
    }, [])

    const getImageService = new GetImageService();

    return (
        <div className='[ EventDetails ]' style={{ display: show ? 'block' : 'none' }}>
            <div className='EventDetails__Wrapper    { display-flex clr-white flex-direction-column }'>
                <div className='EventDetails_Title    { flex-flow h2 font-statewideBold margin-top-xl }'>
                    MATCH OVERVIEW
                </div>
                <div className='[ Details ]    { display-grid gap-5 }'>
                    <div className='Details__HiringInfo'>
                        <div className='Details__Hiring'>
                            <div className='Details__HiringTitle    { p1 font-statewideBold flex-flow margin-bottom-s }'>hiring organisation</div>
                            <div className='Details__HiringText    { gap-3 margin-bottom-m display-flex justify-content-start align-items-center }'>
                                <div className='Details__HiringLogo'>
                                    <img src={userStore.user.profileImageUrl !== null || undefined ? userStore.user.profileImageUrl : Tricked} alt='Profile Pic' />
                                </div>
                                <div className='Details__InfoText '>
                                    <div className='Details__name    { p2 font-statewideBold clr-white }'>{Event.organisationProfile.name}</div>
                                    <div className='Details__tag    { p4 font-statewideLight clr-white }'>{Event.organisationProfile.description}</div>
                                </div>
                            </div>
                        </div>
                        <div className='[ Participants ] '>
                            <div className='Participants__Title    { p1 font-statewideBold flex-flow }'>Participants</div>
                            <div className='Participants__Info    { display-flex justify-content-space-evenly align-items-center }'>
                                <div className='Participants__team    { p2 font-statewideBold clr-white }'>{Event.teams[0].name}</div>
                                <div className='Participants__vs     { h3 font-statewideBold clr-primary }'>VS</div>
                                <div className='Participants__team    { p2 font-statewideBold clr-white }'>{Event.teams[1].name}</div>
                            </div>
                        </div>
                    </div>
                    <div className='[ GameDetails ]'>
                        <div className='GameDetails__Title    { p1 font-statewideBold flex-flow }'>
                            DETAILS
                        </div>
                        <div className='GameDetails__Components    { display-grid }'>
                            <div className='GameDetails__Infocomponent    { display-flex justify-content-center flex-direction-column }'>
                                <div className='GameDetails__InfocomponentTitle     { p2 font-statewideBold margin-bottom-xs }'>
                                    Time
                                </div>
                                <div className='GameDetails__InfocomponentInfo    { p4 font-statewideLight margin-bottom-xs }'>
                                    {Event.time}
                                </div>
                            </div>
                            <div className='GameDetails__Infocomponent    { display-flex justify-content-center flex-direction-column }'>
                                <div className='GameDetails__InfocomponentTitle    { p2 font-statewideBold margin-bottom-xs }'>
                                    Channel
                                </div>
                                <div className='GameDetails__InfocomponentInfo     { p4 font-statewideLight margin-bottom-xs }'>
                                    {Event.organisationProfile.twitchUrl}
                                </div>
                            </div>

                            <div className='GameDetails__InfocomponentGame    { display-flex justify-content-center flex-direction-column }'>
                                <div className='GameDetails__InfocomponentTitle    { p2 font-statewideBold }'>
                                    game
                                </div>
                                <div className='GameDetails__InfocomponentInfo    { p4 font-statewideLight margin-bottom-xs }'>
                                    {Event.game}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {casterState ? <Caster Event={Event} handleClose={handleClose} /> : organisationState && userStore.user.id === Event.organisationProfile.id ? <Organisation handleClose={handleClose} /> : null}
                <div className='[ CloseButton ]    { flex-flow margin-bottom-xl margin-top-xxl }'>
                    <Public Close={handleClose} />
                </div>
            </div>
        </div>
    )
}


const Public = ({ Close }: any) => {
    return (
        <Btn onClick={Close} children='Close' classes='{ btn_CallToAction_Blue p3 font-oxanium fw-900 clr-darkblue }' />
    )
}

const Caster = ({ Event, handleClose }: any) => {
    const {offerStore, authStore} = useStore();
    const [offer, setOfferState] = useState("");

    const onSendOffer = async() => {

        await offerStore.sendOffer({id: uuidv4(), offerStatus: 0, eventId: Event.id, casterId: authStore.user?.id ? authStore.user.id : ""});
        handleClose();
        alert("Offer sent!");
    }
    return (
        <div className='[ Caster ]   { flex-flow margin-top-xl flex-direction-column }'>

            <div className='Caster_Title    { flex-flow p1 font-statewideBold clr-white }'>Send Offer</div>
            <div className='Caster_Paragraph    { flex-flow p4 font-statewideLight }'>If you exceed the povided min and maximum values by the organisation, your acceptance rate will be significantly lower</div>
            <div className='[ Caster_Component ]    { display-grid margin-top-s gap-2 }'>
                <div className='Caster_Component__Budget'>
                    <div className='Caster_Component__BudgetTitle    { p1 font-statewideBold }'>Organisation budget</div>
                    <div className='Caster_Component__BudgetInfo    { flex-flow p1 font-oxanium fw-900 }'> {Event.price} </div>
                </div>
                <div className='[ OfferComponent ]    { p1 font-statewideBold }'>
                    <div className='OfferComponent__Title'>Your Offer</div>
                    <div className='OfferComponent__inputContainer    { flex-flow gap-2 flex-direction-row }'>
                        <Btn classes='{ btn-offer-solid p3 font-oxanium fw-900 clr-darkblue }' children='Send Offer' onClick={onSendOffer} />
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
        
        
    }

    const onDeclineOffer = async (offer: any) => {
        const status = await offerStore.declineOffer({id: offer.id, offerStatus: 2});
        
        
    }

    return (
        <div className='[ Org ]    { flex-flow margin-top-xl flex-direction-column }'>
            <div className='Org__Title    { margin-bottom-s display-flex justify-content-start align-items-center p1 font-statewideBold clr-white }'>Caster Applications</div>
            <div className='[ OrgComponent ]    { display-flex align-items-start flex-direction-column gap-2 overflow-y-scroll }'>
                {offerStore.offers.map((offer: any) => {
                    return (
                        <div key={offer.id} className='OrgComponent__Wrapper    { flex-direction-row display-flex justify-content-start align-items-center }'>
                            <div className='OrgComponent__Image    { flex-flow }'> <img src={offer.caster.profileImage !== null ? offer.caster.profileImage : 'https://i.imgur.com/sh2 font-statewideBoldIN1A_d.webp?maxwidth=760&fidelity=grand'} alt="" /></div>
                            <div className='OrgComponent__NameContainer    { display-flex flex-direction-column justify-content-space-around align-items-center }'>
                                <div className='OrgComponent__Name    { p1 font-statewideBold clr-white }'>
                                    {offer.caster.name}
                                </div>
                                <div className='OrgComponent__Description    { p4 font-statewideBold clr-white }'>
                                    {offer.caster.description}
                                </div>
                            </div>
                            <div className='OrgComponent__OfferContainer    { flex-direction-row gap-2 display-flex justify-content-flex-end align-items-center }'>
                                <div className='OrgComponent__accept   { btn-offer-solid }' onClick={() => onAcceptOffer(offer)}>Accept</div>
                                <div className='OrgComponent__decline    { btn-offer-outline }' onClick={() => onDeclineOffer(offer)}>Decline</div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}


export default EventDetails