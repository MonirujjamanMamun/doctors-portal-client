import React from 'react';
import doctorAppiontment from '../../assets/images/doctor.png';
import bgDoctorAppiontment from '../../assets/images/appointment.png';

const DoctorAppiontment = () => {
    return (
        <div className="px-12 my-20">
            <div style={{ backgroundImage: `url(${bgDoctorAppiontment})` }} className="flex items-center rounded-md justify-center bg-auto bg-no-repeat grid gird-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className='flex-1'>
                    <img src={doctorAppiontment} className="mt-[-100px]" />
                </div>
                <div className='flex-1 p-5'>
                    <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                    <p className=" text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white px-5 my-4 font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorAppiontment;