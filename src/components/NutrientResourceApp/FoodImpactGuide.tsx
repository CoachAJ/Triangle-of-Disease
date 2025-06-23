import { useState } from "react";

interface Food {
  name: string;
  category: string;
  reason: string;
  impact: string;
  alternatives: string[];
}

const foods: Food[] = [
  { name: "Eggs", category: "Power Food", reason: "Rich in nutrients", impact: "Supports all Triangle points", alternatives: ["None needed"] },
  { name: "Wheat", category: "Problem Food", reason: "Triggers gut issues", impact: "Compromises Digestive", alternatives: ["Quinoa", "Rice"] },
  { name: "Spinach", category: "Power Food", reason: "High in magnesium", impact: "Supports Blood Sugar", alternatives: ["Kale"] },
  { name: "Cheese", category: "High-Histamine", reason: "Can trigger inflammation", impact: "Affects Adrenal/Thyroid", alternatives: ["Goat cheese", "None"] }
];

export default function FoodImpactGuide() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Food | null>(null);

  const filtered = query
    ? foods.filter(f => f.name.toLowerCase().includes(query.toLowerCase()))
    : foods;

  return (
    <section>
      <h2 className="font-proxima text-xl mb-2">Food Classification & Impact Guide</h2>
      <input
        className="border rounded p-2 w-full mb-2"
        placeholder="Search foods..."
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setSelected(null);
        }}
      />
      <ul className="bg-white rounded shadow">
        {filtered.map(food => (
          <li
            key={food.name}
            onClick={() => setSelected(food)}
            className="cursor-pointer hover:bg-blue-50 px-3 py-2 border-b last:border-b-0"
          >
            <span className="font-semibold">{food.name}</span>{" "}
            <span className="text-gray-500">({food.category})</span>
          </li>
        ))}
      </ul>
      {selected && (
        <div className="p-4 border mt-4 bg-blue-50 rounded shadow">
          <h3 className="font-bold text-lg">{selected.name} ({selected.category})</h3>
          <div className="mb-2"><b>Why:</b> {selected.reason}</div>
          <div className="mb-2"><b>Triangle Impact:</b> {selected.impact}</div>
          <div className="mb-2"><b>Alternatives:</b> {selected.alternatives.join(", ")}</div>
        </div>
      )}
    </section>
  );
}
