import React, { useEffect, useState } from 'react';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [isDelete, setIsDelete] = useState(null)

    console.log(blogs)
    useEffect(() => {
        fetch("https://gentle-brook-35014.herokuapp.com/all-blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [isDelete])

    const handleStatus = (id) => {
        const confirmation = window.confirm('Are you sure you want to update status?')
        if (confirmation) {
            fetch(`https://gentle-brook-35014.herokuapp.com/updateStatus/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' }
            }).then(res => res.json())
                .then(data => {
                    if (data.matchedCount) {
                        setIsDelete(true)
                        alert('Status update Successfully.')
                    } else {
                        setIsDelete(false)
                    }
                })
        }

    }
    const handleStatus1 = (id) => {
        const confirmation = window.confirm('Are you sure you want to update status?')
        if (confirmation) {
            fetch(`https://gentle-brook-35014.herokuapp.com/updateStatus1/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' }
            }).then(res => res.json())
                .then(data => {
                    if (data.matchedCount) {
                        setIsDelete(true)
                        alert('Status update Successfully.')
                    } else {
                        setIsDelete(false)
                    }
                })
        }

    }

    // delete blogs
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure product will be delete parmanently?')
        if (confirmation) {
            fetch(`https://gentle-brook-35014.herokuapp.com/delete/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsDelete(true)
                        alert('Deleted Successfully.')
                    } else {
                        setIsDelete(false)
                    }
                })
        }
    }
    return (
        <div className='container mx-auto py-10'>
            <h2 className='text-center text-4xl mb-8'>Manage All Blogs</h2>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Serial No.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Blog Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Author Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {blogs.map((blog, index) => (
                                        <tr key={blog._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 capitalize">{index + 1}.</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="">
                                                        <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 capitalize">{blog.authorName}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {blog.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button className='border-2 mr-2 border-red-500 rounded-full px-2' onClick={() => handleStatus(blog._id)}>approve</button>
                                                <button className='border-2 mr-2 border-red-500 rounded-full px-2' onClick={() => handleStatus1(blog._id)}>pending</button>
                                                <button className='border-2 mr-2 border-red-500 rounded-full px-2' onClick={() => handleDelete(blog._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBlogs;