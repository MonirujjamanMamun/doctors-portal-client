import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import PatientsComments from './PatientsComments';

const PatientsSays = () => {
    const PatientComments = [
        {
            _id: 1,
            name: 'Wilson Harry',
            location: "Califonia",
            describtion: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
        },
        {
            _id: 2,
            name: 'Wilson Harry',
            location: "Califonia",
            describtion: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
        },
        {
            _id: 3,
            name: 'Wilson Harry',
            location: "Califonia",
            describtion: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
        }
    ]

    return (
        <div >
            <div className='flex justify-between px-12'>
                <div>
                    <h4 className='text-primary font-bold text-lg'>Testimonial</h4>
                    <h2 className='text-3xl text-accent text-bold'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-4'>
                {
                    PatientComments.map(c => <PatientsComments key={c._id} comment={c}></PatientsComments>)
                }
            </div>
        </div>
    );
};

export default PatientsSays;