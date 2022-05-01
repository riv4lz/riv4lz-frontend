import React from 'react'
import './CasterProfilePage.scss'
import {useObserver} from "mobx-react-lite";
import {useStore} from "../../Stores/store";
import Cta from "../../components/casterprofilepage/cta/Cta";
import Highlights from "../../components/casterprofilepage/highlights/Highlights";
import ProfileDetails from "../../components/casterprofilepage/profileDetails/ProfileDetails";
import Matches from "../../components/matches/matches/Matches";
import Footer from "../../components/frontpage/Footer/Footer";


function CasterProfilePage() {
  const {casterStore} = useStore();

  return useObserver(() => (
          <div className={"CasterProfilePage"}>
            <ProfileDetails />
            <Cta/>
              <Matches />
            <Highlights/>
              <Footer />
           </div>
  )
  );
}

export default CasterProfilePage