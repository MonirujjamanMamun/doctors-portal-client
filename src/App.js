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
import SginUp from './Pages/Login/SginUp';
import RequireAuth from './Pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppoinment from './Pages/DashBoard/MyAppoinment';
import Reveiw from './Pages/DashBoard/Reveiw';
import Users from './Pages/DashBoard/Users';
import AddDoctor from './Pages/DashBoard/AddDoctor';



function App() {
  return (
    <div className='px-12'>
      <NaveBar></NaveBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path='reveiw' element={<Reveiw></Reveiw>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='addDoctors' element={<AddDoctor></AddDoctor>}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SginUp></SginUp>}></Route>
        <Route path='/datanotfound' element={<DataNotFound></DataNotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
