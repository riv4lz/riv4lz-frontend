import React, { useEffect, useState } from 'react'
import './Matches.scss'
import Tricked from '../../../assets/images/Esports-orgs/Tricked.svg'
import Astralis from '../../../assets/images/Esports-orgs/Astralis.svg'
import Twitch from '../../../assets/icons/social-media/twitch.svg'
import Youtube from '../../../assets/icons/social-media/youtube.svg'
import EventDetails from '../../shared/Event/EventDetails/EventDetails'
import Event from '../../shared/EventComponent/Event'
import { useStore } from '../../../Stores/store'
import { v4 as uuidv4 } from 'uuid';
import { Match } from '../../../Stores/eventStore'

const Matches = () => {

    const { eventStore } = useStore();

    useEffect(() => {
        const loadMatches = async () => {
            if (eventStore.matches.length <= 0) {
                await eventStore.loadMatches();
            }
            setUpcomingMatches(await eventStore.filterMatches(true));
            setFinishedMatches(await eventStore.filterMatches(false));
        }
        loadMatches();

    }, [])

    const [upcomingState, setUpcommingState] = useState(true);
    const [finishedState, setFinishedState] = useState(false);
    const [upcomingMatches, setUpcomingMatches] = useState<Match[]>([]);
    const [finishedMatches, setFinishedMatches] = useState<Match[]>([]);
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
    const show = (event: any) => {
        setEventDetails(event);
        setShowState(true);
    }

    const hide = () => {
        setShowState(false);
    }

    return (
        <>
            {showState ?
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

                        {upcomingState === true ? <Upcoming events={upcomingMatches} show={(value: any) => show(value)} /> : <Finished events={finishedMatches} show={(value: any) => show(value)} />}

                    </div>
                </div>
            </div>
        </>
    )
}

const Upcoming = ({ events, show }: any) => {

    const getEvents = (events: IEventDetails[]) => {
        const content = [];
        for (let i = 0; i < events.length && i < 4; i++) {
            const k = uuidv4();
            content.push(<Event key={k} E={events[i]} show={show} />);
        }
        return content;
    }


    return (
        <>
            {getEvents(events)}
        </>
    )
}

const Finished = ({ events, show }: any) => {
    const getEvents = (events: IEventDetails[]) => {
        const content = [];
        for (let i = 0; i < events.length && i < 4; i++) {
            const k = uuidv4();
            content.push(<Event key={k} E={events[i]} show={show} />);
        }
        return content;
    }


    return (
        <>
            {getEvents(events)}
        </>
    )
}


export default Matches
