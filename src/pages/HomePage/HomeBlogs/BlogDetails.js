import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
                console.log(data)
            })
    }, [id])
    return (
        <div>
            <div className="container mx-auto py-14">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <div className="blog-details">
                            <div className="blog-image">
                                <img src={blog.image} alt="blog-bg" />
                            </div>
                            <div className="blog-text">
                                <div className="blog-meta mt-8">
                                    <span className='text-sm bg-blue-500 text-white font-semibold px-3 py-1 mr-5 capitalize'>{blog.category}</span>
                                    <span className='text-sm mr-5'><i className="far fa-calendar-alt"></i> {blog.date}</span>
                                    <span className='mr-5'>Location: <span className='font-semibold'>{blog.location}</span></span>
                                    <span className='mr-5'>Tour Cost: <span className='font-semibold'>${blog.cost}</span></span>
                                    <p className='my-3'>Author: <span className='font-semibold'>{blog.authorName}</span> </p>
                                </div>
                                <h3 className='text-4xl mb-5'>{blog.title}</h3>
                                <p className=''>{blog.body}</p>
                            </div>
                        </div>
                        <Link to={'/blogs'}>
                            <button className='text-white bg-blue-500 px-14 py-3 rounded mt-8'>Back to Blogs</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;