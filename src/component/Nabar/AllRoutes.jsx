import React from "react";

import {Route,Routes} from "react-router-dom"
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Project from "../Pages/Project/Project";
import Skills from "../Pages/Skiils/Skills";


const AllRoutes = () => {
  return (
    <>
     
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
       
        </Routes>
      
    </>
  );
};
export default AllRoutes;
