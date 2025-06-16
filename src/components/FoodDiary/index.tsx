import React from 'react';
import { useFoodDiary } from '../../contexts/FoodDiaryContext';
import { FaPlus, FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FoodDiary: React.FC = () => {
  const {
    state,
    dispatch,
    addEntry,
    removeEntry,
    getTodaysEntries,
    clearCurrentForm,
    toggleInstructions,
  } = useFoodDiary();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!state.entryTime) {
      alert('Please enter a time');
      return;
    }

    const entryData = {
      date: state.selectedDate,
      time: state.entryTime,
      type: state.entryType,
      description: '',
      symptomType: state.symptomType,
      intensity: state.symptomIntensity,
      duration: state.symptomDuration,
      location: state.symptomLocation,
    };

    if (state.entryType === 'food') {
      if (!state.foodDescription.trim()) {
        alert('Please enter food description');
        return;
      }
      entryData.description = state.foodDescription;
    } else if (state.entryType === 'symptom') {
      if (!state.symptomType || !state.symptomDescription.trim()) {
        alert('Please fill in all symptom details');
        return;
      }
      entryData.description = state.symptomDescription;
    } else {
      if (!state.otherDescription.trim()) {
        alert('Please enter a description');
        return;
      }
      entryData.description = state.otherDescription;
    }

    addEntry(entryData);
    clearCurrentForm();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    switch (name) {
      case 'selectedDate':
        dispatch({ type: 'SET_SELECTED_DATE', payload: value });
        break;
      case 'entryTime':
        dispatch({ type: 'SET_ENTRY_TIME', payload: value });
        break;
      case 'entryType':
        dispatch({ type: 'SET_ENTRY_TYPE', payload: value as any });
        break;
      case 'foodDescription':
        dispatch({ type: 'SET_FOOD_DESCRIPTION', payload: value });
        break;
      case 'symptomType':
        dispatch({ type: 'SET_SYMPTOM_TYPE', payload: value });
        break;
      case 'symptomIntensity':
        dispatch({ type: 'SET_SYMPTOM_INTENSITY', payload: Number(value) });
        break;
      case 'symptomDuration':
        dispatch({ type: 'SET_SYMPTOM_DURATION', payload: value });
        break;
      case 'symptomLocation':
        dispatch({ type: 'SET_SYMPTOM_LOCATION', payload: value });
        break;
      case 'symptomDescription':
        dispatch({ type: 'SET_SYMPTOM_DESCRIPTION', payload: value });
        break;
      case 'otherDescription':
        dispatch({ type: 'SET_OTHER_DESCRIPTION', payload: value });
        break;
    }
  };

  const handleRemoveEntry = (id: string) => {
    if (window.confirm('Are you sure you want to remove this entry?')) {
      removeEntry(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Food & Symptom Diary</h1>
            <button
              onClick={toggleInstructions}
              className="text-white hover:text-blue-200 flex items-center"
            >
              {state.showInstructions ? (
                <>
                  <FaChevronUp className="mr-1" /> Hide Instructions
                </>
              ) : (
                <>
                  <FaChevronDown className="mr-1" /> Show Instructions
                </>
              )}
            </button>
          </div>
          
          {state.showInstructions && (
            <div className="mt-4 text-sm bg-blue-700 bg-opacity-30 p-4 rounded">
              <p className="mb-2">Track your food intake, symptoms, and other factors to identify patterns and triggers.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Record everything you eat and drink</li>
                <li>Note any symptoms you experience</li>
                <li>Track other factors like sleep, stress, and exercise</li>
                <li>Look for patterns between food and symptoms</li>
              </ul>
            </div>
          )}
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Date
              </label>
              <input
                type="date"
                name="selectedDate"
                value={state.selectedDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  name="entryTime"
                  value={state.entryTime}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Entry Type
                </label>
                <select
                  name="entryType"
                  value={state.entryType}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="food">Food/Drink</option>
                  <option value="symptom">Symptom</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {state.entryType === 'food' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Food/Drink Details
                </label>
                <textarea
                  name="foodDescription"
                  value={state.foodDescription}
                  onChange={handleInputChange}
                  placeholder="What did you eat or drink? Include portion sizes and any details about preparation."
                  className="w-full p-2 border border-gray-300 rounded h-24"
                  required
                />
              </div>
            )}

            {state.entryType === 'symptom' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Symptom Type
                  </label>
                  <select
                    name="symptomType"
                    value={state.symptomType}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Select a symptom type</option>
                    <option value="digestive">Digestive (bloating, gas, nausea)</option>
                    <option value="headache">Headache/Migraine</option>
                    <option value="fatigue">Fatigue</option>
                    <option value="joint">Joint/Muscle Pain</option>
                    <option value="skin">Skin Issues</option>
                    <option value="mood">Mood Changes</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Intensity: {state.symptomIntensity}/10
                  </label>
                  <input
                    type="range"
                    name="symptomIntensity"
                    min="1"
                    max="10"
                    value={state.symptomIntensity}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <input
                      type="text"
                      name="symptomDuration"
                      value={state.symptomDuration}
                      onChange={handleInputChange}
                      placeholder="e.g., 30 minutes, 2 hours"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      name="symptomLocation"
                      value={state.symptomLocation}
                      onChange={handleInputChange}
                      placeholder="e.g., lower right abdomen"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="symptomDescription"
                    value={state.symptomDescription}
                    onChange={handleInputChange}
                    placeholder="Describe the symptom in detail..."
                    className="w-full p-2 border border-gray-300 rounded h-24"
                    required
                  />
                </div>
              </div>
            )}

            {state.entryType === 'other' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <textarea
                  name="otherDescription"
                  value={state.otherDescription}
                  onChange={handleInputChange}
                  placeholder="Enter any other relevant information (sleep, stress, exercise, etc.)"
                  className="w-full p-2 border border-gray-300 rounded h-24"
                  required
                />
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded flex items-center"
              >
                <FaPlus className="mr-2" />
                Add Entry
              </button>
            </div>
          </form>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Entries for {new Date(state.selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </h2>
            
            {getTodaysEntries().length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No entries for this day. Add your first entry above.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {getTodaysEntries().map(entry => (
                  <div key={entry.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-medium text-gray-900">{entry.time}</span>
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800">
                          {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveEntry(entry.id)}
                        className="text-red-500 hover:text-red-700"
                        title="Remove entry"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    
                    <div className="mt-2">
                      <p className="text-gray-800">{entry.description}</p>
                      
                      {entry.type === 'symptom' && (
                        <div className="mt-2 text-sm text-gray-600 space-y-1">
                          {entry.symptomType && (
                            <p><span className="font-medium">Type:</span> {entry.symptomType}</p>
                          )}
                          {entry.intensity && (
                            <p><span className="font-medium">Intensity:</span> {entry.intensity}/10</p>
                          )}
                          {entry.duration && (
                            <p><span className="font-medium">Duration:</span> {entry.duration}</p>
                          )}
                          {entry.location && (
                            <p><span className="font-medium">Location:</span> {entry.location}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDiary;
