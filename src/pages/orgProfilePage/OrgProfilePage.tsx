import React, { useEffect, useState } from 'react'
import { useObserver } from "mobx-react-lite";
import { useStore } from "../../Stores/store";
import Cta from "../../components/casterprofilepage/cta/Cta";
import Highlights from "../../components/casterprofilepage/highlights/Highlights";
import ProfileDetails from "../../components/orgProfilePage/profileDetails/ProfileDetails";
import Matches from "../../components/matches/matches/Matches";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import casterService from "../../services/casterService";
import Navbar from '../../components/shared/Navbar/Navbar';
import Footer from '../../components/shared/Footer/Footer';
import Loading from '../../components/shared/Loading/Loading';

function OrgProfilePage(props: any) {
  const { userStore, authStore } = useStore();

  const [test, setid] = useState('');
  const [loaded, setLoaded] = useState(false);

  const { id } = useParams();


  useEffect(() => {
    try {
      const loadUser = async () => {
        setLoaded(false)
        await userStore.loadUser(id);
        setLoaded(true)
      }
      loadUser();
    } catch (error) {
      console.log(error)
    }
  }, []);



  return (
    <>
      {loaded ?
        <>
          <ProfileDetails id={id} />
          <Matches />
          <Highlights />
        </>
        : <Loading />}
    </>
  );
}
export default OrgProfilePage
