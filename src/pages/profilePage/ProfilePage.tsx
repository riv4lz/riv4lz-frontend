import React, { useEffect, useState } from 'react'
import './ProfilePage.scss'
import { useStore } from "../../stores/store";
import Cta from "../../components/profilePage/cta/Cta";
import Highlights from "../../components/profilePage/highlights/Highlights";
import ProfileDetails from "../../components/profilePage/profileDetails/ProfileDetails";
import Matches from "../../components/matches/matches/Matches";
import { useParams } from 'react-router-dom'
import Loading from '../../components/shared/Loading/Loading';

function ProfilePage(props: any) {
  const { userStore } = useStore();
  const [loaded, setLoaded] = useState(false);

  const { id } = useParams();


  useEffect(() => {
    const loadUser = async () => {
      setLoaded(false)
      await userStore.loadUser(id);
      setLoaded(true)
    }
    loadUser();

  }, []);



  return (
    <>
      {loaded ?
        <>
          <ProfileDetails id={id} />
          <Cta id={id} />
          <Matches />
        </>
        : <Loading />}
    </>
  );
}
export default ProfilePage