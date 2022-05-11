import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBaner from './AppointmentBaner';
import AvailableAppointments from './AvailableAppointments';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBaner date={date} setDate={setDate}></AppointmentBaner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;