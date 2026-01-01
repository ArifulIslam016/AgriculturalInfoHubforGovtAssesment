import React from 'react';
import Slider from '../Components/HeroSection/Slider';
import FarmingHinghlights from '../Components/FarmingHinghlights';
import FarmingGude from '../Components/FarmingGude';
import CropCard from '../Components/CropCard';
import CropdetailsforHomePage from '../Components/CropdetailsforHomePage';
import PestControlCard from '../Components/PestControl';

const HomePage = () => {
    return (
        <div>
            <Slider/>
            <FarmingHinghlights/>
            <FarmingGude/>
            <CropdetailsforHomePage></CropdetailsforHomePage>
            <PestControlCard></PestControlCard>
        </div>
    );
};

export default HomePage;