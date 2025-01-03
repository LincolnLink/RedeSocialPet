import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
//import Api from "./exemplo/Api";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
  
const App = () => {  

  return (
    <>
      <h1>App React</h1>
      <BrowserRouter> 
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
       
      {/* <Api /> */}
    </>
  )
}

export default App
