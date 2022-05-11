import React from 'react';
import DentalCare from '../Services/DentalCare';
import DoctorAppiontment from '../Services/DoctorAppiontment';
import Service from '../Services/Service';
import Footer from '../Shared/Footer';
import Header from './Header';
import Info from './Info';
import PatientsSays from './PatientsSays';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Info></Info>
            <Service></Service>
            <DentalCare></DentalCare>
            <DoctorAppiontment></DoctorAppiontment>
            <PatientsSays></PatientsSays>
            <Footer></Footer>
        </div>
    );
};

export default Home;