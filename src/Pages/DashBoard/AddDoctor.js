import { async } from '@firebase/util';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageApiKey = '00cb15d71fd9b813ad3ff35d6163158f';


    const { data: services, isLoading } = useQuery("services", () => fetch("http://localhost:5000/service").then(res => res.json()));

    const onSubmit = data => {

        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('result', result)
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }

                    fetch('http://localhost:5000/doctor', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            atuhorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('doctor', inserted);
                            toast.success("SuccessFully Added Doctor")
                            reset()
                        })
                }
            })
    }



    if (isLoading) {
        return <Loading></Loading>
    }

    return (
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

            {/* Specialty validation start here  */}
            <div className="form-control w-full max-w-xs">
                <label className="label">Specialty</label>
                <select {...register('specialty')} className="select input-bordered w-full max-w-xs">
                    {
                        services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                    }
                </select>

            </div>
            {/* specialty validation end here  */}

            {/* images fild start here  */}
            <div className="form-control w-full max-w-xs">
                <label className="label">Name</label>
                <input
                    type="file" className="input input-bordered w-full max-w-xs"
                    {...register("photo", {
                        required: {
                            value: true,
                            message: 'photo is Required'
                        },
                    })}
                />
                <label className="label">
                    {errors.photo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.photo.message}</span>}
                </label>
            </div>
            {/* images fild end here  */}


            <input type="submit" value='Add' className="btn btn-accent text-white mt-3 max-w-xs" />

        </form>
    );
};

export default AddDoctor;
