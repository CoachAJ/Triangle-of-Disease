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

interface NutrientLookupProps {
  nutrients: Nutrient[];
}

export default function NutrientLookup({ nutrients }: NutrientLookupProps): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<Nutrient | null>(null);

  const results = query
    ? nutrients.filter(
        n =>
          n.name.toLowerCase().includes(query.toLowerCase()) ||
          n.abbreviation.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section>
      <h2 className="font-proxima text-xl mb-2">Nutrient Lookup</h2>
      <input
        className="border rounded p-2 w-full mb-2"
        placeholder="Search nutrients..."
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setSelected(null);
        }}
      />
      <ul className="bg-white rounded shadow">
        {results.map(n => (
          <li
            key={n.name}
            onClick={() => setSelected(n)}
            className="cursor-pointer hover:bg-blue-50 px-3 py-2 border-b last:border-b-0"
          >
            <span className="font-semibold">{n.name}</span>{" "}
            <span className="text-gray-500">({n.abbreviation})</span>
          </li>
        ))}
      </ul>
      {selected && (
        <div className="p-4 border mt-4 bg-blue-50 rounded shadow">
          <h3 className="font-bold text-lg">{selected.name} ({selected.abbreviation})</h3>
          <div className="mb-2"><b>Category:</b> {selected.category}</div>
          <div className="mb-2"><b>Description:</b> {selected.description}</div>
          <div className="mb-2"><b>Biochemical Role:</b> {selected.biochemical_role}</div>
          <div className="mb-2"><b>Food Sources:</b> {selected.key_food_sources.join(", ")}</div>
          <div className="mb-2"><b>Youngevity Products:</b> {selected.youngevity_products.join(", ")}</div>
          <div className="mb-2"><b>Optimal Dosing:</b> {selected.optimal_dosing}</div>
          <div className="mb-2"><b>Deficiency Symptoms:</b> {selected.deficiency_symptoms.join(", ")}</div>
          <div className="mb-2"><b>Synergy:</b> 
            {Object.entries(selected.synergy_interactions).map(([k,v]) => (
              <div key={k}><b>{k}:</b> {Array.isArray(v) ? v.join(", ") : v}</div>
            ))}
          </div>
          <div className="mb-2"><b>Triangle Impact:</b>
            {Object.entries(selected.triangle_of_disease_impact).map(([k,v]) => (
              <div key={k}><b>{k}:</b> {v}</div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
