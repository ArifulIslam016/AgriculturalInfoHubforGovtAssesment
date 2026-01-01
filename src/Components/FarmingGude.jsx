import React from "react";
import { Link } from "react-router";

const FarmingGude = () => {
  return (
    <div className="bg-[#121212] rounded-2xl">
      <div className="flex gap-2 flex-col md:flex-row items-center justify-center  text-white pb-5 mx-auto px-10 max-w-full">
        <div className="px-6 rounded-2xl">
          {" "}
          <h1 className="text-5xl font-extrabold text-[#15a815] mb-6 tracking-tight">
            Farming Guide
          </h1>
          <p>
            Beyond the physical steps of growing a crop, successful farm
            management involves several overarching principles:{" "}
          </p>
        </div>
        <ul className="px-6 rounded-2xl list-disc">
          <li>
            Business Planning: Treat farming as a business. Develop a clear
            vision, set goals, manage finances, and create a business plan that
            addresses market demand, costs, and profit potential.{" "}
          </li>
          <li>
            Market Analysis: Decide what to grow based on market demand and
            potential profitability, not just growing capacity.
          </li>
          <li>
            {" "}
            Resource Management: Efficiently use available resources such as
            land, labor, water, and capital.
          </li>
          <li>
            {" "}
            Technology Adoption: Stay open to new technologies like precision
            farming tools, AI-based monitoring, and data analytics to optimize
            resource use and improve yields.
          </li>
          <li>
            {" "}
            Sustainability and Soil Health: Implement practices that maintain
            and improve soil health over the long term, such as crop rotation,
            cover crops, and minimal tillage, which can also boost long-term
            yields.{" "}
          </li>
          <li>
            Health and Safety: Ensure the health and safety of yourself and your
            workers by providing proper training, protective equipment, and safe
            working conditions.
          </li>
          <li>
            {" "}
            Networking and Information: Consult local agricultural experts and
            join farmer associations to stay updated on industry news, potential
            disease outbreaks, and available loans or subsidies.
          </li>
          <li>
            {" "}
            Adaptability: The farming environment is dynamic due to weather and
            market fluctuations.
          </li>
          <li>
            {" "}
            Be flexible and ready to adapt your management practices to overcome
            unexpected challenges.
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        {" "}
        <Link className="btn border-0 rounded-2xl bg-linear-60 from-green-400 to-green-600 w-fit">
          See More
        </Link>
      </div>
    </div>
  );
};

export default FarmingGude;
