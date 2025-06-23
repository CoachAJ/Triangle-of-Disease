import React, { useState } from "react";

export default function SupplementPlanner({ nutrients }) {
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState({ gender: "", weight: "", goal: "", symptom: "" });
  const [recommendation, setRecommendation] = useState(null);

  function handleNext() {
    if (step === 3) {
      // Demo logic: recommend a product based on goal/symptom
      let products = [];
      if (inputs.goal === "Energy") products.push("Beyond Tangy Tangerine");
      if (inputs.goal === "Immunity") products.push("Ultimate Daily Classic");
      if (inputs.goal === "Mood") products.push("Brain & Focus Pack");
      setRecommendation({
        products,
        rationale: "Selected based on your goals and symptoms. See Nutrient Lookup for details."
      });
    }
    setStep(s => s + 1);
  }

  return (
    <section>
      <h2 className="font-proxima text-xl mb-2">Personalized Supplementation Planner</h2>
      {step === 1 && (
        <div>
          <label>Gender:
            <select className="ml-2 border rounded" value={inputs.gender} onChange={e => setInputs(i => ({ ...i, gender: e.target.value }))}>
              <option value="">Select</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </label>
          <button className="ml-4 bg-health-blue text-white px-2 py-1 rounded" onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label>Weight (lbs):
            <input className="ml-2 border rounded w-20" type="number" value={inputs.weight} onChange={e => setInputs(i => ({ ...i, weight: e.target.value }))} />
          </label>
          <button className="ml-4 bg-health-blue text-white px-2 py-1 rounded" onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <label>Primary Health Goal:
            <select className="ml-2 border rounded" value={inputs.goal} onChange={e => setInputs(i => ({ ...i, goal: e.target.value }))}>
              <option value="">Select</option>
              <option value="Energy">Energy</option>
              <option value="Immunity">Immunity</option>
              <option value="Mood">Mood</option>
            </select>
          </label>
          <button className="ml-4 bg-health-blue text-white px-2 py-1 rounded" onClick={handleNext}>Get Recommendation</button>
        </div>
      )}
      {step > 3 && recommendation && (
        <div className="bg-blue-50 border rounded p-4 mt-2">
          <div className="mb-2"><b>Recommended Products:</b> {recommendation.products.join(", ")}</div>
          <div className="mb-2"><b>Rationale:</b> {recommendation.rationale}</div>
        </div>
      )}
    </section>
  );
}
