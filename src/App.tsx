import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Navbar from './components/shared/Navbar/Navbar';
import React, { Component, useCallback, useEffect, useState, Suspense } from 'react';
import LoginPage from './pages/loginPage/LoginPage'
import FrontPage from './pages/frontPage/FrontPage';
import MatchesPage from './pages/matchesPage/MatchesPage';
import { observer } from "mobx-react-lite";
import { store, useStore } from "./Stores/store";
import RegisterPage from './pages/registerPage/RegisterPage';
import CasterProfilePage from "./pages/casterProfilePage/CasterProfilePage";
import Footer from './components/shared/Footer/Footer';
import OrgProfilePage from './pages/orgProfilePage/OrgProfilePage';
import AboutPage from './pages/aboutPage/AboutPage';
import ChatPage from "./pages/chatPage/ChatPage";
import GuidePage from "./pages/guidePage/GuidePage";
import UsersPage from "./pages/castersPage/UsersPage";

function RequireAuth({ children }) {
  const { authStore } = useStore();
  const location = useLocation();
  return authStore.user !== undefined  ? (
      children
  ) : (
      <Navigate to="/Login" replace state={{ path: location.pathname }} />
  );
}


function App() {
  const { commentStore, authStore, userStore, offerStore, eventStore } = useStore();

  const [loaded, setLoaded] = useState(false)
  const test = () => setLoaded(true)


  useEffect(() => {
    commentStore.loadMessages()
    userStore.loadUsers(0);
    userStore.loadUsers(1);
    const loadEvents = async () => {
      await eventStore.loadMatches();
    }
    loadEvents();

    setTimeout(test, 500)
    if (localStorage.getItem("token")) {
      getCurrentUser();
    }
  }, []);

  const getCurrentUser = async () => {
    const response = await authStore.getCurrentUser()
    const user = await userStore.loadUser(authStore.user?.id);
    if (user.userType === 0) {
      authStore.isCaster = true;
      authStore.isOrg = false;
    } else {
      authStore.isCaster = false;
      authStore.isOrg = true;
    }
    return response;
  }


  const navigateHome = () => {
    window.location.href = "/"
  }

  function authRequired(nextState, replace) {
    if (localStorage.getItem("token")) {
      replace('/login');
    }
  }


  return (
    <>
      { loaded  ?

        <div className="App">

          <Router>
            <Navbar />
            <Routes>
              {["/Contact"].map((path, index) =>
                <Route path={path} element={<Navbar />} key={index} />
              )}
              <Route path="/" element={
                <>
                  <FrontPage />
                </>}>
              </Route>
              <Route path="/About" element={
                <>
                  <AboutPage />
                </>}>
              </Route>
              <Route path="/Guide" element={
                <>
                  <GuidePage />
                </>}>
              </Route>
              <Route path="/Users/:userType" element={
                <>
                  <UsersPage/>
                </>}>
              </Route>
              <Route path='/Login' element={<LoginPage />}>
              </Route>
              <Route path='/Register' element={<RegisterPage />}></Route>
              <Route path='/Matches' element={
                <>
                  <MatchesPage />
                </>
              }>
              </Route>
              <Route path="/Chat" element={
                <RequireAuth>
                  <ChatPage />
                </RequireAuth>}>
              </Route>
              <Route path="/caster/:id" element={<CasterProfilePage />}></Route>
              <Route path="/Org/:id" element={<OrgProfilePage />}></Route>
            </Routes>
            <Footer />
          </Router>

        </div>
        : null}
    </>
  );
}


export default observer(App);
