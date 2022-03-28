import React from 'react'

interface Props{
  children?: React.ReactNode;
  onClick: () => void;
  classes?: string;
}

const Btn: React.FC<Props> = ({onClick, children, classes}) => {
  return (
    <div className={classes} onClick={onClick}>{children}</div>
  );
}

export default Btn