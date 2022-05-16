import React from 'react'
import Quote from '../../components/login/quote/Quote'
import Register from '../../components/register/Register'
import './RegisterPage.scss'

const RegisterPage = () => {
    
    return (
        <div className='RegisterPage_Container'>
            <div className='RegisterPage_Wrapper'>
                <Register />
                <Quote quote="perfection is something
that you can only achieve
by believing its impossible" />

            </div>
        </div>
    )
}

export default RegisterPage