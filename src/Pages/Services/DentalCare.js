import React from 'react';
import dantalCare from '../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row px-12">
                <img src={dantalCare} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='p-10 ml-6'>
                    <h1 className="text-5xl font-bold text-accent
                    ">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-10 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary text-white px-5 font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;