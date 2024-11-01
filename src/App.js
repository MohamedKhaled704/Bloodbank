import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import SignUpAD from './components/SignUpAD';
import Blank from './components/Blank';
import Volunteer from './components/Volunteer';
import AboutUs from './components/AboutUs';
import UserDB from './components/UserDB';
import TryBB from './components/TryBB';
import Try2 from './components/Try2';
import './components/TryCss.css';
import './components/Try2_Css.css';


function App() {
  return (
    <div className="App">
      {/* <SignUpAD /> */}
      {/*<Blank /> */}
       <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Sign Up' element={<SignUpAD />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/UserDB" element={<UserDB />} />
        </Routes>
      </Router> 
      {/* <TryBB /> */}
      {/* <Try2 /> */}
    </div>
  );
}

export default App;
