import React, { useContext, useEffect } from 'react'
import { Context } from './main'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './component/pages/App.jsx';
import Login from './component/pages/Login'
import Signup from './component/pages/Signup'
import Join1 from './component/pages/join1'
import Nearby from './component/pages/Nearby'
import Forgot from './component/pages/Forgot'
import Uba from './component/pages/Uba'
import Transport from './component/pages/Transport'
import WomanWelfare from './component/pages/Womanwelfare'
import Womansurvivor from './component/pages/Womansurvivor'
import Offline from './component/pages/Offline'
import Voicecom from './component/pages/Voicecom'
import Raisefund from './component/pages/Raisefund'
import Training from './component/pages/Training'
import Normal from './component/pages/Normal'
import Donate from './component/pages/Donate'
import Ask from './component/pages/Ask'
import Assessment from './component/pages/Assessment'
import Anonymous from './component/pages/Anonymous'
import Safety_beakon from './component/pages/Safety_beakon'
import Femme_notebook from './component/pages/Femme_notebook'
import Logout from './component/pages/Logout'
import User from './component/pages/User'
import toast from 'react-hot-toast';
import UpdatePassword from './component/pages/UpdatePassword.jsx';
import { SERVER_URL } from '../ServerURL.js';

const LoggedIn = () => {
  const {isAuthenticated, setIsAuthenticated, setUser, user} = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {data} = await axios.get(`${SERVER_URL}/api/v1/users/current-user`,{
          withCredentials: true
        })
        setUser(data.user);
        setIsAuthenticated(true);
        toast.success("/");
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
        toast.error(error.response.data.message)
      }
    };
    fetchUser();
  }, [isAuthenticated])

  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<App/>}/>
          <Route path={'/sign-up'} element={<Signup/>}/>
          <Route path={'/login'} element={<Login />}/>
          <Route path={'/logout'} element={<Logout />}/>
          <Route path={'/join'} element={<Join1/>}/>
          <Route path={'/nearby'} element={<Nearby/>}/>
          <Route path={'/Forgot'} element={<Forgot/>}/>
          <Route path={'/woman-welfare'} element={<WomanWelfare/>}/>
          <Route path={'/uba'} element={<Uba/>}/>
          <Route path={'/transport'} element={<Transport/>}/>
          <Route path={'/woman-survivor'} element={<Womansurvivor/>}/>
          <Route path={'/offline'} element={<Offline/>}/>
          <Route path={'/voice-command'} element={<Voicecom/>}/>
          <Route path={'/raise-fund'} element={<Raisefund/>}/>
          <Route path={'/training'} element={<Training/>}/>
          <Route path={'/safety-tools'} element={<Normal/>}/>
          <Route path={'/donate'} element={<Donate/>}/>
          <Route path={'/ask-for-help'} element={<Ask/>}/>
          <Route path={'/assessment'} element={<Assessment/>}/>
          <Route path={'/anonymous'} element={<Anonymous/>}/>
          <Route path={'/safety-beakon'} element={<Safety_beakon/>}/>
          <Route path={'/femmenotebook'} element={<Femme_notebook/>}/>
          <Route path={'/user'} element={<User/>}/>
          <Route path={'/update-password'} element={<UpdatePassword/>}/>
        </Routes>
      </Router>
  </>
  )}

export default LoggedIn
