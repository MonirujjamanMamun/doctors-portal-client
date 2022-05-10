import React from 'react';
import DentalCare from '../Services/DentalCare';
import DoctorAppiontment from '../Services/DoctorAppiontment';
import Service from '../Services/Service';
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
        </div>
    );
};

export default Home;