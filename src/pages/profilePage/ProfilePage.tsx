import React, { useEffect, useState } from 'react'
import './ProfilePage.scss'
import { useObserver } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import Cta from "../../components/profilePage/cta/Cta";
import Highlights from "../../components/profilePage/highlights/Highlights";
import ProfileDetails from "../../components/profilePage/profileDetails/ProfileDetails";
import Matches from "../../components/matches/matches/Matches";
import { useParams } from 'react-router-dom'

function ProfilePage(props: any) {
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
export default ProfilePage