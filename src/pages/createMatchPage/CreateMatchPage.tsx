import React, {useEffect, useState} from 'react'
import './CreateMatchPage.scss'
import {Link} from "react-router-dom";
import Btn from "../../components/button/Btn";
import {useStore} from "../../stores/store";
import {createMatchDTO, Team} from "../../stores/eventStore";
import {ChatRoom, messageSent} from "../../stores/commentStore";
import {v4 as uuidv4} from "uuid";

const CreateMatchPage = () => {
  const { eventStore, authStore } = useStore();

  const [id, setId] = useState('')
  const [team1, setTeam1] = useState({id: '', name: ''})
  const [team2, setTeam2] = useState({id: '', name: ''})
  const [dateTime, setDateTime] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  const createMatch = async() => {
    const orgId = authStore.user !== undefined ? authStore.user?.id : ''
    const id = uuidv4().toString()
    
    eventStore.createMatch({id: id, organisationId: orgId, time: dateTime, description: description, price: price, teamOne: team1, teamTwo: team2, game: 'lol', eventStatus: 0})
  }

  const fetchAllTeams = async() => {
    eventStore.loadTeams();
  }

  useEffect(() => {
    eventStore.loadTeams();
  }, []);

  const onSubmit = (e: any) => {
  }

  const onChangeTeam1= (e: any) => {
    setTeam1(eventStore.teams[e.target.value]);
    
}

  const onChangeTeam2= (e: any) => {
      setTeam2(eventStore.teams[e.target.value]);
      
  }


  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <select onChange={onChangeTeam1}>
          {eventStore.teams.map((team: Team, index: any) => (
              <option value={index} key={index}>{team.name}</option>
          ))}
        </select>
        <select onChange={onChangeTeam2}>
          {eventStore.teams.map((team: Team, index: any) => (
              <option value={index} key={index}>{team.name}</option>
          ))}
        </select>
        <div className='Login_Div_Email'>
          <span className='Half_opacity P4_Statewide_light Text_Secondary' >Date</span>
          <input type="datetime-local" className='Email_Input' placeholder='time' value={dateTime} onChange={(e) => setDateTime(e.target.value)}></input>
        </div>
        <div className='Login_Div_Email'>
          <span className='Half_opacity P4_Statewide_light Text_Secondary' >Description</span>
          <input type="text" className='Email_Input' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
        </div>
        <div className='Login_Div_Email'>
          <span className='Half_opacity P4_Statewide_light Text_Secondary'>Price</span>
          <input type="number" className='Email_Input' placeholder='price' value={price} onChange={(e) => setPrice(e.target.valueAsNumber)}></input>
        </div>

        <div className='Login_Div_ForgotPass'>
          <Link to="/Login/ForgotPassword" className='Half_opacity Forgot_Password P4_Statewide_light Text_Secondary'>Forgot Password?</Link>
        </div>
        <div className='Login_Div_Signin'>
          <Btn onClick={createMatch} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="SIGN IN" />
        </div>
      </form>
    </div>
  )
}



export default CreateMatchPage
