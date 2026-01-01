import React from "react";
import cropsData from "./CropData";
import CropCard from "./CropCard";

const CropdetailsforHomePage = () => {
  const CropsDta = cropsData;
  const sortData = cropsData.slice(0, 4);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <h1 className="text-green-600 text-3xl text-center">Crop Details</h1>

      {sortData.map((crop, index) => (
        <CropCard key={index} crop={crop}></CropCard>
      ))}
    </div>
  );
};

export default CropdetailsforHomePage;
