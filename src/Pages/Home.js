import React from 'react';
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import Howitworks from "../component/Howitworks";
import Aboutus from "../component/Aboutus";
import Services from "../component/Services";
import Contactform from "../component/Contactform";
import Footer from "../component/Footer";



const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Howitworks/> 
    <Aboutus/>
    <Services/>
    <Contactform/>
    <Footer/>
    </>
  )
}

export default Home;