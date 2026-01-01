import React from "react";
import cropsData from "../Components/CropData";
import CropCard from "../Components/CropCard";

const CropDetailspage = () => {
  const cropdta = cropsData;
  return (
    <div>
        <h1 className="text-green-600 text-3xl text-center">Crop Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cropdta.map((crop, index) => (
          <CropCard key={index} crop={crop}></CropCard>
        ))}
      </div>
    </div>
  );
};

export default CropDetailspage;
