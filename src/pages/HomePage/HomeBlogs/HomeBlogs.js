import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeBlogs.css'

const HomeBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs?status=approve')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="container mx-auto pt-8 pb-20 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <h2 className='text-3xl mb-5'>Featured Blogs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                blogs.map(blog => <div key={blog._id} className="single-blog shadow-lg">
                                    <div className="blog-img">
                                        <img className='mb-3' src={blog.image} alt="blog-bg" />
                                    </div>
                                    <div className="blog-text pb-6 px-2">
                                        <div className="blog-meta flex justify-between mb-3">
                                            <span className='text-sm bg-blue-500 text-white font-semibold px-1'>{blog.category}</span>
                                            <span className='text-sm'><i className="far fa-calendar-alt"></i> {blog.date}</span>
                                        </div>
                                        <Link to={`/blog-details/${blog._id}`}>
                                            <h2 className='text-2xl font-semibold cursor-pointer'>{blog.title}</h2>
                                        </Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="sidebar hidden lg:block px-10">
                        <h2 className='text-3xl mb-5'>Popular Blogs</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBlogs;