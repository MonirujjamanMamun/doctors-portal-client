import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import bgChair from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBaner = ({ date, setDate }) => {

    return (
        <div>
            <div style={{ backgroundImage: `url(${bgChair})` }} className="hero min-h-screen bg-base-100 px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-3'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBaner;