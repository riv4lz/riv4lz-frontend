import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar/Navbar';
import React, { Component, useCallback, useEffect, useState, Suspense } from 'react';
import LoginPage from './pages/loginPage/LoginPage'
import FrontPage from './pages/frontPage/FrontPage';
import MatchesPage from './pages/matchesPage/MatchesPage';
import { observer } from "mobx-react-lite";
import Chat from "./pages/chat/chat";
import { store, useStore } from "./Stores/store";
import CastersPage from "./pages/castersPage/CastersPage";
import RegisterPage from './pages/registerPage/RegisterPage';
import CasterProfilePage from "./pages/casterProfilePage/CasterProfilePage";
import Footer from './components/shared/Footer/Footer';

function App() {
  const { commentStore, authStore } = useStore();
  let [user, setUser] = useState([])
  const [loaded, setLoaded] = useState(false)
  const test = () => setLoaded(true)

  setTimeout(test, 500)

  useEffect(() => {
    commentStore.loadMessages();
    if (localStorage.getItem("token")) {
      getCurrentUser();
    }
  }, []);

  const getCurrentUser = async () => {
    const response = await authStore.getCurrentUser()
    if (response !== undefined) {
      setLoaded(true)
    }
    
    return response;
  }
  return (
    <>
      {{ loaded } ?

        <div className="App">
          <Router>
            <Routes>
              {["/About", "/Guide", "/Contact"].map((path, index) =>
                <Route path={path} element={<Navbar />} key={index} />
              )}
              <Route path="/" element={
                <>
                  <Navbar />
                  <FrontPage />
                </>}></Route>
              <Route path='/Login' element={<LoginPage />}>
              </Route>
              <Route path='/Register' element={<RegisterPage />}></Route>
              <Route path='/Matches' element={
                <>
                  <Navbar />
                  <MatchesPage />
                  <Footer />
                </>
              }>
              </Route>
              <Route path='/Chat' element={<Chat comments={commentStore.comments} commentStore={commentStore} />}>
              </Route>
              <Route path="/caster/:id" element={<CasterProfilePage />}></Route>
            </Routes>
          </Router>
        </div>
        : null}
    </>
  );
}


export default observer(App);
