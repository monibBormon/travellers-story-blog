import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        fetch('https://travellers-story-server.vercel.app/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    reset()
                }
            })
    }
    return (
        <div className='py-14 px-5 lg:px-0'>
            <div className='w-full lg:w-1/2 mx-auto'>
                <h2 className='text-2xl mb-8 font-semibold text-center'>Make Admin</h2>
                {success && <p className='my-2'>Admin added successfully</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='inline-block mb-2 text-xl' htmlFor="name">Enter Admin Email</label> <br />
                    <input className='h-10 pl-3 rounded focus:outline-none bg-gray-200 w-full mb-3' type={'email'} {...register("email", { required: true })} placeholder='Enter Email' /> <br />
                    <button className='bg-blue-500 px-12 cursor-pointer mt-3 py-3 text-white font-semibold mx-auto block rounded' type='submit'>Make Admin</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;