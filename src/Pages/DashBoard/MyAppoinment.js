import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyAppoinment = () => {
    const [appointments, setAppointment] = useState([]);
    const [user] = useAuthState(auth)
    // console.log(user)
    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/booking?patient=${user.email}`;
            fetch(url)
                .then(res => {
                    if (res.status === 401 || res.status === 403) {

                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data)
                    setAppointment(data)
                })
        }
    }, [user])

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                </thead>
                <tbody>
                    {/*   {appointments?.map((a, index) => <tr>
                        <th>{index + 1}</th>
                        <td>{a.patientName}</td>
                        <td>{a.data}</td>
                        <td>{a.slot}</td>
                        <td>{a.treatment}</td>
                    </tr>

                    )} */}


                </tbody>
            </table>
        </div>
    );
};

export default MyAppoinment;