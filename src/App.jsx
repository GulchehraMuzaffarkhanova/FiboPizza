import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewTaste from './components/NewTaste'
import Pizza from './components/Pizza'
import Discount from './components/Discount'
import Map from './components/Map'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Drinks from './pages/Drinks'
import Paste from './pages/Paste'
import Salad from './pages/Salad'
import Soup from './pages/Soup'
import 'swiper/css';
import Modal from './components/Modal'

const App = () => {
  return (
    <>
       <Navbar />
       {/* <Modal/> */}
       
       <Routes>
        <Route path='/' element={<><Hero /><NewTaste/></>}/>
        <Route path='pizza' element={<Pizza />}/>
        <Route path='paste' element={<Paste />}/>
        <Route path='soup' element={<Soup />}/>
        <Route path='salad' element={<Salad />}/>
        <Route path='drinks' element={<Drinks/>}/>
        <Route path='discount' element={<Discount />}/>
        <Route path='location' element={<Map />}/>
       </Routes>

       {/* */} 
       <Footer/>
    </>
  )
}

export default App

{/**/}