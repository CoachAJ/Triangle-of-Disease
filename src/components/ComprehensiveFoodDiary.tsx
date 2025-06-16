import React, { useState, useEffect } from 'react';
import { 
  FaPlus, 
  FaTrash, 
  FaDownload, 
  FaChevronDown, 
  FaChevronUp, 
  FaUtensils,
  FaExclamationTriangle,
  FaLightbulb,
  FaCalendarDay,
  FaFileImport,
  FaClock,
  FaBan
} from 'react-icons/fa';

interface Entry {
  id: string;
  date: string;
  time: string;
  type: 'food' | 'symptom' | 'other';
  description: string;
  symptomType?: string;
  intensity?: number;
  duration?: string;
  location?: string;
  timestamp: number;
}

const ComprehensiveFoodDiary: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [entryTime, setEntryTime] = useState('');
  const [entryType, setEntryType] = useState<'food' | 'symptom' | 'other'>('food');
  const [showInstructions, setShowInstructions] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  
  // Form fields
  const [foodDescription, setFoodDescription] = useState('');
  const [symptomType, setSymptomType] = useState('');
  const [symptomIntensity, setSymptomIntensity] = useState(5);
  const [symptomDuration, setSymptomDuration] = useState('');
  const [symptomLocation, setSymptomLocation] = useState('');
  const [symptomDescription, setSymptomDescription] = useState('');
  const [otherDescription, setOtherDescription] = useState('');

  // Load entries from localStorage on mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('comprehensiveFoodDiaryEntries');
    if (savedEntries) {
      try {
        setEntries(JSON.parse(savedEntries));
      } catch (error) {
        console.error('Failed to load entries:', error);
      }
    }
  }, []);

  // Save entries to localStorage
  useEffect(() => {
    localStorage.setItem('comprehensiveFoodDiaryEntries', JSON.stringify(entries));
  }, [entries]);

  const getDayOfWeek = (dateString: string) => {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  const addEntry = () => {
    if (!entryTime) {
      alert('Please enter a time');
      return;
    }

    const newEntry: Entry = {
      id: Date.now().toString(),
      date: selectedDate,
      time: entryTime,
      type: entryType,
      description: '',
      timestamp: new Date(`${selectedDate}T${entryTime}`).getTime()
    };

    if (entryType === 'food') {
      if (!foodDescription.trim()) {
        alert('Please enter food description');
        return;
      }
      newEntry.description = foodDescription;
    } else if (entryType === 'symptom') {
      if (!symptomType || !symptomDescription.trim()) {
        alert('Please fill in all symptom details');
        return;
      }
      newEntry.description = symptomDescription;
      newEntry.symptomType = symptomType;
      newEntry.intensity = symptomIntensity;
      newEntry.duration = symptomDuration;
      newEntry.location = symptomLocation;
    } else {
      if (!otherDescription.trim()) {
        alert('Please enter a description');
        return;
      }
      newEntry.description = otherDescription;
    }

    setEntries(prev => [...prev, newEntry].sort((a, b) => a.timestamp - b.timestamp));
    clearForm();
  };

  const clearForm = () => {
    setEntryTime('');
    setFoodDescription('');
    setSymptomType('');
    setSymptomIntensity(5);
    setSymptomDuration('');
    setSymptomLocation('');
    setSymptomDescription('');
    setOtherDescription('');
  };

  const removeEntry = (id: string) => {
    if (window.confirm('Are you sure you want to remove this entry?')) {
      setEntries(prev => prev.filter(entry => entry.id !== id));
    }
  };

  const getTodaysEntries = () => {
    return entries.filter(entry => entry.date === selectedDate);
  };

  const exportToCSV = () => {
    if (entries.length === 0) {
      alert('No data to export');
      return;
    }

    const headers = ['Date', 'Time', 'Day of Week', 'Type', 'Description', 'Symptom Type', 'Intensity', 'Duration', 'Location'];
    const csvContent = [
      headers.join(','),
      ...entries.map(entry => [
        entry.date,
        entry.time,
        getDayOfWeek(entry.date),
        entry.type,
        `"${entry.description.replace(/"/g, '""')}"`,
        entry.symptomType || '',
        entry.intensity || '',
        entry.duration || '',
        entry.location || ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `food-diary-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      setEntries([]);
      localStorage.removeItem('comprehensiveFoodDiaryEntries');
    }
  };

  const loadSampleData = () => {
    const sampleEntries: Entry[] = [
      {
        id: '1',
        date: selectedDate,
        time: '08:00',
        type: 'food',
        description: 'Oatmeal with berries and almond milk',
        timestamp: new Date(`${selectedDate}T08:00`).getTime()
      },
      {
        id: '2',
        date: selectedDate,
        time: '10:30',
        type: 'symptom',
        description: 'Mild bloating and gas',
        symptomType: 'digestive',
        intensity: 4,
        duration: '1 hour',
        location: 'lower abdomen',
        timestamp: new Date(`${selectedDate}T10:30`).getTime()
      },
      {
        id: '3',
        date: selectedDate,
        time: '12:00',
        type: 'food',
        description: 'Grilled chicken salad with mixed greens, tomatoes, cucumber',
        timestamp: new Date(`${selectedDate}T12:00`).getTime()
      }
    ];
    
    setEntries(prev => [...prev, ...sampleEntries].sort((a, b) => a.timestamp - b.timestamp));
  };

  const getSymptomAnalysis = () => {
    const symptoms = entries.filter(entry => entry.type === 'symptom');
    const symptomCounts: { [key: string]: number } = {};
    
    symptoms.forEach(symptom => {
      if (symptom.symptomType) {
        symptomCounts[symptom.symptomType] = (symptomCounts[symptom.symptomType] || 0) + 1;
      }
    });

    return Object.entries(symptomCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
  };

  const getMostCommonFoods = () => {
    const foods = entries.filter(entry => entry.type === 'food');
    const foodWords: { [key: string]: number } = {};
    
    foods.forEach(food => {
      const words = food.description.toLowerCase().split(/\s+/);
      words.forEach(word => {
        if (word.length > 3) { // Only count words longer than 3 characters
          foodWords[word] = (foodWords[word] || 0) + 1;
        }
      });
    });

    return Object.entries(foodWords)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10);
  };

  const getIntensityClasses = (intensity?: number) => {
    if (!intensity) return '';
    if (intensity <= 3) return 'text-green-600';
    if (intensity <= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-health-blue to-blue-sky p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Comprehensive Food & Symptom Diary</h1>
              <p className="text-blue-100">Track your food intake, symptoms, and other factors to identify patterns and triggers</p>
            </div>
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="text-white hover:text-blue-200 flex items-center"
            >
              {showInstructions ? (
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
          
          {showInstructions && (
            <div className="mt-4 text-sm bg-health-blue bg-opacity-30 p-4 rounded">
              <h3 className="font-bold mb-2">How to Use This Tool:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Record everything you eat and drink with specific times</li>
                <li>Log any symptoms you experience, including intensity and duration</li>
                <li>Track other factors like sleep quality, stress levels, and exercise</li>
                <li>Look for patterns between foods and symptoms (typically 2-48 hours later)</li>
                <li>Use the analysis section to identify trends and common triggers</li>
                <li>Export your data to share with healthcare providers</li>
              </ul>
            </div>
          )}
        </div>

        <div className="p-6">
          {/* Date Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              <FaCalendarDay className="inline mr-2 text-health-blue" />
              Select Date - {getDayOfWeek(selectedDate)}
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue focus:border-transparent"
            />
          </div>

          {/* Entry Form */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Entry</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaClock className="inline mr-1" /> Time
                </label>
                <input
                  type="time"
                  value={entryTime}
                  onChange={(e) => setEntryTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Entry Type</label>
                <select
                  value={entryType}
                  onChange={(e) => setEntryType(e.target.value as 'food' | 'symptom' | 'other')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue"
                >
                  <option value="food">🍽️ Food/Drink</option>
                  <option value="symptom">⚠️ Symptom</option>
                  <option value="other">📝 Other Factors</option>
                </select>
              </div>
            </div>

            {/* Dynamic Fields */}
            {entryType === 'food' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaUtensils className="inline mr-1" /> Food/Drink Details
                </label>
                <textarea
                  value={foodDescription}
                  onChange={(e) => setFoodDescription(e.target.value)}
                  placeholder="What did you eat or drink? Include portion sizes, preparation method, and any details..."
                  className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-health-blue"
                  required
                />
              </div>
            )}

            {entryType === 'symptom' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaExclamationTriangle className="inline mr-1" /> Symptom Type
                  </label>
                  <select
                    value={symptomType}
                    onChange={(e) => setSymptomType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue"
                    required
                  >
                    <option value="">Select a symptom type</option>
                    <option value="digestive">🤢 Digestive (bloating, gas, nausea, diarrhea, constipation)</option>
                    <option value="headache">🤕 Headache/Migraine</option>
                    <option value="fatigue">😴 Fatigue/Energy Issues</option>
                    <option value="joint">🦴 Joint/Muscle Pain</option>
                    <option value="skin">🌿 Skin Issues (rash, acne, eczema)</option>
                    <option value="mood">😔 Mood Changes (anxiety, depression, irritability)</option>
                    <option value="sleep">🛏️ Sleep Issues</option>
                    <option value="cognitive">🧠 Brain Fog/Cognitive Issues</option>
                    <option value="respiratory">🫁 Respiratory (congestion, asthma)</option>
                    <option value="other">❓ Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Intensity: <span className={`font-bold ${getIntensityClasses(symptomIntensity)}`}>{symptomIntensity}/10</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={symptomIntensity}
                    onChange={(e) => setSymptomIntensity(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Mild</span>
                    <span>Moderate</span>
                    <span>Severe</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <input
                      type="text"
                      value={symptomDuration}
                      onChange={(e) => setSymptomDuration(e.target.value)}
                      placeholder="e.g., 30 minutes, 2 hours, ongoing"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={symptomLocation}
                      onChange={(e) => setSymptomLocation(e.target.value)}
                      placeholder="e.g., lower right abdomen, temples"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-health-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description</label>
                  <textarea
                    value={symptomDescription}
                    onChange={(e) => setSymptomDescription(e.target.value)}
                    placeholder="Describe the symptom in detail. What does it feel like? What makes it better or worse?"
                    className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-health-blue"
                    required
                  />
                </div>
              </div>
            )}

            {entryType === 'other' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaLightbulb className="inline mr-1" /> Other Factors
                </label>
                <textarea
                  value={otherDescription}
                  onChange={(e) => setOtherDescription(e.target.value)}
                  placeholder="Sleep quality, stress levels, exercise, medications, supplements, menstrual cycle, weather, etc."
                  className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-health-blue"
                  required
                />
              </div>
            )}

            <div className="mt-6">
              <button
                onClick={addEntry}
                className="bg-health-blue hover:bg-blue-sky text-white font-medium py-3 px-6 rounded-lg flex items-center transition-colors"
              >
                <FaPlus className="mr-2" />
                Add Entry
              </button>
            </div>
          </div>

          {/* Today's Entries */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Entries for {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h2>
              <div className="text-sm text-gray-600">
                {getTodaysEntries().length} entries today
              </div>
            </div>
            
            {getTodaysEntries().length === 0 ? (
              <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
                <FaUtensils className="mx-auto text-4xl mb-4 text-gray-300" />
                <p className="text-lg mb-2">No entries for this day</p>
                <p>Add your first entry above to start tracking!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {getTodaysEntries().map(entry => (
                  <div key={entry.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="font-bold text-lg text-gray-900 mr-3">{entry.time}</span>
                          <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                            entry.type === 'food' ? 'bg-green-100 text-green-800' :
                            entry.type === 'symptom' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {entry.type === 'food' ? '🍽️ Food' : 
                             entry.type === 'symptom' ? '⚠️ Symptom' : '📝 Other'}
                          </span>
                        </div>
                        
                        <p className="text-gray-800 mb-2">{entry.description}</p>
                        
                        {entry.type === 'symptom' && (
                          <div className="text-sm text-gray-600 space-y-1 bg-gray-50 p-3 rounded">
                            {entry.symptomType && (
                              <p><span className="font-medium">Type:</span> {entry.symptomType}</p>
                            )}
                            {entry.intensity && (
                              <p>
                                <span className="font-medium">Intensity:</span> 
                                <span className={`ml-1 font-bold ${getIntensityClasses(entry.intensity)}`}>
                                  {entry.intensity}/10
                                </span>
                              </p>
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
                      <button
                        onClick={() => removeEntry(entry.id)}
                        className="text-red-500 hover:text-red-700 p-2 ml-4"
                        title="Remove entry"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Analysis Section */}
          {entries.length > 0 && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Data Analysis</h2>
                <button
                  onClick={() => setShowAnalysis(!showAnalysis)}
                  className="text-health-blue hover:text-blue-sky flex items-center"
                >
                  {showAnalysis ? (
                    <>
                      <FaChevronUp className="mr-1" /> Hide Analysis
                    </>
                  ) : (
                    <>
                      <FaChevronDown className="mr-1" /> Show Analysis
                    </>
                  )}
                </button>
              </div>

              {showAnalysis && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Most Common Symptoms */}
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h3 className="text-lg font-bold text-red-800 mb-3">Most Common Symptoms</h3>
                    {getSymptomAnalysis().length > 0 ? (
                      <ul className="space-y-2">
                        {getSymptomAnalysis().map(([symptom, count]) => (
                          <li key={symptom} className="flex justify-between">
                            <span className="capitalize">{symptom}</span>
                            <span className="font-bold text-red-600">{count} times</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-red-600">No symptoms recorded yet</p>
                    )}
                  </div>

                  {/* Most Common Foods */}
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="text-lg font-bold text-green-800 mb-3">Most Common Foods</h3>
                    {getMostCommonFoods().length > 0 ? (
                      <ul className="space-y-1">
                        {getMostCommonFoods().slice(0, 5).map(([food, count]) => (
                          <li key={food} className="flex justify-between text-sm">
                            <span className="capitalize">{food}</span>
                            <span className="font-bold text-green-600">{count}x</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-green-600">No food entries yet</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="bg-gray-50 border-t border-gray-200 p-6 -mx-6 -mb-6 rounded-b-lg">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="text-sm text-gray-600">
                <strong>{entries.length}</strong> total entries
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={loadSampleData}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FaFileImport className="mr-2" />
                  Load Sample Data
                </button>
                
                <button
                  onClick={exportToCSV}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  disabled={entries.length === 0}
                >
                  <FaDownload className="mr-2" />
                  Export CSV
                </button>
                
                <button
                  onClick={clearAllData}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  disabled={entries.length === 0}
                >
                  <FaBan className="mr-2" />
                  Clear All Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveFoodDiary;
