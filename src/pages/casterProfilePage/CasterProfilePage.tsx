import React, {useEffect, useState} from 'react'
import './CasterProfilePage.scss'
import {useObserver} from "mobx-react-lite";
import {useStore} from "../../Stores/store";
import Cta from "../../components/casterprofilepage/cta/Cta";
import Highlights from "../../components/casterprofilepage/highlights/Highlights";
import ProfileDetails from "../../components/casterprofilepage/profileDetails/ProfileDetails";
import Matches from "../../components/matches/matches/Matches";
import Footer from "../../components/frontpage/Footer/Footer";
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
import casterService from "../../services/casterService";

function CasterProfilePage(props: any) {
    const {casterStore} = useStore();

    const [caster, setCaster] = useState({});

    const {id} = useParams();


    useEffect(() => {
        fetch("https://localhost:7219/api/Caster/GetCasterProfile?id=" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setCaster(result);
                }
            );
    });



  return useObserver(() => (
          <div className={"CasterProfilePage"}>
            <ProfileDetails caster={caster}/>
            <Cta/>
              <Matches />
            <Highlights/>
              <Footer />
           </div>
  )
  );
}
export default CasterProfilePage