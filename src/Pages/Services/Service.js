import React from 'react';
import ServiceInfo from './ServiceInfo';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';

const Service = () => {
    const flourideText = <>
        <h1>Flouride Treatment</h1>
        <p>If a dog chews shoes whose shoes does he choose?</p>
    </>
    const cavityText = <>
        <h1>Canity Filling</h1>
        <p>If a dog chews shoes whose shoes does he choose?</p>
    </>
    const teethText = <>
        <h1>Teeth whitening</h1>
        <p>If a dog chews shoes whose shoes does he choose?</p>
    </>
    return (
        <div>
            <div className='text-center my-10 py-10'>
                <h1 className='text-secondary font-bold text-xl'>Our Service</h1>
                <h1 className='text-4xl text-accent'>Service We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 px-12 py-2'>
                <ServiceInfo img={fluoride} text={flourideText}></ServiceInfo>
                <ServiceInfo img={cavity} text={cavityText}></ServiceInfo>
                <ServiceInfo img={teeth} text={teethText}></ServiceInfo>
            </div>
        </div>
    );
};

export default Service;