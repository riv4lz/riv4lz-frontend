import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/shared/Navbar';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        {["/", "/Matches", "/About","/Guide","/Contact"].map((path, index) => 
        <Route path={path} element={<Navbar/>} key={index} />
        )}
        <Route path='/Login' element={<Login/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
