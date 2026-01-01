import React from 'react';
import farmingImg from '../assets/featuredImg1.jpg'
const FarmingHinghlights = () => {
    return (
      <div className="bg-[#121212] text-white pb-5">
      {/* Introduction & Significance */}
      <div className="hero bg-[#1a1a1a] py-16 px-6 border-b border-gray-800">
        <div className="hero-content flex-col lg:flex-row max-w-7xl">
          <img
            src={farmingImg}
            className="max-w-sm rounded-2xl shadow-2xl border border-gray-700"
            alt="1971 War"
          />
          <div className="lg:pr-10">
            <h1 className="text-5xl font-extrabold text-[#15a815] mb-6 tracking-tight">
              Traditional Soil Farming
            </h1>
            <p className="py-2 text-gray-400 leading-relaxed text-justify">
              A Collection of Guides: This should be a library covering various
              farming practices, techniques, and methodologies. Smart
              Categorization: You must organize these guides based on crop
              types, specific seasons, and farming methods. Actionable Content:
              Each guide needs detailed step-by-step instructions, practical
              tips, and best practices for effective farming.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default FarmingHinghlights;