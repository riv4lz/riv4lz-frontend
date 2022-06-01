import React from 'react'
import Login from '../../components/login/Login'
import './CastersPage.scss'
import Quote from '../../components/login/quote/Quote'
import {useObserver} from "mobx-react-lite";
import {useStore} from "../../stores/store";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";


function CastersPage() {
  const {userStore} = useStore();

  const test = (props: any) => {
    return props;
  }

  return (
    <div className='Login_Container'>
    <ul>
        {userStore.casters.map((user) => (
            <ul key={user.id}>
            <div>{user.name}</div>
              <button onClick={() => test(user.id)}></button>
              <button onClick={() => userStore.loadUser(user.id)}></button>
              <a href={'/caster/'+ user.id}>Edit</a>
            </ul>
        ))}
    </ul>
      <button onClick={() => userStore.loadUsers(0)}>Load casters</button>
    </div>
  );
}

export default CastersPage
