import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <section className='navbar-bg'>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#"><span style={{fontSize:"30px"}}>T</span>HE<span style={{fontSize:"30px"}}>U</span>NICORN<span style={{fontSize:"30px"}}>I</span>NDIA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Service">SERVICE</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">CONTACT</NavLink>
        </li>      
        <li className="nav-item">
          <NavLink className="nav-link" to="/About" >ABOUT</NavLink>
        </li>
      </ul>
      <form className='d-flex'>
        <button className="btn btn-style" type="submit">SIGN UP</button>
        <button className="btn btn-style btn-style-border" type="submit">LOG IN</button>
        </form>
    </div>
  </div>
</nav>
</section>
  )
}

export default navbar;