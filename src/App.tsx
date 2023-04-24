import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// components
import NavBar from './NavBar/NavBar'
import Landing from './Landing/Landing'
import Services from './ServicesOffered/Services'
import NewPatient from './NewPatient/NewPatient'
import Footer from './Footer/Footer'

import { messageFormData } from './types/forms'


function App() {
  const [reason, setReason] = useState('')


  


  const handleSetReason = (reason: string): void => {
    setReason(reason)
  }

  return (
    <>
      <NavBar/>
      <Routes>
        <Route
        path='/'
        element={<Landing handleSetReason={handleSetReason}/>}
        />
        <Route
        path='/services'
        element={<Services/>}
        />
        <Route
        path='/new'
        element={<NewPatient/>}
        />
      </Routes>
      <Footer 
        handleSetReason={handleSetReason} 
        reason={reason}
      />
    </>
  )
}

export default App
