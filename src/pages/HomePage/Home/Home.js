import React from 'react';
import Counter from '../Counter/Counter';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import Hero from '../Hero/Hero';
import HomeBlogs from '../HomeBlogs/HomeBlogs';

const Home = () => {
    return (
        <div>
            <HeaderBottom />
            <Hero />
            <HomeBlogs />
            <Counter />
        </div>
    );
};

export default Home;