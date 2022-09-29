import React from 'react'
import Home from './Pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Aboutus from './Pages/Aboutus';
import Services from './Pages/Service';
import Contact from './Pages/Contact';
import Error from './Pages/Error';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<Aboutus/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Service' element={<Services/>}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    </>
  )
}

export default App;