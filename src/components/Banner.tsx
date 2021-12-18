import React from 'react';
import SearchBar from './SearchBar';
import BannerHeader from './BannerHeader';

// Components

const Banner: React.FC = () => {
    return (
        <>
            <BannerHeader />
            <SearchBar />
        </>
    )
}

export default Banner
