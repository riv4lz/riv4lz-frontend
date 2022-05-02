import React from 'react'

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  classes?: string;
  style?: React.CSSProperties;
}

const Btn: React.FC<Props> = ({ onClick, children, classes, style }) => {
  return (
    <div data-testid="btn-test" style={style} id="btn" className={classes} onClick={onClick}>{children}</div>
  );
}

export default Btn