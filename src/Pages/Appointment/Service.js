import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length === 0 ? <p className='text-red-700 font-bold'>Try Again Another Date</p> : slots[0]}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Avialable</p>
                <div className="card-actions justify-center mt-4">
                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(service)} disabled={slots.length === 0}
                        className="btn btn-secondary uppercase text-white">book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;