import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Booking from './Pages/Booking'
import ContactUs from './Pages/ContactUs'
import Feedback from './Pages/Feedback'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BookingForm from './Pages/BookingForm';
import ContactUsForm from './Pages/ContactUsForm';
import FeedbackForm from './Pages/FeedbackForm';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/bookingForm' element={<BookingForm/>}/>
        <Route path='/bookingForm/:id' element={<BookingForm/>}/>
        <Route path='/contactusForm/:id' element={<ContactUsForm/>}/>
        <Route path='/feedbackForm' element={<FeedbackForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
