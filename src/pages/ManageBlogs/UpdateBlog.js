import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';


const UpdateBlog = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams()
    const [blog, setBlog] = useState({})

    useEffect(() => {
        fetch(`https://gentle-brook-35014.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
            })
    }, [id])

    const onSubmit = data => {

        console.log(data)
        fetch(`https://gentle-brook-35014.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Blog Updated Successfully")
                    reset()
                }
            })

    }
    return (
        <div>
            <div className="container mx-auto py-14 px-5 lg:px-0">
                <div className="w-full lg:w-1/2 mx-auto">
                    <div className="publish-blog">
                        <h2 className='text-4xl mb-8'>Update Your Blog</h2>
                        <div className="form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='h-10 pl-3 rounded focus:outline-none bg-gray-200 w-full mb-3' {...register("title", { required: true })} defaultValue={blog.title} placeholder='Update Blog title' /> <br />
                                <textarea className='h-20 pl-3 pt-2 rounded focus:outline-none bg-gray-200 w-full mb-3' placeholder='Update blog description' defaultValue={blog.body} {...register("body", { required: true })}></textarea>
                                <button className='bg-blue-500 px-12 cursor-pointer mt-3 py-3 text-white font-semibold rounded' type='submit'>Update Blog</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;