import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, "PP")

    const handelModal = event => {
        event.preventDefault()
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slots,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.sucess) {
                    toast(`Appointment is set ${formattedDate} at ${slot}`)
                } else {
                    toast.error(`You have an appiontment${formattedDate} at ${slot}`)
                }

                setTreatment(null)
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box mx-auto">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handelModal} className='grid grid-cols-1 justify-center w-96 mx-auto'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered my-2 max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="email" name='email' disabled value={user?.email} placeholder="Email Address" className="input input-bordered my-2 max-w-xs" />
                        <input type="text" name='name' disabled value={user?.displayName} placeholder="Full Name" className="input input-bordered my-2 max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered my-2 max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-accent text-white mt-3 max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;