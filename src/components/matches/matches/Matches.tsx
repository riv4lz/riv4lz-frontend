import React, { useEffect, useState } from 'react'
import { finished } from 'stream'
import { Match } from '../../../Stores/eventStore'
import { offer } from '../../../Stores/offerStore'
import { useStore } from '../../../Stores/store'
import EventDetails from '../../shared/Event/EventDetails/EventDetails'
import Event from '../../shared/EventComponent/Event'
import CreateMatches from '../createMatches/CreateMatches'
import './Matches.scss'

const Matches = () => {

    const { eventStore, offerStore, authStore } = useStore();


    const [loaded, setLoaded] = useState(false)
    const [upcoming, setUpcomming] = useState<Match[]>([])
    const [finished, setFinished] = useState<Match[]>([])
    const test = async () => {
        setLoaded(true)
    }

    setTimeout(test, 500)

    useEffect(() => {
        const t = async () => {
            if(eventStore.matches.length <= 0){
                await eventStore.loadMatches();
            }
            setUpcomming(await eventStore.filterMatches(true));
            setFinished(await eventStore.filterMatches(false))
        }
        t();
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
            {loaded ?
                <>
                    {showState ?
                        <EventDetails isOrg={authStore.isOrg} isCaster={authStore.isCaster} show={showState} handleClose={hide} Event={eventDetails} /> : null
                    }
                    <div className='[ Matches ]    { flex-flow flex-direction-column }'>
                        <div className='Matches__Wrapper    { display-flex width-content flex-direction-column } '>
                            <div className='Matches__Title    { h2 font-statewideBold clr-white flex-direction-column }'>
                                MATCHES
                            </div>
                            <div className='[ Input ]    { display-flex justify-content-space-evenly align-items-center flex-direction-row margin-top-xl margin-bottom-xl }'>
                                <div className='Input__Component'>
                                    <div className='Input__ComponentTitle {p1 font-oxanium fw-600 clr-white padding-left-1 }'>
                                        Filter Matches
                                    </div>
                                    <input className='Input__ComponentInput { p4 font-oxanium clr-white }' type='text' placeholder='Search based on: Game, Teams or Date' onChange={e => setSearchValue(e.target.value)} />
                                </div>
                            </div>
                            <div className='[ Buttons ]    { p1 font-oxanium fw-600 flex-flow margin-top-xl margin-bottom-xxl gap-3 }'>
                                <div style={{ color: upcomingState === true ? '#279BBB' : 'white' }} onClick={onUpcoming}>Upcoming</div>
                                <div style={{ color: finishedState === true ? '#279BBB' : 'white' }} onClick={onFinished}>Finished</div>
                            </div>
                            <div className='[ Components ]    { overflow-y-scroll flex-direction-column margin-bottom-xxl }' id='Matches'>
                                {upcomingState === true ? <Upcoming searchValue={searchValue} events={upcoming} show={(value: any) => show(value)} /> : <Finished searchValue={searchValue} events={finished} show={(value: any) => show(value)} />}
                            </div>
                        </div>
                    </div>
                </>
                : null}
        </>
    )
}

const Upcoming = ({ searchValue, events, show }: any) => {
    return (
        <>
            {events.filter((event: Match) => {

                return event.id.match(new RegExp(searchValue, "i")) ||
                    event.organisationProfile.name.match(new RegExp(searchValue, "i")) ||
                    event.teams[0].name.match(new RegExp(searchValue, "i")) ||
                    event.teams[1].name.match(new RegExp(searchValue, "i")) ||
                    event.time.match(new RegExp(searchValue, "i"))
            }).map((event: Match, index: any) => (
                <Event key={index} E={event} show={show} />
            ))}
        </>
    )
}

const Finished = ({ searchValue, events, show }: any) => {
    return (
        <>
            {events.filter((event: Match) => {

                return event.id.match(new RegExp(searchValue, "i")) ||
                    event.organisationProfile.name.match(new RegExp(searchValue, "i")) ||
                    event.teams[0].name.match(new RegExp(searchValue, "i")) ||
                    event.teams[1].name.match(new RegExp(searchValue, "i")) ||
                    event.time.match(new RegExp(searchValue, "i"))
            }).map((event: Match, index: any) => (
                <Event key={index} E={event} show={show} />
            ))}
        </>
    )
}

export default Matches