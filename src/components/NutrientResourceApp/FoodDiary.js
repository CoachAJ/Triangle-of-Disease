import React, { useState } from "react";

export default function FoodDiary() {
  const [food, setFood] = useState("");
  const [symptom, setSymptom] = useState("");
  const [entries, setEntries] = useState([]);

  function handleAdd() {
    if (food || symptom) {
      setEntries(e => [
        ...e,
        { date: new Date().toLocaleDateString(), food, symptom }
      ]);
      setFood("");
      setSymptom("");
    }
  }

  return (
    <section>
      <h2 className="font-proxima text-xl mb-2">Food Diary & Symptom Tracker</h2>
      <div className="flex gap-2 mb-2">
        <input
          className="border rounded p-2 flex-1"
          placeholder="Food eaten"
          value={food}
          onChange={e => setFood(e.target.value)}
        />
        <input
          className="border rounded p-2 flex-1"
          placeholder="Symptom"
          value={symptom}
          onChange={e => setSymptom(e.target.value)}
        />
        <button className="bg-health-blue text-white px-4 py-2 rounded" onClick={handleAdd}>
          Add Entry
        </button>
      </div>
      <div>
        <h4 className="font-bold mt-4">Today's Entries</h4>
        <ul>
          {entries
            .filter(e => e.date === new Date().toLocaleDateString())
            .map((e, i) => (
              <li key={i} className="border-b py-1">
                <b>Food:</b> {e.food || "-"} | <b>Symptom:</b> {e.symptom || "-"}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
