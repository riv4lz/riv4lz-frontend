import React, {useEffect} from 'react'
import './UsersPage.scss'
import OrgsList from "../../components/usersPage/orgsList/OrgsList";
import TopPartChat from "../../components/chat/TopPartChat/TopPartChat";
import {useParams} from "react-router-dom";


function UsersPage(props: any) {

    const { userType } = useParams();

  useEffect(() => {
      console.log(userType);
  });


  return (
      <>
        <TopPartChat />
        <OrgsList/>
      </>
  );
}

export default UsersPage
