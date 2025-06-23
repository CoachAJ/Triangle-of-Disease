import { useState } from "react";
import nutrientData from "./nutrientData.json";
import NutrientLookup from "./NutrientLookup";
import SymptomFinder from "./SymptomFinder";
import SupplementPlanner from "./SupplementPlanner";
import FoodImpactGuide from "./FoodImpactGuide";
import FoodDiary from "./FoodDiary";

interface Nutrient {
  name: string;
  abbreviation: string;
  category: string;
  description: string;
  biochemical_role: string;
  key_food_sources: string[];
  youngevity_products: string[];
  optimal_dosing: string;
  deficiency_symptoms: string[];
  synergy_interactions: {
    works_with: string[];
    enhanced_by: string[];
    inhibited_by: string[];
  };
  triangle_of_disease_impact: {
    digestive_health: string;
    blood_sugar: string;
    adrenal_thyroid: string;
  };
}

export default function NutrientResourceApp(): JSX.Element {
  const [nutrients] = useState<Nutrient[]>(nutrientData as Nutrient[]);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8 font-montserrat">
      <h1 className="text-3xl font-proxima font-bold text-center mb-2">Nutrient Resource Center</h1>
      <NutrientLookup nutrients={nutrients} />
      <SymptomFinder nutrients={nutrients} />
      <SupplementPlanner />
      <FoodImpactGuide />
      <FoodDiary />
    </div>
  );
}
