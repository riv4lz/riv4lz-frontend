import React, {useEffect, useState} from 'react'
import './CreateMatchPage.scss'
import {Link} from "react-router-dom";
import Btn from "../../components/button/Btn";
import {useStore} from "../../Stores/store";
import {createMatchDTO, Team} from "../../Stores/eventStore";
import {ChatRoom, messageSent} from "../../Stores/commentStore";
import {v4 as uuidv4} from "uuid";

const CreateMatchPage = () => {
  const { eventStore } = useStore();

  const [id, setId] = useState('')
  const [organisationId, setOrganisationId] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  const [team1Id, setTeam1Id] = useState('')
  const [team1Name, setTeam1Name] = useState('')
  const [team2Id, setTeam2Id] = useState('')
  const [team2Name, setTeam2Name] = useState('')
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')


  const createMatch2 = () => {
    const createMatchDto: createMatchDTO = {
      id: uuidv4(),
      organisationId: organisationId,
      time: dateTime,
      description: description,
      //teams: any;
      price: price,
    }
    //eventStore.createMatch(createMatchDto).then(() => {});
  }
  const createMatch = async(match: any) => {
    console.log("fisk");
    console.log(match);
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
        <select onChange={(e) => setTeam1Id(e.target.value)}>
          {eventStore.teams.map((team: Team) => (
              <option value={team.id} key={team.id}>{team.name}</option>
          ))}
        </select>
        <select onChange={(e) => setTeam2Id(e.target.value)}>
          {eventStore.teams.map((team: Team) => (
              <option value={team.id} key={team.id}>{team.name}</option>
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
          <input type="text" className='Email_Input' placeholder='price' value={price} onChange={(e) => setPrice(e.target.valueAsNumber)}></input>
        </div>

        <div className='Login_Div_ForgotPass'>
          <Link to="/Login/ForgotPassword" className='Half_opacity Forgot_Password P4_Statewide_light Text_Secondary'>Forgot Password?</Link>
        </div>
        <div className='Login_Div_Signin'>
          <Btn onClick={() => createMatch({ dateTime, description, price, team1Id, team2Id})} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="SIGN IN" />
        </div>
        <div className='Login_Div_Signin'>
          <Btn onClick={() => fetchAllTeams()} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="SIGN IN" />
        </div>
      </form>
    </div>
  )
}



export default CreateMatchPage
