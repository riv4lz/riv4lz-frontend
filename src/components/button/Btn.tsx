import React from 'react'

interface Props{
  children?: React.ReactNode;
  onClick: () => void;
}

const Btn: React.FC<Props> = ({onClick, children}) => {
  return (
    <div className='Login_Button P1_Statewide_Bold Text_Secondary' onClick={onClick}>{children}</div>
  );
}

export default Btn