import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';


const Header = () => {
    const { user, logOut, admin } = useFirebase();
    return (
        <div>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-2 gap-4 items-center py-5">
                                    <div className="flex-shrink-0">
                                        <Link to='/'>
                                            <h2 className='text-red-400 font-semibold text-2xl capitalize'>TS.</h2>
                                        </Link>
                                    </div>
                                    <div className="hidden md:block text-right">
                                        <div className="ml-10 space-x-4">
                                            <NavLink className='text-white font-semibold hover:text-red-400 duration-300' to='/'>Home</NavLink>
                                            <NavLink className='text-white font-semibold hover:text-red-400 duration-300' to='/blogs'>Blogs</NavLink>
                                            {admin ? <NavLink className='text-white font-semibold hover:text-red-400 duration-300' to='/publish-blog-admin'>Publish Blog</NavLink> : <NavLink className='text-white font-semibold hover:text-red-400 duration-300' to='/publish-blog'>Publish Blog</NavLink>}
                                            {user.email ? <div className='inline-block'>
                                                {admin ? <div className='inline-block'>
                                                    <NavLink className='text-white font-semibold hover:text-red-400 duration-300 mr-2' to='/manage-blogs'>Manage Blogs</NavLink>
                                                    <NavLink className='text-white font-semibold hover:text-red-400 duration-300 mr-2' to='/make-admin'>Make Admin</NavLink>
                                                </div> : <NavLink className='text-white font-semibold hover:text-red-400 duration-300 mr-2' to='/my-blogs'>My Blogs</NavLink>}
                                                <Link to={'/'}><span onClick={logOut} className='text-white border-2 rounded-full p-1'>Log Out</span></Link></div> : <NavLink className='text-white font-semibold hover:text-red-400 duration-300' to='/login'>Login</NavLink>}
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex justify-end md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <NavLink className='text-white font-semibold hover:text-red-400 duration-300 block' to='/'>Home</NavLink>
                                    <NavLink className='text-white font-semibold hover:text-red-400 duration-300 block' to='/Blogs'>Blogs</NavLink>
                                    <NavLink className='text-white font-semibold hover:text-red-400 duration-300 block' to='/publish-blog'>Publish Blog</NavLink>
                                    {user.email ? <div className='inline-block'>
                                        {admin ? <div className='inline-block'>
                                            <NavLink className='text-white font-semibold hover:text-red-400 duration-300 block' to='/manage-blogs'>Manage Blogs</NavLink>
                                            <NavLink className='text-white font-semibold hover:text-red-400 duration-300 block' to='/make-admin'>Make Admin</NavLink>
                                        </div> : <NavLink className='text-white font-semibold hover:text-red-400 duration-300 block' to='/my-blogs'>My Blogs</NavLink>}
                                        <Link to={'/'}><span onClick={logOut} className='text-white border-2 rounded-full p-1 block'>Log Out</span></Link></div> : <NavLink className='text-white font-semibold hover:text-red-400 duration-300 block' to='/login'>Login</NavLink>}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div >
    );
};

export default Header;