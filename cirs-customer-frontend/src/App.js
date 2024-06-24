import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import Services from './Pages/Services';
import Booking from './Pages/Booking';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Feedback from './Pages/Feedback';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
