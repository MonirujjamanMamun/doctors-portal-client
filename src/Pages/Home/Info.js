import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    const clockText = <>
        <h3 className='text-xl text-white'>This is Clock</h3>
        <p className='text-white'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
    </>
    const markerText = <>
        <h3 className='text-xl text-white'>This is Clock</h3>
        <p className='text-white'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
    </>
    const phoneText = <>
        <h3 className='text-xl text-white'>This is Clock</h3>
        <p className='text-white'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
    </>
    const btnColor = 'bg-gradient-to-r from-primary to-secondary';

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 px-12'>
            <InfoCart img={clock} text={clockText} bgColor={btnColor}></InfoCart>
            <InfoCart img={marker} text={markerText} bgColor='bg-accent'></InfoCart>
            <InfoCart img={phone} text={phoneText} bgColor={btnColor}></InfoCart>
        </div>
    );
};

export default Info;