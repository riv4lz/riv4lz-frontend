import React, {useEffect} from 'react'
import './OrgsList.scss'
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams, useNavigate
} from "react-router-dom";
import {useStore} from "../../../Stores/store";


function OrgsList() {
  const { userStore } = useStore();
  let navigate = useNavigate()

  useEffect(() => {
      userStore.loadUsers(1);
  });

  const goToProfile = (id) => {
    navigate('/org/'+ id);
  }

  return (
    <div className='[ CastersPage ]'>
        {userStore.orgs.map((user) => (
            <div key={user.id} className={'[ CasterContainer ]    { display-flex   }'} onClick={() => goToProfile(user.id)}>
              <div className={'CasterContainer__Wrapper'}>
              <div className={'[ PhotoContainer ]'}>
                <img className={'[ PhotoContainer__Photo ]'} src={user.profileImageUrl}/>
              </div>
              <div className={'[ DetailsContainer ]'}>
                <p className={'clr-white'}>{user.name}</p>
                <p className={'clr-white'}>{user.description}</p>
              </div>
              </div>
            </div>
        ))}
    </div>
  );
}

export default OrgsList
