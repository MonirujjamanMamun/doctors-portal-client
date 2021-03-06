import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='text-2xl font-primary'>This is Dash Board</h1>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">DashBoard</Link></li>
                        <li><Link to="reveiw">Reveiw</Link></li>
                        <li><Link to="users">Users</Link></li>
                        <li><Link to="addDoctors">Add Doctors</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;