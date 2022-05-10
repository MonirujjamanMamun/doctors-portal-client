import React from 'react';

const InfoCart = ({ img, text, bgColor }) => {
    return (
        <div class={`hero bg-primary rounded-lg ${bgColor}`}>
            <div class="hero-content flex-col lg:flex-row">
                <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default InfoCart;