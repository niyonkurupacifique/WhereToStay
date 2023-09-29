
import './App.css';
import Home from './componentsFolder/home';
import HouseDescription from './componentsFolder/houseDescription';
import Login from './componentsFolder/login';
import Signup from './componentsFolder/signup';
import { OpenModalContext } from './componentsFolder/context';
import React from 'react';
import Chat from './componentsFolder/chat';
import ChatWithUs from './componentsFolder/chatWithus';
import { useState } from 'react';
import LandLoadDashboard from './componentsFolder/landLoadDashBoard';
import { Route,Routes } from 'react-router-dom';
import AddnewRental from './componentsFolder/addNewRental';
import Orders from './componentsFolder/RequestHouse';
import UserDashboard from './componentsFolder/userDashboard'; 
import StudentStatusPage from './componentsFolder/StudentStatusPage';
import LoginFromAccount from './componentsFolder/loginFromAccount';

function App() {
  const[open,setOpen]=useState(false)
  const[openSignup,setOpenSignup]=useState(false)
  const[openLogin,setOpenLogin]=useState(false)
  const[openChat,setOpenChat]=useState(false)
  const [Message,setMessage]=useState("")
  const[messageStatus,setmessageStatus]=useState(false)
  const[messageType,setMessageType]=useState("")
  const[houseId,setHouseId]=useState(null)
  const[BookingStatus,setBookingStatus]=useState(false)
  
  return (
    <div>
      <OpenModalContext.Provider value={{openLogin,setOpenLogin,open,setOpen,openSignup,setOpenSignup,openChat,setOpenChat,Message,setMessage,messageStatus,setmessageStatus,messageType,setMessageType,houseId,setHouseId,BookingStatus,setBookingStatus}}>
     <ChatWithUs></ChatWithUs>
     <Login></Login>
     <Signup></Signup>
     <LoginFromAccount></LoginFromAccount>
     <Routes>
                <Route path="/" element={<Home></Home>} exact />
                <Route path="/home" element={<Home></Home>} exact />
                <Route path="/dashboard/:newToken" element={<LandLoadDashboard></LandLoadDashboard>} />
                <Route path="/housedescription/:houseId" element={<HouseDescription></HouseDescription>} />
                <Route path="/addnewrental/:newToken" element={<AddnewRental></AddnewRental>} />
                <Route path="/orders" element={<Orders></Orders>} />
                <Route path="/userDashboard/:houseId/:token" element={<UserDashboard></UserDashboard>} />
                <Route path="/studentstatuspage/:Newtoken" element={<StudentStatusPage></StudentStatusPage>} />
             </Routes>
     </OpenModalContext.Provider>
    </div>
  );
}

export default App;
