import React from 'react';

const ServiceInfo = ({ img, text }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                {text}
            </div>
        </div>
    );
};

export default ServiceInfo;