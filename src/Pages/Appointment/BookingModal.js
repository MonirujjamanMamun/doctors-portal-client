import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ modal, date }) => {
    const { name, slots } = modal;

    const handelModal = event => {
        event.preventDefault()
        const name = event.name.target.value;
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box mx-auto">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{modal?.name}</h3>
                    <form onSubmit={handelModal} className='grid grid-cols-1 justify-center w-96 mx-auto'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered my-2 max-w-xs" />
                        <select className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered my-2 max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered my-2 max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered my-2 max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-accent text-white mt-3 max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;