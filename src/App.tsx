import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/shared/Navbar';
import React from 'react';
import LoginPage from './pages/loginPage/LoginPage'
import FrontPage from './pages/frontPage/FrontPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        {["/", "/Matches", "/About","/Guide","/Contact"].map((path, index) => 
        <Route path={path} element={
          <>
            <Navbar />
            <FrontPage />  
          </>
      
      } key={index} />
        )}
        <Route path='/Login' element={<LoginPage />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
