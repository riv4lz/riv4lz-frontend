import React, { useEffect, useState } from 'react'
import './CasterProfilePage.scss'
import { useObserver } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import Cta from "../../components/casterprofilepage/cta/Cta";
import Highlights from "../../components/casterprofilepage/highlights/Highlights";
import ProfileDetails from "../../components/casterprofilepage/profileDetails/ProfileDetails";
import Matches from "../../components/matches/matches/Matches";
import { useParams } from 'react-router-dom'

function CasterProfilePage(props: any) {
  const { userStore, authStore } = useStore();

  const [test, setid] = useState('');

  const { id } = useParams();


  useEffect(() => {
    const loadUser = async () => {
      await userStore.loadUser(id);
    }
    loadUser();

  });



  return useObserver(() => (
    <>
      <ProfileDetails id={id} />
      <Cta id={id} />
      <Matches />
      <Highlights />
    </>
  )
  );
}
export default CasterProfilePage