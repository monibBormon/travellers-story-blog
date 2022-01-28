import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ blog }) => {
    return (
        <div className='flex mb-3'>
            <img className='w-24 mr-3' src={blog.image} alt="" />
            <div>
                <h4 className='text-lg font-semibold mb-2'>{blog.title}</h4>
                <Link to={`/blog-details/${blog._id}`}>
                    <button className='border-2 border-blue-500 px-1 rounded-2xl text-sm'>Read More..</button>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;