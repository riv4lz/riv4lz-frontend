import React from 'react'

const EventDetails = () => {
    return (
        <div className='Event_Container'>
            <div className='Event_Title'>
                MATCH OVERVIEW
            </div>
            <div className='Event_DetailsContainer'>
                <div className='Event_HiringInfo'>
                    <div className='Hiring'>
                        <div className='Title'>Hiring</div>
                        <div className='Info'>
                            <div className='Logo'>

                            </div>
                            <div className='Info_Container'>
                                <div className='name'>Tricked Esports</div>
                                <div className='tag'>Danish Professional Esport Organisation</div>
                                <div className='karma'>3.2/5 Karma</div>
                            </div>
                        </div>
                    </div>
                    <div className='Hiring'>
                        <div className='Title'>Hiring</div>
                        <div className='Info'>
                            <div className='name'>Tricked Esports</div>
                            <div className='tag'>Danish Professional Esport Organisation</div>
                            <div className='karma'>3.2/5 Karma</div>
                        </div>
                    </div>
                </div>
                <div className='Event_GameDetails'>
                    <div className='Title'>
                        DETAILS
                    </div>
                    <div className='Component_Container'>
                        <div className='Title'>
                            Time
                        </div>
                        <div className='Info'>
                            19:00 April 1st
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails