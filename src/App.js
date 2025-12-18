import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './Pages/About'
import Header from './Components/Header'
import Home from './Pages/Home'
import Service from './Pages/Service'
import Features from './Pages/Features'
import Events from './Pages/Events'
import Company from './Pages/Company'
import Team from './Pages/Team'
import Appointment from './Pages/Appointment'
import Contact from './Pages/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path='/' element={<><Home /></>} />
          <Route path='/About' element={<><Header heading="About Us" pages="About" /><About /></>} />
          <Route path='/Service' element={<><Header heading="Services" pages="Service" /><Service /></>} />
          <Route path='/Features' element={<><Header heading="Features" pages="Service" /><Features /></>} />
          <Route path='/Events' element={<><Header heading="Our Events" pages="Events" /><Events /></>} />
          <Route path='/Company' element={<><Header heading="Insurance Partners" pages="Company" /><Company /></>} />
          <Route path='/Team' element={<><Header heading="Team" pages="Team" /><Team /></>} />
          <Route path='/Appointment' element={<><Header heading="Appointment" pages="Appointment" /><Appointment /></>} />
          <Route path='/Contact' element={<><Header heading="Contact Us" pages="Contact" /><Contact /></>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}


export default App