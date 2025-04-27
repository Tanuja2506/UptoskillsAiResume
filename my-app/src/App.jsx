import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from  './components/About';
import PasswordReset from './components/PasswordReset';
import './App.css'
import WithoutAi from './components/templatePage';
import ResumeEditor from './components/resumeEditor';
import Temp2 from './components/Temp2';
import Temp4 from './components/Temp4';
import Temp5 from './components/Temp5';
import Temp6 from './components/Temp6';

function App() {
 

  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path="passwordReset" element={<PasswordReset/>}/>
         <Route exact path='/templatepage' element={<WithoutAi />} />
          <Route exact path='/temp1' element={<ResumeEditor/>} />
          <Route exact path='/temp2' element={<Temp2/>} />
          <Route exact path='/temp4' element={<Temp4/>} />
          <Route exact path='/temp5' element={<Temp5/>} />
          <Route exact path='/temp6' element={<Temp6/>} />
        </Routes>
      
      </Router>
      

    </>
  )
}

export default App
