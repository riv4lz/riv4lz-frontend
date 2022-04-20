import React from 'react'
import Matches from '../../components/matches/matches/Matches'
import './MatchesPage.scss'

const MatchesPage = () => {
  return (
    <div className='MatchesPage_Container'>
      <div className='MatchesPage_Wrapper'>
        <Matches />
      </div>
    </div>
  )
}

export default MatchesPage