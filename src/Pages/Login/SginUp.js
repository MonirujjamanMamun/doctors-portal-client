import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';


const SginUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signError;

    if (error || updateError) {
        signError = <p className='text-white bg-red-700 px-2 py-3 rounded-lg'>Error: {error?.message || updateError?.message}</p>
    }

    if (user) {
        console.log(user)
    }

    if (loading || updating) {
        return (
            <div className='text-center my-28'>
                <button className="btn btn-square btn-lg loading"></button>
            </div>
        )
    }


    const onSubmit = async data => {
        // data.preventDefault()
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });

    }

    return (
        <div className='mx-auto lg:w-96 sm:w-0 lg:max-w-lg sm:max-w-sm my-32'>
            <div className="card bg-base-100 shadow-xl ">

                <h1 className='text-2xl font-bold text-accent text-center my-5'>Sign UP</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='card-body'>

                    {/* name validation start here  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Name</label>
                        <input
                            type="text" placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    {/* name validation end here  */}

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
                    {signError}
                    <input type="submit" value='Sign Up' className="btn btn-accent text-white mt-3 max-w-xs" />
                    <p><small>Already have an Account <Link className='text-primary' to='/login'>Log In</Link> </small></p>
                </form>
            </div>

        </div>
    );
};

export default SginUp;