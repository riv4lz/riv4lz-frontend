import React from 'react'
import Match from '../match/Match'
import './Matches.scss'

const Matches = () => {
    return (
        <div className='Matches_Container'>
            <div className='Matches_Wrapper'>
                <Match />
                <Match />
            </div>
        </div>
    )
}

export default Matches