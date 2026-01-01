import React from 'react';

const cropsData = [
  // --- Existing ---
  {
    name: "Rice",
    category: "Grains",
    varieties: ["BRRI Dhan 28", "BRRI Dhan 29", "Hybrid Rice"],
    cultivationMethod: "Nursery preparation, transplanting seedlings, regular irrigation",
    soilRequirements: "Clayey or loamy soil with good water retention",
    harvestingTechniques: "Harvest when grains are golden yellow, cut and dry before threshing",
    image: "https://images.unsplash.com/photo-1601473998771-6f4e31c92f59"
  },
  {
    name: "Wheat",
    category: "Grains",
    varieties: ["Shatabdi", "Bijoy", "Prodip"],
    cultivationMethod: "Direct seed sowing with proper spacing",
    soilRequirements: "Well-drained loamy soil",
    harvestingTechniques: "Harvest when plants turn yellow and grains are hard",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
  },
  {
    name: "Corn",
    category: "Grains",
    varieties: ["Sweet Corn", "Popcorn", "Dent Corn"],
    cultivationMethod: "Seed sowing in rows, regular irrigation",
    soilRequirements: "Loamy soil with good fertility",
    harvestingTechniques: "Harvest when kernels are fully mature",
    image: "https://images.unsplash.com/photo-1597802527121-3b9a1c8a2f8c"
  },
  {
    name: "Mango",
    category: "Fruits",
    varieties: ["Langra", "Himsagar", "Amrapali"],
    cultivationMethod: "Grafting, regular pruning and irrigation",
    soilRequirements: "Well-drained sandy loam soil",
    harvestingTechniques: "Hand plucking when fruit matures",
    image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed"
  },
  {
    name: "Banana",
    category: "Fruits",
    varieties: ["Sabri", "Grand Naine"],
    cultivationMethod: "Sucker planting with drip irrigation",
    soilRequirements: "Fertile loamy soil with good drainage",
    harvestingTechniques: "Harvest bunches when fruits are fully grown but green",
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e43e"
  },
  {
    name: "Apple",
    category: "Fruits",
    varieties: ["Red Delicious", "Granny Smith", "Golden Delicious"],
    cultivationMethod: "Bud grafting, regular pruning",
    soilRequirements: "Loamy soil with good drainage",
    harvestingTechniques: "Hand pick when fruits are firm and colored",
    image: "https://images.unsplash.com/photo-1589987600541-105a67a30112"
  },
  {
    name: "Tomato",
    category: "Vegetables",
    varieties: ["Roma", "Cherry", "Hybrid Tomato"],
    cultivationMethod: "Seedlings transplanting with staking",
    soilRequirements: "Well-drained loamy soil rich in organic matter",
    harvestingTechniques: "Hand picking when fruits turn red",
    image: "https://images.unsplash.com/photo-1546470427-e26264be0b0b"
  },
  {
    name: "Potato",
    category: "Vegetables",
    varieties: ["Diamant", "Cardinal", "Granola"],
    cultivationMethod: "Tuber planting with ridge method",
    soilRequirements: "Sandy loam soil",
    harvestingTechniques: "Digging after plants dry up",
    image: "https://images.unsplash.com/photo-1582281298055-e25b7bcb24c2"
  },
  {
    name: "Carrot",
    category: "Vegetables",
    varieties: ["Nantes", "Chantenay", "Imperator"],
    cultivationMethod: "Seed sowing in rows, thinning seedlings",
    soilRequirements: "Sandy loam soil, deep and loose",
    harvestingTechniques: "Pull when roots reach desired size",
    image: "https://images.unsplash.com/photo-1600718379840-b372b4a62f12"
  },
  {
    name: "Spinach",
    category: "Vegetables",
    varieties: ["Savoy", "Flat Leaf", "Semi-Savoy"],
    cultivationMethod: "Direct seed sowing, regular watering",
    soilRequirements: "Fertile loamy soil",
    harvestingTechniques: "Harvest leaves when mature but tender",
    image: "https://images.unsplash.com/photo-1626304398964-9586d45f51d5"
  },
  {
    name: "Jute",
    category: "Cash Crops",
    varieties: ["Tossa Jute", "White Jute"],
    cultivationMethod: "Broadcast seed sowing in moist soil",
    soilRequirements: "Alluvial soil with good moisture",
    harvestingTechniques: "Cut plants at flowering stage and retting in water",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
  },
  {
    name: "Sugarcane",
    category: "Cash Crops",
    varieties: ["Isd 36", "Isd 37"],
    cultivationMethod: "Stem cutting planting with irrigation",
    soilRequirements: "Deep fertile loamy soil",
    harvestingTechniques: "Manual cutting after 10–12 months",
    image: "https://images.unsplash.com/photo-1598515213692-5f252e2c1c9b"
  },
  {
    name: "Cotton",
    category: "Cash Crops",
    varieties: ["Desi", "American Upland", "Egyptian"],
    cultivationMethod: "Seed sowing in rows, irrigation, pest control",
    soilRequirements: "Well-drained loamy soil",
    harvestingTechniques: "Hand picking or mechanical harvesting of bolls",
    image: "https://images.unsplash.com/photo-1603079824303-253a5f0e4c42"
  },
  {
    name: "Tea",
    category: "Cash Crops",
    varieties: ["Assam", "Darjeeling", "Ceylon"],
    cultivationMethod: "Plucking young leaves, regular pruning",
    soilRequirements: "Well-drained acidic soil",
    harvestingTechniques: "Pluck 2–3 leaves and bud regularly",
    image: "https://images.unsplash.com/photo-1599140486725-9f87be69e2d6"
  }
];

export default cropsData;
