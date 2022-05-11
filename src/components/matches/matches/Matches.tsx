import React, { useState } from 'react'
import EventDetails from '../../shared/Event/EventDetails/EventDetails'
import Event from '../../shared/EventComponent/Event'
import Match from '../match/Match'
import './Matches.scss'

const Matches = () => {
    const upcomingList = [{
        organiser: 'Tricked',
        description: 'Tricked',
        teamOne: 'Tricked',
        teamTwo: 'Astralis',
        time: 'December 25, 2022 4:00 PM',
        channel: 'https://www.twitch.tv/tricked',
        game: 'League of Legends'

    }, {
        organiser: 'Tricked',
        description: 'Tricked',
        teamOne: 'Tricked',
        teamTwo: 'Astralis',
        time: 'December 25, 2022 4:00 PM',
        channel: 'https://www.twitch.tv/tricked',
        game: 'League of Legends'

    }, {
        organiser: 'Tricked',
        description: 'Tricked',
        teamOne: 'Tricked',
        teamTwo: 'Astralis',
        time: 'December 25, 2022 4:00 PM',
        channel: 'https://www.twitch.tv/tricked',
        game: 'League of Legends'

    }, {
        organiser: 'Tricked',
        description: 'Tricked',
        teamOne: 'Tricked',
        teamTwo: 'Astralis',
        time: 'December 25, 2022 4:00 PM',
        channel: 'https://www.twitch.tv/tricked',
        game: 'League of Legends'

    }]

    const finishedList = [{
        organiser: 'Astralis',
        description: 'Astralis',
        teamOne: 'Astralis',
        teamTwo: 'Tricked',
        time: 'December 25, 2022 4:00 PM',
        channel: 'https://www.twitch.tv/Astralis',
        game: 'CSGO'

    }, {
        organiser: 'Astralis',
        description: 'Astralis',
        teamOne: 'Astralis',
        teamTwo: 'Tricked',
        time: 'December 25, 2022 4:00 PM',
        channel: 'https://www.twitch.tv/Astralis',
        game: 'CSGO'

    }, {
        organiser: 'Astralis',
        description: 'Astralis',
        teamOne: 'Astralis',
        teamTwo: 'Tricked',
        time: 'December 25, 2022 4:00 PM',
        channel: 'https://www.twitch.tv/Astralis',
        game: 'CSGO'

    }, {
        organiser: 'Astralis',
        description: 'Astralis',
        teamOne: 'Astralis',
        teamTwo: 'Tricked',
        time: 'December 25, 2022 4:00 PM',
        channel: 'https://www.twitch.tv/Astralis',
        game: 'CSGO'

    }]

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
    const show = (event: any) => {
        console.log(showState);


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
            <div className='Matches_Container Flex '>
                <div className='Matches_Wrapper Flex Content_Width '>
                    <div className='Matches_Title H2 Text_Secondary'>
                        MATCHES
                    </div>
                    <div className='input_Container Flex Justify_Evenly Align_Center'>
                        <div className='input_Component'>
                            <div className='Title P1_Oxanium Bold Text_Secondary'>
                                Team
                            </div>
                            <input className='Input Text_Secondary' type='text' placeholder='Team' />
                        </div>
                        <div className='input_Component'>
                            <div className='Title P1_Oxanium Bold Text_Secondary'>
                                Game
                            </div>
                            <input className='Input' type='text' placeholder='Game' />
                        </div>
                        <div className='input_Component'>
                            <div className='Title P1_Oxanium Bold Text_Secondary'>
                                Date
                            </div>
                            <input className='Input' type='text' placeholder='Game' />
                        </div>
                    </div>
                    <div className='matches_Buttons P1_Oxanium Bold Flex Justify_Center Align_Center'>
                        <div style={{ color: upcomingState === true ? '#279BBB' : 'white' }} onClick={onUpcoming}>Upcoming</div>
                        <div style={{ color: finishedState === true ? '#279BBB' : 'white' }} onClick={onFinished}>Finished</div>
                    </div>
                    <div className='MatchesComponent_Container' id='Matches'>
                    {upcomingState === true ? <Upcoming events={upcomingList} show={(value: any) => show(value)} /> : <Finished events={finishedList} show={(value: any) => show(value)} />}
                    </div>
                </div>
            </div>
        </>
    )
}

const Upcoming = ({ events, show }: any) => {
    return (
        <>
            {events.map((event: IEventDetails, index: any) => (
                <Event key={index} E={event} show={show} />
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