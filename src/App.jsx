import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
//import Api from "./exemplo/Api";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./Components/User/User";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
  
const App = () => {  

  return (
    <>
      <BrowserRouter> 
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" 
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
              } 
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
       
      {/* <Api /> */}
    </>
  )
}

export default App
