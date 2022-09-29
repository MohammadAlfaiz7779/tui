import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
    <div style={{width:'100%',height:'100vh',display:'flex',textAlign:'center',justifyContent:'center'}} id='notfound'>
        <div className="notfound" style={{textAlign:'center',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
            <div style={{position:'absolute'}} className="notfound-404">
                <h1 style={{fontSize:'400px',opacity:'0.3'}}>404</h1>
            </div>
            
            <h2 style={{fontSize:'50px',fontWeight:'bolder'}}>We Are Sorry, Oage Not Found!</h2>
            <p style={{fontSize:'14px',textAlign:'center',fontWeight:'bold'}}>The Page You Are Looking For Might Have Been Removed Had Its Name Changed Or Its Temporarily <br /> Unavailable</p>
            <NavLink style={{position:'relative',width:'20rem',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}} className='btn-style' to='/' >Back To Home Page</NavLink>
            
        </div>
    </div>
    </>
  )
}

export default Error404