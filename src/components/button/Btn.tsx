import React from 'react'

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  classes?: string;
}

const Btn: React.FC<Props> = ({ onClick, children, classes }) => {
  return (
    <div data-testid="btn-test" id="btn" className={classes} onClick={onClick}>{children}</div>
  );
}

export default Btn