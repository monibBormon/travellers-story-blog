import React from 'react';

const Footer = () => {
    return (
        <div>
            <hr />
            <div className="container mx-auto py-14 px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="footer-box text-center">
                        <h4 className='text-3xl mb-4'>Find Us Here</h4>
                        <img className='w-60 mx-auto' src="https://image.freepik.com/free-vector/green-world-map_1035-6409.jpg" alt="footer map" />
                    </div>
                    <div className="footer-box text-center">
                        <h4 className='text-3xl mb-4'>Follow on Social Media</h4>
                        <div className=''>
                            <div className='flex justify-center mb-5'>
                                <div className='mr-5'>
                                    <i className="fab fa-facebook text-2xl"></i>
                                    <p>Facebook</p>
                                </div>
                                <div>
                                    <i className="fab fa-twitter text-2xl"></i>
                                    <p>Twitter</p>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='mr-5'>
                                    <i className="fab fa-google text-2xl"></i>
                                    <p>Google</p>
                                </div>
                                <div>
                                    <i className="fab fa-youtube text-2xl"></i>
                                    <p>Youtube</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-box text-center">
                        <h4 className='text-3xl mb-4'>Subscribe Newsletter</h4>
                        <input className='w-full h-10 border-2 rounded pl-3 focus:outline-none' type="text" placeholder='Enter Email' />
                        <button className='mt-5 bg-blue-500 text-white px-10 py-2'>Subscribe</button>
                    </div>
                </div>
                <h2 className='pt-2 text-center'>All right reserved to &copy; Travellers Story 2022</h2>
            </div>
        </div>
    );
};

export default Footer;