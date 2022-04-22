import React from 'react'
import Logo from '../../../assets/images/Union.png'
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
              <img src={Logo} alt=""></img> RIV4LZ
            </div>
          </div>
        </div>
  );
}

export default Quote