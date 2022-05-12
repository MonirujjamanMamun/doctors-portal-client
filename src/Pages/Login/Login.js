import React from 'react';

const Login = () => {
    return (
        <div className='mx-auto lg:w-96 sm:w-0 lg:max-w-lg sm:max-w-sm my-32'>
            <div className="card bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h className='text-2xl font-bold text-accent text-center my-5'>Login</h>
                    <input type="email" name='email' placeholder="Email Address" className="input input-bordered my-2 lg:max-w-lg " />
                    <input type="password" name='email' placeholder="Password" className="input input-bordered my-2 lg:max-w-lg " />
                    <input type="submit" value='Submit' className="btn btn-accent text-white mt-3 max-w-xs" />
                    <div className='divider'>OR</div>
                    <input type="submit" value='Continue With Google' className="btn btn-accent text-white mt-3 max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default Login;