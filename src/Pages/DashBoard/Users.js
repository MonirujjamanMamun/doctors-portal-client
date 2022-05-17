import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () =>
        fetch('http://localhost:5000/users').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return (
            <div className='text-center my-28'>
                <button className="btn btn-square btn-lg loading"></button>
            </div>)
    };

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
                    {users.map(user => <UserRow key={user._id} user={user}></UserRow>)}
                </tbody>
            </table>
        </div>
    );
};

export default Users;