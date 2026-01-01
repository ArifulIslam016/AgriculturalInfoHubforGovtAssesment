import React from 'react';
import cropsData from './CropData';

const CropCard = ({crop}) => {
    return (
   <div className="max-w-sm rounded overflow-hidden p-1 shadow-lg bg-white/90 dark:bg-gray-800 m-4">
      <img
        className="w-full h-48 rounded-t-2xl object-cover"
        src={crop.image}
        alt={crop.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-green-800 dark:text-green-400">
          {crop.name}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
          <strong>Category:</strong> {crop.category}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
          <strong>Varieties:</strong> {crop.varieties.join(", ")}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
          <strong>Cultivation:</strong> {crop.cultivationMethod}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
          <strong>Soil:</strong> {crop.soilRequirements}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          <strong>Harvest:</strong> {crop.harvestingTechniques}
        </p>
      </div>
    </div>
    );
};

export default CropCard;