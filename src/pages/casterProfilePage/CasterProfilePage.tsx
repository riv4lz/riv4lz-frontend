import React, { useEffect, useState } from 'react'
import './CasterProfilePage.scss'
import { useObserver } from "mobx-react-lite";
import { useStore } from "../../Stores/store";
import Cta from "../../components/casterprofilepage/cta/Cta";
import Highlights from "../../components/casterprofilepage/highlights/Highlights";
import ProfileDetails from "../../components/casterprofilepage/profileDetails/ProfileDetails";
import Matches from "../../components/matches/matches/Matches";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import casterService from "../../services/casterService";
import Navbar from '../../components/shared/Navbar/Navbar';
import Footer from '../../components/shared/Footer/Footer';

function CasterProfilePage(props: any) {
  const { casterStore, authStore } = useStore();

  const [test, setid] = useState('');

  const { id } = useParams();


  useEffect(() => {
    casterStore.loadCaster(id);
  });



  return useObserver(() => (
    <div className={"CasterProfilePage"}>
      <Navbar />
      <ProfileDetails />
      <Cta />
      <Matches />
      <Highlights />
      <Footer />
    </div>
  )
  );
}
export default CasterProfilePage