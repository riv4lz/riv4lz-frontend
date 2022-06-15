import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/shared/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import LoginPage from './pages/loginPage/LoginPage'
import FrontPage from './pages/frontPage/FrontPage';
import MatchesPage from './pages/matchesPage/MatchesPage';
import { observer } from "mobx-react-lite";
import { useStore } from "./stores/store";
import RegisterPage from './pages/registerPage/RegisterPage';
import ProfilePage from "./pages/profilePage/ProfilePage";
import Footer from './components/shared/Footer/Footer';
import AboutPage from './pages/aboutPage/AboutPage';
import ChatPage from "./pages/chatPage/ChatPage";
import GuidePage from "./pages/guidePage/GuidePage";
import Loading from './components/shared/Loading/Loading';
import UsersPage from './pages/castersPage/UsersPage';

function RequireAuth({ children }) {
  const { authStore } = useStore();
  const location = useLocation();
  return authStore.user !== undefined ? (
    children
  ) : (
    <Navigate to="/Login" replace state={{ path: location.pathname }} />
  );
}


function App() {
  const { commentStore, authStore, userStore, offerStore, eventStore } = useStore();

  const [loaded, setLoaded] = useState(false)
  const routes = [
    { path: "/", element: <FrontPage /> },
    { path: "/About", element: <AboutPage /> },
    { path: "/Guide", element: <GuidePage /> },
    { path: "/Users/:userType", element: <UsersPage /> },
    { path: "/Matches", element: <MatchesPage /> },
    { path: "//profile/:id", element: <ProfilePage /> },
    { path: "/Chat", element: <ChatPage /> },
  ];



  useEffect(() => {
    commentStore.loadMessages()
    userStore.loadUsers(0);
    userStore.loadUsers(1);
    const loadEvents = async () => {

      await eventStore.loadMatches();

    }

    const getCurrentUser = async () => {
      setLoaded(false)
      await authStore.getCurrentUser()
      const user = await userStore.loadUser(authStore.user?.id);
      if (user.userType === 0) {
        authStore.isCaster = true;
        authStore.isOrg = false;
      } else {
        authStore.isCaster = false;
        authStore.isOrg = true;
      }
      setLoaded(true)
    }

    loadEvents();
    if (localStorage.getItem("token")) {
      getCurrentUser();
    } else {

      setLoaded(true)
    }


  }, []);




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
      {loaded ?

        <div className="App">

          <Router>
            <Routes>
              {routes.map((route, index) => {
                <>
                  <Navbar />
                  <Route key={index} path={route.path} element={route.element} />
                  <Footer />
                </>
              })}
              <Route path='/Login' element={<LoginPage />}></Route>
              <Route path='/Register' element={<RegisterPage />}></Route>
            </Routes>
          </Router>

        </div>
        : <Loading />}
    </>
  );
}


export default observer(App);
