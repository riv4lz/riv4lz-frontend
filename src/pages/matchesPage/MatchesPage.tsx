import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import Btn from '../../components/button/Btn';
import Matches from '../../components/matches/matches/Matches'
import EventDetails from '../../components/shared/Event/EventDetails/EventDetails';
import Event from '../../components/shared/EventComponent/Event';
import './MatchesPage.scss'

const MatchesPage = () => {

  const onReadGuide = () => {
    console.log('read guide');
  }

  return (
    <>
      <Matches />
      <div className='Gig_Container'>
        <div className='Gig_Wrapper Grid Content_Width Justify_Center Align_Center'>
          <div className='Gig_Info Flex Justify_Center Align_Center Text_Secondary'>
            <div className='Gig_InfoTitle H3'>WANT MORE GIGS?</div>
            <div className='Gig_InfoSubtitle P0_Oxanium Bold'>Personalize Your Profile</div>
            <div className='Gig_InfoParagraph P3_Oxanium Medium'>
              Casters who has personalized they profile get 80% higher chance
              of getting their offers accepted<br></br><br></br>The most importants aspect is uploading previous highlights to
              show case your skillset
            </div>
            <Link to='/Guide'>
              <Btn onClick={onReadGuide} children='Read More' classes='btn_CallToAction_Blue P3_Oxanium Bold Text_Dark_Blue'></Btn>
            </Link>
          </div>
          <div className='Gig_Pic'></div>
        </div>
      </div>
    </>
  )
}



export default MatchesPage