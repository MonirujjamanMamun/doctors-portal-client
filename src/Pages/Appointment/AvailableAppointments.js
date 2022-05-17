import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setService] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, "PP")
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [formattedDate])
    return (
        <div>
            <div>
                <h1 className='text-center font-bold my-5 text-secondary '>Available Appointments on : {format(date, 'PP')}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    services.map((service, index) => <Service key={index} service={service} setTreatment={setTreatment}></Service>)

                }
            </div>
            {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;