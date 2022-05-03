import React from 'react'
import Login from '../../components/login/Login'
import './CastersPage.scss'
import Quote from '../../components/login/quote/Quote'
import {useObserver} from "mobx-react-lite";
import {useStore} from "../../Stores/store";


function CastersPage() {
  const {casterStore} = useStore();

  return useObserver(() => (
    <div className='Login_Container'>
    <ul>
        {casterStore.casters.map((caster) => (
            <ul key={caster.casterId}>{caster.firstName}
            <div>{caster.gamerTag}</div>
            </ul>
        ))}
    </ul>
      <button onClick={() => casterStore.loadCasters()}>Load casters</button>
    </div>
  )
  );
}

export default CastersPage