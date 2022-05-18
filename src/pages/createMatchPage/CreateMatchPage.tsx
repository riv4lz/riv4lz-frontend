import React, {useEffect, useState} from 'react'
import './CreateMatchPage.scss'
import {Link} from "react-router-dom";
import Btn from "../../components/button/Btn";
import {useStore} from "../../Stores/store";
import {createMatchDTO, Team} from "../../Stores/eventStore";
import {ChatRoom} from "../../Stores/commentStore";

const CreateMatchPage = () => {
  const { eventStore } = useStore();

  const [id, setId] = useState('')
  const [organisationId, setOrganisationId] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const [team1Id, setTeam1Id] = useState('')
  const [team1Name, setTeam1Name] = useState('')
  const [team2Id, setTeam2Id] = useState('')
  const [team, setTeam] = useState({id: '', name: ''})

  const createMatch = async(match: any) => {
    console.log("fisk");
    console.log(match);
    console.log(team.id);
  }

  const fetchAllTeams = async() => {
    eventStore.loadTeams();
  }

  useEffect(() => {
    eventStore.loadTeams();
  }, []);

  const onSubmit = (e: any) => {
    console.log("create match");
  }



  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <select>
          {eventStore.teams.map((team: Team) => (
              <option key={team.id}>{team.name}</option>
          ))}
        </select>
        <select onChange={(e) => setTeam(e.target)}>
          {eventStore.teams.map((team: any) => (
              <option value={team} key={team.id}>{team.id}+ {team.name}</option>
          ))}
        </select>
        <div className='Login_Div_Email'>
          <span className='Half_opacity P4_Statewide_light Text_Secondary' >Email</span>
          <input type="datetime-local" className='Email_Input' placeholder='time' value={dateTime} onChange={(e) => setDateTime(e.target.value)}></input>
        </div>
        <div className='Login_Div_Email'>
          <span className='Half_opacity P4_Statewide_light Text_Secondary' >Email</span>
          <input type="text" className='Email_Input' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
        </div>
        <div className='Login_Div_Email'>
          <span className='Half_opacity P4_Statewide_light Text_Secondary'>Password</span>
          <input type="text" className='Email_Input' placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)}></input>
        </div>

        <div className='Login_Div_ForgotPass'>
          <Link to="/Login/ForgotPassword" className='Half_opacity Forgot_Password P4_Statewide_light Text_Secondary'>Forgot Password?</Link>
        </div>
        <div className='Login_Div_Signin'>
          <Btn onClick={() => createMatch({ dateTime, description, price, team})} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="SIGN IN" />
        </div>
        <div className='Login_Div_Signin'>
          <Btn onClick={() => fetchAllTeams()} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="SIGN IN" />
        </div>
      </form>
    </div>
  )
}



export default CreateMatchPage
