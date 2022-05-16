import React from 'react'
import Login from '../../components/login/Login'
import './CastersPage.scss'
import Quote from '../../components/login/quote/Quote'
import {useObserver} from "mobx-react-lite";
import {useStore} from "../../Stores/store";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";


function CastersPage() {
  const {casterStore} = useStore();

  const test = (props: any) => {
    console.log(props);
    return props;
  }

  return useObserver(() => (
    <div className='Login_Container'>
    <ul>
        {casterStore.casters.map((caster) => (
            <ul key={caster.id}>
            <div>{caster.name}</div>
              <button onClick={() => test(caster.id)}></button>
              <button onClick={() => casterStore.loadCaster(caster.id)}></button>
              <a href={'/caster/'+ caster.id}>Edit</a>
            </ul>
        ))}
    </ul>
      <button onClick={() => casterStore.loadCasters()}>Load casters</button>
    </div>
  )
  );
}

export default CastersPage