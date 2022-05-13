import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const handelWithGoogle = () => {
        signInWithGoogle()
    }


    return (
        <div className='mx-auto lg:w-96 sm:w-0 lg:max-w-lg sm:max-w-sm my-32'>
            <div className="card bg-base-100 shadow-xl ">

                <h1 className='text-2xl font-bold text-accent text-center my-5'>Login</h1>
                <form onSubmit={handleSubmit()} className='card-body'>

                    {/* email validation start here  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Email</label>
                        <input
                            type="email" placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    {/* email validation end here  */}

                    {/* password validation start here  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Password</label>
                        <input
                            type="password" placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Requar"
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Must be 8 Character or longer'
                                }
                            })}
                        />
                        <label className='label'>
                            {errors.password?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600 label-text-alt'>{errors.password.message}</span>}
                        </label>
                    </div>

                    {/* password validation end here  */}

                    <input type="submit" value='Submit' className="btn btn-accent text-white mt-3 max-w-xs" />

                    <div className='divider'>OR</div>

                    <button onClick={handelWithGoogle} type="submit" value='Continue With Google' className="btn btn-accent text-white mt-3 max-w-xs">Continue With Google</button>

                </form>
            </div>

        </div>
    );
};

export default Login;