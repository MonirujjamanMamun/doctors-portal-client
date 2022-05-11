import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setService] = useState([]);
    const [modal, setModal] = useState(null);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-center font-bold my-5 text-secondary '>Available Appointments on : {format(date, 'PP')}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    services.map(service => <Service key={service._id} service={service} setModal={setModal}></Service>)

                }
            </div>
            {modal && <BookingModal modal={modal} date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;