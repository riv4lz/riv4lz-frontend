import React, { useState } from 'react'
import Btn from '../../button/Btn'
import './CasterRegister.scss'


const CasterRegister = () => {


    return (
        <div className='Login_Div_Container'>
            <div className='Login_Div_Wrapper'>
                <Step1 />
            </div>
        </div>
    )
}

const Step1 = () => {
    const [email, setEmail] = useState('')
    const [realName, setRealName] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [gamertag, setGamertag] = useState('')
    
    const onStep2 = () => {
    }

    return (
        <>
            <div className='Register_Header'>
                <span className='H2 Text_Secondary'>Login</span>
            </div>
            <form className="add-form" onSubmit={onStep2}>
            <div className='Login_Div_Email'>
                    <span className='Half_opacity P4_Statewide_light Text_Secondary' >Real name</span>
                    <input type="text" className='Email_Input' placeholder='Jane Doe' value={realName} onChange={(e) => setRealName(e.target.value)}></input>
                </div>
                <div className='Login_Div_Email'>
                    <span className='Half_opacity P4_Statewide_light Text_Secondary' >Email</span>
                    <input type="text" className='Email_Input' placeholder='username@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='Login_Div_Email'>
                    <span className='Half_opacity P4_Statewide_light Text_Secondary' >Country</span>
                    <input type="text" className='Email_Input' placeholder='Uzbekistan' value={country} onChange={(e) => setCountry(e.target.value)}></input>
                </div>
                <div className='Login_Div_Email'>
                    <span className='Half_opacity P4_Statewide_light Text_Secondary' >Address</span>
                    <input type="text" className='Email_Input' placeholder='Skrrrrt lane 69' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                </div>
                <div className='Login_Div_Email'>
                    <span className='Half_opacity P4_Statewide_light Text_Secondary'>Gamertag</span>
                    <input type="text" className='Email_Input' placeholder='Groundpound69' value={gamertag} onChange={(e) => setGamertag(e.target.value)}></input>
                </div>
                <div className='Login_Div_Signin'>
                    <Btn onClick={() => onStep2} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="NEXT STEP" />
                </div>
            </form>
        </>
    )
}

export default CasterRegister