import React from 'react';
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser, error, googleSignIn } = useFirebase()
    const navigate = useNavigate()
    const location = useLocation()

    const onSubmit = data => {
        loginUser(data.email, data.password, location, navigate)
    }
    return (
        <div className='py-14 px-5 lg:px-0'>
            <div className="login-form w-full lg:w-1/2 mx-auto">
                <h2 className='text-center mb-8 text-4xl'>Please Login</h2>
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='inline-block mb-2 text-xl' htmlFor="name">Your Email</label> <br />
                        <input className='h-10 pl-3 rounded focus:outline-none bg-gray-200 w-full mb-3' type={'email'} {...register("email", { required: true })} placeholder='Enter Email' /> <br />
                        <label className='inline-block mb-2 text-xl' htmlFor="password">Your Password</label> <br />
                        <input className='h-10 pl-3 rounded focus:outline-none bg-gray-200 w-full mb-3' type={'password'} {...register("password", { required: true })} placeholder='Enter Password' /> <br />
                        {error && <p className='text-red-500 mt-2'>{error}</p>}
                        <button className='bg-blue-500 px-12 cursor-pointer mt-3 py-3 text-white font-semibold mx-auto block rounded' type='submit'>Login</button>
                    </form>
                </div>
                <div className='text-center'>
                    <p className='mt-5'>New User? <Link to='/register'><span className='underline'>Create a free account here.</span></Link></p>
                    <p>Or</p>
                    <h4 onClick={() => googleSignIn(location, navigate)} className='text-xl inline-block p-2 shadow-md cursor-pointer'>Continue with <FcGoogle className='inline-block' /></h4>
                </div>
            </div>
        </div>
    );
};

export default Login;