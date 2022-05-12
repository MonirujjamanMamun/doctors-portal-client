import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NaveBar from './Pages/Shared/NaveBar';
import Home from './Pages/Home/Home';
import About from './Pages/Other/About';

import Reviews from './Pages/Other/Reviews';
import ContactUs from './Pages/Other/ContactUs';
import DataNotFound from './Pages/Shared/DataNotFound';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';



function App() {
  return (
    <div className='px-12'>
      <NaveBar></NaveBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/datanotfound' element={<DataNotFound></DataNotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
