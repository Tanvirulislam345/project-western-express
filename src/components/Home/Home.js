import React from 'react';
import Banner from '../Banner/Banner';
import OurBlog from '../OurBlog/OurBlog';
import TourPackage from '../TourPackage/TourPackage';
import Traveler from '../Traveler/Traveler';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackage></TourPackage>
            <OurBlog></OurBlog>
            <Traveler></Traveler>
        </div>
    );
};

export default Home;