import React from 'react';

const UserRow = ({ user, index }) => {
    const { email } = user;
    return (
        <tr>
            <th>{1}</th>
            <td>{email}</td>
            <td>{ }</td>
            <td>{ }</td>
            <td>{ }</td>
        </tr>


    );
};

export default UserRow;