import React, { useEffect, useState } from 'react'
import './CreateMatches.scss'
import { useStore } from '../../../Stores/store'
import Btn from '../../button/Btn'
import { createMatchDTO, Team } from "../../../Stores/eventStore";
import { v4 as uuidv4 } from "uuid";


const CreateMatches = ({ show, handleClose }: any) => {
    const { eventStore, authStore } = useStore()

    const [team1, setTeam1] = useState({ id: '', name: '' })
    const [team2, setTeam2] = useState({ id: '', name: '' })
    const [dateTime, setDateTime] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [game, setGame] = useState('')

    const onChangeTeam1 = (e: any) => {
        setTeam1(eventStore.teams[e.target.value]);
        console.log(eventStore.teams[e.target.value]);

    }

    const onChangeTeam2 = (e: any) => {
        setTeam2(eventStore.teams[e.target.value]);
        console.log(eventStore.teams[e.target.value]);

    }

    const createEvent = async () => {
        const orgId = authStore.user !== undefined ? authStore.user?.id : ''
        const id = uuidv4().toString()
        if (dateTime.length <= 0) {
            alert("Date cannot be empty");
            return;
        }
        if (new Date(dateTime) < new Date()) {
            alert("Date cannot be in the past");
            return;
        }
        if (description.length <= 0) {
            alert("Description cannot be empty");
            return;
        }
        if (price <= 0) {
            alert("Price must be greater than 0");
            return;
        }
        if (game.length <= 0) {
            alert("Game cannot be empty");
            return;
        }
        if (team1.id === team2.id) {
            alert("Teams cannot be the same");
            return;
        }

        eventStore.createMatch({ id: id, organisationId: orgId, time: dateTime, description: description, price: price, teamOne: team1, teamTwo: team2, game: 'lol', eventStatus: 0 })
        handleClose()

        window.location.reload();
    }

    return (
        <div className='Event_Container' style={{ display: show ? 'block' : 'none' }}>
            <div className='Event_Wrapper Flex Text_Secondary'>
                <div className='Event_Title Flex Justify_Center Align_Center H2'>
                    Create event
                </div>
                <div className='Event_DetailsContainer Grid'>
                    <div className='Event_HiringInfo'>
                        <div className='Participants display-flex flex-direction-column'>
                            <div className='Title P1_Statewide_Bold Flex Justify_Center Align_Center'>Participants</div>
                            <div className='Info Flex Justify_Evenly Align_Center'>
                                <select id='team1' onChange={onChangeTeam1}>
                                    {eventStore.teams.map((team: Team, index: any) => (
                                        <option value={index} key={index}>{team.name}</option>
                                    ))}
                                </select>
                                <div className='vs H3 Text_Primary'>VS</div>
                                <select id='team2' onChange={onChangeTeam2}>
                                    {eventStore.teams.map((team: Team, index: any) => (
                                        <option value={index} key={index}>{team.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='Event_GameDetails'>
                        <div className='Title P1_Statewide_Bold Flex Justify_Center Align_Center'>
                            DETAILS
                        </div>
                        <div className='Component_Container Grid'>
                            <div className='Info_component Flex Justify_Center'>
                                <div className='Component_Title P2_Statewide_Bold'>
                                    Time
                                </div>
                                <div className='Info P4_Statewide_light'>
                                    <input id='date' type="datetime-local" className='Email_Input' placeholder='time' value={dateTime} onChange={(e) => setDateTime(e.target.value)}></input>
                                </div>
                            </div>
                            <div className='Info_component Flex Justify_Center'>
                                <div className='Component_Title P2_Statewide_Bold'>
                                    Description
                                </div>
                                <div className='Info P4_Statewide_light'>
                                    <input id='description' type="text" className='Email_Input' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                                </div>
                            </div>

                            <div className='Info_component Flex Justify_Center'>
                                <div className='Component_Title P2_Statewide_Bold'>
                                    Price
                                </div>
                                <div className='Info P4_Statewide_light'>
                                    <input id='price' type="number" className='Email_Input' placeholder='price' value={price} onChange={(e) => setPrice(e.target.valueAsNumber)}></input>
                                </div>
                            </div>
                            <div className='Info_component Flex Justify_Center'>
                                <div className='Component_Title P2_Statewide_Bold'>
                                    Game
                                </div>
                                <div className='Info P4_Statewide_light'>
                                    <input id='game' type="text" className='Email_Input' placeholder='CS:GO' value={game} onChange={(e) => setGame(e.target.value)}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Event_button gap-2 Flex Justify_Center Align_Center'>
                    <Btn onClick={handleClose} children='Close' classes='btn_CallToAction_White P3_Oxanium Bold Text_Dark_Blue' />
                    <Btn onClick={createEvent} children='Create' classes='btn_CallToAction_Blue P3_Oxanium Bold Text_Dark_Blue' />
                </div>
            </div>
        </div>
    )
}

export default CreateMatches