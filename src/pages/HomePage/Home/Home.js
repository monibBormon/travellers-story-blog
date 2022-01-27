import React from 'react';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import Hero from '../Hero/Hero';
import HomeBlogs from '../HomeBlogs/HomeBlogs';

const Home = () => {
    return (
        <div>
            <HeaderBottom />
            <Hero />
            <HomeBlogs />
        </div>
    );
};

export default Home;