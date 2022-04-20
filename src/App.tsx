import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import LoginPage from './pages/loginPage/LoginPage'
import FrontPage from './pages/frontPage/FrontPage';


function App() {
  let [user, setUser] = useState([])

  useEffect(() => {
    if (localStorage.getItem('user')) {
      //@ts-ignore
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);

      if (user) {
        setUser(user);
      }
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {["/Matches", "/About", "/Guide", "/Contact"].map((path, index) =>
            <Route path={path} element={<Navbar />} key={index} />
          )}
          <Route path="/" element={
            <>
              <Navbar />
              <FrontPage />
            </>}></Route>
          <Route path='/Login' element={<LoginPage />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
