import Sidebar from './Components/Sidebar';
import Offcanvas from "./Components/Offcanvas"
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Astrologers from './Pages/Astrologers';
import Users from './Pages/Users';
import Addastrologers from './Pages/Addastrologers';
import SingleAstrologer from './Pages/SingleAstrologer';
import { ToastContainer } from 'react-toastify';
import Login from "./Pages/Login"
import { useSelector } from "react-redux";
import React from 'react';
import Dashboard from './Pages/Dashboard';
import ViewProfile from './Pages/ViewProfile';
import EditAstrologer from './Pages/EditAstrologer';

function App() {
  const { loading, error, isAuthenticated } = useSelector(state => state.authState)
  // const authGuard = Boolean(useSelector((state) => state.isAuthendicated));
  // const authGuard = true;
  return (
    <div>
      <BrowserRouter>
        <ToastContainer theme="dark" />
        <div id='fixedbar'>
          {isAuthenticated && <Sidebar />}
        </div>
        {/* <div id='offcanvas'>
          {isAuthenticated && <Offcanvas />}
        </div> */}
        <Routes>
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
          <Route path='/astrologers' element={isAuthenticated ? <Astrologers /> : <Navigate to="/" />} />
          <Route path='/users' element={isAuthenticated ? <Users /> : <Navigate to="/" />} />
          <Route path='/addastrologers' element={isAuthenticated ? <Addastrologers /> : <Navigate to="/" />} />
          <Route path='/astrologer/:id' element={isAuthenticated ? <ViewProfile /> : <Navigate to="/" />} />
          <Route path='/editastrologer/:id' element={isAuthenticated ? <EditAstrologer /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

