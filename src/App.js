import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Selection from './pages/Selection';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Jobs from './pages/Jobs';
import ClientProfile from './pages/ClientProfile';
import Setup from './pages/Setup';
import Premium from './pages/Premium';
import Discover from './pages/Discover';
import ForgotPassword from './pages/ForgotPassword';
import FreelancerPage from './pages/FreelancerPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/signup-selection" element={<Selection/>} ></Route>
          <Route path="/login" element={<Login/>} ></Route>
          <Route path="/signup" element={<Signup/>} ></Route>
          <Route path="/jobs" element={<Jobs/>} ></Route>
          <Route path="/profile-freelancer" element={<Setup/>} ></Route>
          <Route path="/profile-client" element={<ClientProfile/>} ></Route>
          <Route path="/premium" element={<Premium/>} ></Route>
          <Route path="/discover" element={<Discover/>} ></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>} ></Route>
          <Route path="/freelancer-page" element={<FreelancerPage/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
