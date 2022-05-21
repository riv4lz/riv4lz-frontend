import React, { useEffect, useState } from 'react'
import { finished } from 'stream'
import { Match } from '../../../Stores/eventStore'
import { offer } from '../../../Stores/offerStore'
import { useStore } from '../../../Stores/store'
import EventDetails from '../../shared/Event/EventDetails/EventDetails'
import Event from '../../shared/EventComponent/Event'
import './Matches.scss'

const Matches = () => {

    const { eventStore, offerStore, authStore } = useStore();

    useEffect(() => {
        eventStore.loadMatches();
        console.log(eventStore.matches);
        console.log(authStore.isCaster);
        console.log(authStore.isOrg);
        
        
    }, [])
    const load = () => setShowState(true)
    const [searchValue, setSearchValue] = useState('');
    const [upcomingState, setUpcommingState] = useState(true);
    const [finishedState, setFinishedState] = useState(false);
    const [eventDetails, setEventDetails] = useState<IEventDetails>({
        organiser: '',
        description: '',
        teamOne: '',
        teamTwo: '',
        time: '',
        channel: '',
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
    const show = async (event: any) => {
        setEventDetails(event);
        console.log(event.id);
        await offerStore.getOffers(event.id);
        setTimeout(load, 10)
        console.log(offerStore.offers);
        
    }

    const hide = () => {
        setShowState(false);
    }


    return (
        <>
            {showState ?
                <EventDetails isOrg={authStore.isOrg} isCaster={authStore.isCaster} show={showState} handleClose={hide} Event={eventDetails} /> : null
            }
            <div className='Matches_Container Flex '>
                <div className='Matches_Wrapper Flex Content_Width '>
                    <div className='Matches_Title H2 Text_Secondary'>
                        MATCHES
                    </div>
                    <div className='input_Container Flex Justify_Evenly Align_Center'>
                        <div className='input_Component'>
                            <div className='Title P1_Oxanium Bold Text_Secondary'>
                                Filter Matches
                            </div>
                            <input className='Input P4_Oxanium Text_Secondary' type='text' placeholder='Search based on: Game, Teams or Date' onChange={e => setSearchValue(e.target.value)} />
                        </div>
                    </div>
                    <div className='matches_Buttons P1_Oxanium Bold Flex Justify_Center Align_Center'>
                        <div style={{ color: upcomingState === true ? '#279BBB' : 'white' }} onClick={onUpcoming}>Upcoming</div>
                        <div style={{ color: finishedState === true ? '#279BBB' : 'white' }} onClick={onFinished}>Finished</div>
                    </div>
                    <div className='MatchesComponent_Container' id='Matches'>
                        {upcomingState === true ? <Upcoming searchValue={searchValue} events={eventStore.upcoming} show={(value: any) => show(value)} /> : <Finished events={eventStore.finished} show={(value: any) => show(value)} />}
                    </div>
                </div>
            </div>
        </>
    )
}

const Upcoming = ({ searchValue, events, show }: any) => {
    return (
        <>
            {events.filter((test: Match) => {

                return test.id.match(new RegExp(searchValue, "i")) ||
                    test.organisationProfile.name.match(new RegExp(searchValue, "i")) ||
                    test.teams[0].name.match(new RegExp(searchValue, "i")) ||
                    test.teams[1].name.match(new RegExp(searchValue, "i")) ||
                    test.time.match(new RegExp(searchValue, "i"))


            }).map((event: Match, index: any) => (
                <Event key={index} E={event} show={show}  />
            ))}
        </>
    )
}

const Finished = ({ events, show }: any) => {
    return (
        <>
            {events.map((event: IEventDetails, index: any) => (
                <Event key={index} E={event} show={show} />
            ))}
        </>
    )
}

export default Matches