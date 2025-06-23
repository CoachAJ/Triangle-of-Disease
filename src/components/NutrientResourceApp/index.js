import React, { useState } from "react";
import nutrientData from "./nutrientData.json";
import NutrientLookup from "./NutrientLookup";
import SymptomFinder from "./SymptomFinder";
import SupplementPlanner from "./SupplementPlanner";
import FoodImpactGuide from "./FoodImpactGuide";
import FoodDiary from "./FoodDiary";

export default function NutrientResourceApp() {
  const [nutrients] = useState(nutrientData);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8 font-montserrat">
      <h1 className="text-3xl font-proxima font-bold text-center mb-2">Nutrient Resource Center</h1>
      <NutrientLookup nutrients={nutrients} />
      <SymptomFinder nutrients={nutrients} />
      <SupplementPlanner nutrients={nutrients} />
      <FoodImpactGuide />
      <FoodDiary />
    </div>
  );
}
