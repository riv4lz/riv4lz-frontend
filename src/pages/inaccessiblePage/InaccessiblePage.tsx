import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const InaccessiblePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [])
    
  return (
      <></>
  )
}

export default InaccessiblePage