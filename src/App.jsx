import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Home/Nav'
import Footer from './components/footer/Footer';
import Home from './components/Home';
import Channels from './components/Channels';
import SingleChannel from './components/SingleChannel';
import VideoPage from './components/VideoPage';
import VideoUP from './components/VideoUP';
import HistoryPage from './components/HistoryPage';
import Categories from './components/Categories';
import Login from './components/Login';
import Register from './components/Register';
import ErrorMsg from './components/ErrorMsg';
import ForgotPassword from './components/ForgotPassword';
import BlankPage from './components/BlankPage';
import Profile from './components/Profile';


function App() {


  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/channels' element={<Channels />}></Route>
          <Route path='/singlechannel' element={<SingleChannel />}></Route>
          <Route path='/videopage' element={<VideoPage />}></Route>
          <Route path='/uploadvideo' element={<VideoUP />}></Route>
          <Route path='/historypage' element={<HistoryPage />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/error' element={<ErrorMsg />}></Route>
          <Route path='/frgtpass' element={<ForgotPassword />}></Route>
          <Route path='/blank' element={<BlankPage />}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>


      {/* <MainRoutes/> */}

      

    </>
  );

}

export default App;
