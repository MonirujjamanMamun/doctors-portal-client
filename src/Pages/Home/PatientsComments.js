import React from 'react';

const PatientsComments = ({ comment }) => {

    return (
        <section>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">

                    <p>If a dog chews shoes whose shoes does he choose?</p>

                    <div className="flex items-center">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={comment.img} />
                        </div>
                        <div className='ml-5'>
                            <h2 className="card-title">{comment?.name}</h2>
                            <p>{comment.location}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PatientsComments;