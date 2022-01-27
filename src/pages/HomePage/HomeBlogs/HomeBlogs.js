import React, { useState, useEffect } from 'react';
import './HomeBlogs.css'

const HomeBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs?status=approve')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <div className="container mx-auto pt-8 pb-20">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="single-blog shadow-lg">
                                <div className="blog-img">
                                    <img className='mb-3' src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/single-post-4-1.jpg" alt="" />
                                </div>
                                <div className="blog-text pb-6 px-2">
                                    <div className="blog-meta flex justify-between mb-3">
                                        <span className='text-sm bg-blue-500 text-white font-semibold px-1'>Asia</span>
                                        <span className='text-sm'><i className="far fa-calendar-alt"></i> 20/04/24</span>
                                    </div>
                                    <h2 className='text-2xl font-semibold cursor-pointer'>SAN FRANCISCO VACATIONS 2018</h2>
                                </div>
                            </div>
                            <div className="single-blog shadow-lg">
                                <div className="blog-img">
                                    <img className='mb-3' src="https://image.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3" alt="" />
                                </div>
                                <div className="blog-text pb-6 px-2">
                                    <div className="blog-meta flex justify-between mb-3">
                                        <span className='text-sm bg-blue-500 text-white font-semibold px-1'>Brazil</span>
                                        <span className='text-sm'><i className="far fa-calendar-alt"></i> 12/01/20</span>
                                    </div>
                                    <h2 className='text-2xl font-semibold cursor-pointer'>Want to explore with us?</h2>
                                </div>
                            </div>
                            <div className="single-blog shadow-lg">
                                <div className="blog-img">
                                    <img className='mb-3' src="https://image.freepik.com/free-photo/flat-lay-yellow-luggage-with-copy-space_23-2148786124.jpg" alt="" />
                                </div>
                                <div className="blog-text pb-6 px-2">
                                    <div className="blog-meta flex justify-between mb-3">
                                        <span className='text-sm bg-blue-500 text-white font-semibold px-1'>Brazil</span>
                                        <span className='text-sm'><i className="far fa-calendar-alt"></i> 12/01/20</span>
                                    </div>
                                    <h2 className='text-2xl font-semibold cursor-pointer'>Get ready to start the journey to brazil</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar">
                        <h2>SideBar</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBlogs;