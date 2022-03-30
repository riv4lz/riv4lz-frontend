import React, { useState } from 'react'

    let loggedIn: boolean = false;
    const [user, setUser] = useState({id: Number, email: String, gamerTag: String})

    const setLoggedInUser = (u:any) => {
        setUser(u)
        if(user){
            loggedIn = true;
        }
    }

    const getLoggedInUser = () => {
        return user;
    }