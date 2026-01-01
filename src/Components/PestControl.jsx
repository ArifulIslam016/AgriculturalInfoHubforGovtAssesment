import React from "react";

const PestControlCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mt-6">
      <img
        className="w-full h-48 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBAJbd7-Y7X16KAur8I6SiQERyOZkt3zB0g&s"
        alt="Pest Control"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">
          Pest Control Guide
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Effective methods to protect your crops from pests and diseases.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
          <li>Use natural predators like ladybugs and spiders.</li>
          <li>Apply organic pesticides like neem oil.</li>
          <li>Regularly inspect plants for early signs of pests.</li>
          <li>Crop rotation to prevent pest buildup in soil.</li>
        </ul>
        <button className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PestControlCard;
