import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import Btn from '../../components/button/Btn';
import CreateMatches from '../../components/matches/createMatches/CreateMatches';
import Matches from '../../components/matches/matches/Matches'
import EventDetails from '../../components/shared/Event/EventDetails/EventDetails';
import Event from '../../components/shared/EventComponent/Event';
import Loading from '../../components/shared/Loading/Loading';
import authService from '../../services/authService';
import { useStore } from '../../stores/store';
import './MatchesPage.scss'

const MatchesPage = () => {
  const {eventStore, userStore} = useStore();

  const onReadGuide = () => {
  }

  const [showState, setShowState] = useState(false);

  
  const show = async() => {
    setShowState(false)
    await eventStore.loadTeams();
    setShowState(true)
  }

  const hide = async() => {
    setShowState(false);
  }

  return (
    <>
      {showState ?
        <CreateMatches  show={showState} handleClose={hide} /> : null
      }
      <Matches />
      {userStore.user.userType === 1 && userStore.user.id !== '' ? 
      <div id='createEvent' className='CreateMatch display-flex justify-content-center align-items-center cursor-pointer' onClick={show}>
        <p className='h3 font-poppins clr-darkblue'>+</p>
      </div>
      : null}
      <div className='Gig_Container'>
        <div className='Gig_Wrapper display-grid width-content justify-content-center align-items-center'>
          <div className='Gig_Info flex-flow clr-secondary'>
            <div className='Gig_InfoTitle h3 font-statewideBold'>WANT MORE GIGS?</div>
            <div className='Gig_InfoSubtitle p0 font-oxanium fw-900'>Personalize Your Profile</div>
            <div className='Gig_InfoParagraph p3 font-oxanium fw-600'>
              Casters who has personalized they profile get 80% higher chance
              of getting their offers accepted<br></br><br></br>The most importants aspect is uploading previous highlights to
              show case your skillset
            </div>
            <Link to='/Guide'>
              <Btn onClick={onReadGuide} children='READ OUR GUIDE HERE' classes='btn_Gig_Guide P3_Oxanium Bold Text_Dark_Blue'></Btn>
            </Link>
          </div>
          <div className='Gig_Pic'></div>
        </div>
      </div>

    </>
  )
}



export default MatchesPage