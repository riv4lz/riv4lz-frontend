import React, { useEffect, useState } from 'react'
import { useStore } from "../../stores/store";
import Highlights from "../../components/casterprofilepage/highlights/Highlights";
import ProfileDetails from "../../components/orgProfilePage/profileDetails/ProfileDetails";
import Matches from "../../components/matches/matches/Matches";
import { useParams } from 'react-router-dom'

function OrgProfilePage(props: any) {
  const { userStore, authStore } = useStore();

  const [test, setid] = useState('');

  const { id } = useParams();


  useEffect(() => {
    userStore.loadUser(id);
  });



  return (
    <div>
      <ProfileDetails id={id}/>
      <Matches />
      <Highlights />
    </div>
  );
}
export default OrgProfilePage
