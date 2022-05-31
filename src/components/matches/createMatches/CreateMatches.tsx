import React, { useEffect, useState } from 'react'
import './CreateMatches.scss'
import { useStore } from '../../../stores/store'
import Btn from '../../button/Btn'
import { createMatchDTO, Team } from "../../../stores/eventStore";
import { v4 as uuidv4 } from "uuid";


const CreateMatches = ({ show, handleClose }: any) => {
    const { eventStore, authStore } = useStore()

    const [team1, setTeam1] = useState(eventStore.teams[0])
    const [team2, setTeam2] = useState(eventStore.teams[0])
    const [dateTime, setDateTime] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [game, setGame] = useState('')

    const onChangeTeam1 = (e: any) => {
        setTeam1(eventStore.teams[e.target.value]);

    }

    const onChangeTeam2 = (e: any) => {
        setTeam2(eventStore.teams[e.target.value]);

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

        eventStore.createMatch({ id: id, organisationId: orgId, time: dateTime, description: description, price: price, teamOne: team1, teamTwo: team2, game: game, eventStatus: 0 })
        handleClose()
    }

    return (
        <div className='[ Event ]' style={{ display: show ? 'block' : 'none' }}>
            <div className='Event__Wrapper   { display-flex clr-white }'>
                <div className='Event__Title    { flex-flow h2 font-statewideBold }'>
                    Create event
                </div>
                <div className='[ Details ]    { Grid }'>
                    <div className='[ Teams ]'>
                        <div className='Teams__Participants    { display-flex flex-direction-column }'>
                            <div className='Teams__Participants__Title    { p1 font-statewideBold flex-flow }'>Participants</div>
                            <div className='Teams__Participants__Info    { display-flex justify-content-space-evenly align-items-center }'>
                                <select id='team1' onChange={onChangeTeam1}>
                                    {eventStore.teams.map((team: Team, index: any) => (
                                        <option value={index} key={index}>{team.name}</option>
                                    ))}
                                </select>
                                <div className='{ h3 font-statewideBold clr-primary }'>VS</div>
                                <select id='team2' onChange={onChangeTeam2}>
                                    {eventStore.teams.map((team: Team, index: any) => (
                                        <option value={index} key={index}>{team.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='[ GameDetails ]'>
                        <div className='GameDetails__Title    { p1 font-statewideBold flex-flow }'>
                            DETAILS
                        </div>
                        <div className='[ Components ]    { Grid }'>
                            <div className='Components__InfoComponent    { display-flex justify-content-center }'>
                                <div className='Component_Title    { p2 font-statewideBold }'>
                                    Time
                                </div>
                                <div className='Components__InfoComponent__Info    { p4 font-statewideLight }'>
                                    <input id='date' type="datetime-local" className='Email_Input' placeholder='time' value={dateTime} onChange={(e) => setDateTime(e.target.value)}></input>
                                </div>
                            </div>
                            <div className='Components__InfoComponent    { display-flex justify-content-center }'>
                                <div className='Component_Title    { p2 font-statewideBold }'>
                                    Description
                                </div>
                                <div className='Components__InfoComponent__Info    { p4 font-statewideLight }'>
                                    <input id='description' type="text" className='Email_Input' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                                </div>
                            </div>

                            <div className='Components__InfoComponent    { display-flex justify-content-center }'>
                                <div className='Component_Title'>
                                    Price
                                </div>
                                <div className='Components__InfoComponent__Info    { p4 font-statewideLight }'>
                                    <input id='price' type="number" className='Email_Input' placeholder='price' value={price} onChange={(e) => setPrice(e.target.valueAsNumber)}></input>
                                </div>
                            </div>
                            <div className='Components__InfoComponent    { display-flex justify-content-center }'>
                                <div className='Component_Title    { p2 font-statewideBold }'>
                                    Game
                                </div>
                                <div className='Components__InfoComponent__Info     { p4 font-statewideLight }'>
                                    <input id='game' type="text" className='Email_Input' placeholder='CS:GO' value={game} onChange={(e) => setGame(e.target.value)}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='[ Buttons ]    { gap-2 flex-flow }'>
                    <Btn onClick={handleClose} children='Close' classes='btn_CallToAction_White    { p3 font-oxanium fw-600 clr-darkblue }' />
                    <Btn onClick={createEvent} children='Create' classes='btn_CallToAction_Blue    { p3 font-oxanium fw-600 clr-darkblue }' />
                </div>
            </div>
        </div>
    )
}

export default CreateMatches