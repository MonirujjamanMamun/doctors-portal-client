import React from 'react';
import DentalCare from '../Services/DentalCare';
import DoctorAppiontment from '../Services/DoctorAppiontment';
import Service from '../Services/Service';
import Header from './Header';
import Info from './Info';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Info></Info>
            <Service></Service>
            <DentalCare></DentalCare>
            <DoctorAppiontment></DoctorAppiontment>
        </div>
    );
};

export default Home;