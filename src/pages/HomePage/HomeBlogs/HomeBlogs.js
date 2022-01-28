import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeBlogs.css'
import SideBar from './SideBar';

const HomeBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    const size = 10
    useEffect(() => {
        fetch(`http://localhost:5000/blogs?status=approve&&page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.result)
                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page])
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
                        <div className="pagination">
                            {
                                [...Array(pageCount).keys()].map(number => <button key={number} onClick={() => setPage(number)} className={number === page ? 'bg-blue-500 border-2 border-blue-500 text-white text-2xl px-2 mr-2 mt-16 rounded font-semibold' : 'border-2 px-2 mr-2 mt-16 border-blue-500 text-xl rounded font-semibold'}>{number + 1}</button>)
                            }
                        </div>
                    </div>
                    <div className="sidebar hidden lg:block px-10">
                        <h2 className='text-3xl mb-5'>Popular Blogs</h2>
                        {
                            blogs.slice(5, 10).map(blog => <SideBar key={blog._id} blog={blog} />)
                        }
                        <div className='mt-10 text-2xl'>
                            <h4>Share Blogs</h4>
                            <span className='w-12 h-1 bg-blue-500 block mb-5'></span>
                            <i class="fab fa-facebook mr-3 bg-white text-black shadow-xl cursor-pointer p-1"></i>
                            <i class="fab fa-google mr-3 bg-white text-black shadow-xl cursor-pointer p-1"></i>
                            <i class="fab fa-twitter mr-3 bg-white text-black shadow-xl cursor-pointer p-1"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBlogs;