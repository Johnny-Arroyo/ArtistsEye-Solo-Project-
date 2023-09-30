import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Header from "./components/Header"
import Home from "./pages/home";
import MyPortfolio from "./pages/myportfolio";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const Main = () => {
  return (
      <div className="parentEl">
        <Header />
        <ul className="navbar">
          <li><a href="/">Home</a></li>
          <li><a href="/myportfolio">My Portfolio</a></li>
          <li><a href="/signin">Login</a></li>
          <li><a href="/signup">Register</a></li>
        </ul>
        <div className="container">
          <BrowserRouter>
          <Routes>             
            <Route index element={<Home />}/>
            <Route path="/home" element={<Home />} />
            <Route path='/myportfolio' element={<MyPortfolio />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>
  );
}

export default Main;