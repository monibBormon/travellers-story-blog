import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';


const PublishAdminBlog = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [imageLoading, setimageLoading] = useState(false);
    const { user } = useFirebase()

    const onSubmit = data => {

        // image upload to imgbb
        const image = data.image[0];
        if (image) {
            setimageLoading(true);
            const formData = new FormData();
            formData.append('image', image);

            //SEND IMAGE TO IMGBB
            fetch(`https://api.imgbb.com/1/upload?key=5d5f44b6ec0a623aac3717239b71aa4a`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(upload => {
                    if (upload.success) {
                        const imgUrl = upload.data.url
                        data.image = imgUrl
                        //set blog status
                        data.status = "approve";
                        data.email = user.email;
                        fetch("https://travellers-story-server.vercel.app/blogs", {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(data)
                        }).then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    alert("Blog Posted successfully")
                                    reset()
                                }
                            })
                    }
                    else {
                        alert('Something went wrong. Please try again. Sorry!!')
                    }
                })
        }

    }
    return (
        <div>
            <div className="container mx-auto py-14 px-5 lg:px-0">
                <div className="w-full lg:w-1/2 mx-auto">
                    <div className="publish-blog">
                        <h2 className='text-4xl mb-8'>Publish Your own blog</h2>
                        <div className="form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='h-10 pl-3 rounded focus:outline-none bg-gray-200 w-full mb-3' {...register("title", { required: true })} placeholder='Enter Blog title' /> <br />
                                <input className='h-10 pl-3 rounded focus:outline-none bg-gray-200 w-full mb-3' {...register("location", { required: true })} placeholder='Enter Location / Address' /> <br />
                                <input className='h-10 pl-3 rounded focus:outline-none bg-gray-200 w-full mb-3' type={'number'} {...register("cost", { required: true })} placeholder='Enter Tour cost' /> <br />
                                <input className='h-10 pl-3 rounded focus:outline-none bg-gray-200 w-full mb-3' type={'date'} {...register("date", { required: true })} placeholder='Enter Tour Date' /> <br />
                                <input className='h-10 pl-3 rounded focus:outline-none bg-gray-200 w-full mb-3' {...register("authorName", { required: true })} placeholder='Enter Author Name' /> <br />
                                <input className='h-10 pl-3 rounded focus:outline-none bg-gray-200 w-full mb-3' type={'number'} max={'5'} {...register("rating", { required: true })} placeholder='Give your rating' /> <br />
                                <label>Select Category:</label>
                                <select className='mb-5' {...register("category")}>
                                    <option value="travel">Travel</option>
                                    <option value="nature">Nature</option>
                                    <option value="tours">Tours</option>
                                    <option value="food">Food</option>
                                    <option value="food">Asia</option>
                                </select><br />
                                <textarea className='h-20 pl-3 pt-2 rounded focus:outline-none bg-gray-200 w-full mb-3' placeholder='Enter blog description' {...register("body")}></textarea>
                                <input type="file" accept="image/*" {...register("image", { required: true })} /> <br />
                                <button className='bg-blue-500 px-12 cursor-pointer mt-3 py-3 text-white font-semibold rounded' type='submit'>Post Blog</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublishAdminBlog;