import { useState } from "react";

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

interface SymptomFinderProps {
  nutrients: Nutrient[];
}

interface SymptomMap {
  [key: string]: string[];
}

interface Results {
  rootCauses: string[];
  nutrients: Nutrient[];
  recommendations: string[];
}

const commonSymptoms: string[] = [
  "Fatigue", "Brain fog", "Constipation", "Muscle weakness", "Mood swings", "Skin issues", "Headaches"
];

export default function SymptomFinder({ nutrients }: SymptomFinderProps): JSX.Element {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [results, setResults] = useState<Results | null>(null);

  // Simple mapping for demo; in production use a richer mapping
  const symptomMap: SymptomMap = {
    "Fatigue": ["Vitamin B1", "Vitamin B12", "Magnesium", "Iron"],
    "Brain fog": ["Vitamin B1", "Vitamin B6", "Choline"],
    "Constipation": ["Magnesium", "Potassium", "Vitamin C"],
    "Muscle weakness": ["Magnesium", "Potassium", "Calcium"],
    "Mood swings": ["Vitamin B6", "Magnesium", "Omega-3s"],
    "Skin issues": ["Vitamin A", "Zinc", "Biotin"],
    "Headaches": ["Magnesium", "Vitamin B2", "Vitamin B5"]
  };

  function handleFind(): void {
    let foundNutrients: string[] = [];
    symptoms.forEach(symp => {
      if (symptomMap[symp]) {
        foundNutrients = [...foundNutrients, ...symptomMap[symp]];
      }
    });
    foundNutrients = [...new Set(foundNutrients)];
    const foundProfiles: Nutrient[] = nutrients.filter(n => foundNutrients.includes(n.name));
    setResults({
      rootCauses: ["Digestive", "Blood Sugar", "Adrenal/Thyroid"], // For demo, always show all 3
      nutrients: foundProfiles,
      recommendations: ["Eat whole foods", "Avoid processed sugar", "Consider Youngevity supplements"]
    });
  }

  return (
    <section>
      <h2 className="font-proxima text-xl mb-2">Symptom-to-Nutrient Finder</h2>
      <div className="mb-2">
        <label className="block mb-1">Select Symptoms:</label>
        <div className="flex flex-wrap gap-2 mb-2">
          {commonSymptoms.map(symp => (
            <button
              key={symp}
              className={`px-2 py-1 rounded border ${symptoms.includes(symp) ? "bg-blue-200" : "bg-white"}`}
              onClick={() =>
                setSymptoms(s =>
                  s.includes(symp) ? s.filter(x => x !== symp) : [...s, symp]
                )
              }
              type="button"
            >
              {symp}
            </button>
          ))}
        </div>
        <button
          className="bg-health-blue text-white px-4 py-2 rounded"
          onClick={handleFind}
        >
          Find Root Causes
        </button>
      </div>
      {results && (
        <div className="bg-blue-50 border rounded p-4 mt-2">
          <div className="mb-2"><b>Possible Root Causes:</b> {results.rootCauses.join(", ")}</div>
          <div className="mb-2"><b>Relevant Nutrient Deficiencies:</b>
            <ul>
              {results.nutrients.map(n => (
                <li key={n.name} className="underline cursor-pointer" title={n.description}>
                  {n.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-2"><b>General Recommendations:</b> {results.recommendations.join(", ")}</div>
        </div>
      )}
    </section>
  );
}
