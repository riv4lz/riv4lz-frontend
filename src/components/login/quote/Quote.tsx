import React from 'react'
import Logo from '../../shared/Logo/Logo';
import './Quote.scss'

interface Props {
  quote?: React.ReactNode;
}


const Quote: React.FC<Props> = ({quote}) => {
  return (
    <div className='Login_Quotes_Container'>
          <div className='Login_Quotes_Wrapper'>
            <div className='Login_Quotes H3 Text_Secondary'>
              “{quote}”
            </div>
            <div className='Login_Quotes_Logo H3 Text_Secondary'>
              <Logo />
            </div>
          </div>
        </div>
  );
}

export default Quote