import React from "react";
import cropsData from "../Components/CropData";
import CropCard from "../Components/CropCard";

const CropDetailspage = () => {
  const cropdta = cropsData;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cropdta.map((crop, index) => (
          <CropCard key={index} crop={crop}></CropCard>
        ))}
      </div>
    </div>
  );
};

export default CropDetailspage;
