import React from 'react';

const Counter = () => {
    return (
        <div>
            <div className="container mx-auto pb-14 px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="single-counter p-5 shadow-xl rounded text-center">
                        <div className="icon mb-3">
                            <i className="fas fa-user-edit text-4xl text-blue-500"></i>
                        </div>
                        <div className="counter-text">
                            <h4 className='text-4xl'>35</h4>
                            <p>Happy Blogger</p>
                        </div>
                    </div>
                    <div className="single-counter p-5 shadow-xl rounded text-center">
                        <div className="icon mb-3">
                            <i className="fas fa-edit text-4xl text-blue-500"></i>
                        </div>
                        <div className="counter-text">
                            <h4 className='text-4xl'>120</h4>
                            <p>Total Blogs</p>
                        </div>
                    </div>
                    <div className="single-counter p-5 shadow-xl rounded text-center">
                        <div className="icon mb-3">
                            <i className="far fa-clock text-4xl text-blue-500"></i>
                        </div>
                        <div className="counter-text">
                            <h4 className='text-4xl'>3400</h4>
                            <p>Reading Time(minute)</p>
                        </div>
                    </div>
                    <div className="single-counter p-5 shadow-xl rounded text-center">
                        <div className="icon mb-3">
                            <i className="fas fa-globe-asia text-4xl text-blue-500"></i>
                        </div>
                        <div className="counter-text">
                            <h4 className='text-4xl'>10</h4>
                            <p>Countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;