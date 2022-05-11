import React from 'react';

const InfoCart = ({ img, text, bgColor }) => {
    return (
        <div className={`hero bg-primary rounded-lg ${bgColor}`}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default InfoCart;