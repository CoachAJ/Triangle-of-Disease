import { useState } from 'react'
import { Link } from 'react-router-dom'

type SymptomCategory = 'digestive' | 'bloodSugar' | 'adrenalThyroid' | 'general'

interface Symptom {
  id: string
  text: string
  categories: SymptomCategory[]
}

const symptoms: Symptom[] = [
  { id: 'bloating', text: 'Bloating', categories: ['digestive'] },
  { id: 'constipation', text: 'Constipation', categories: ['digestive'] },
  { id: 'diarrhea', text: 'Diarrhea', categories: ['digestive'] },
  { id: 'heartburn', text: 'Heartburn or Acid Reflux', categories: ['digestive'] },
  { id: 'ibs', text: 'IBS Symptoms', categories: ['digestive'] },
  { id: 'foodSensitivities', text: 'Food Sensitivities', categories: ['digestive'] },
  
  { id: 'fatigue', text: 'Fatigue/Low Energy', categories: ['bloodSugar', 'adrenalThyroid', 'general'] },
  { id: 'weightGain', text: 'Weight Gain/Difficulty Losing Weight', categories: ['bloodSugar', 'adrenalThyroid'] },
  { id: 'cravings', text: 'Sugar/Carb Cravings', categories: ['bloodSugar'] },
  { id: 'brainFog', text: 'Brain Fog', categories: ['bloodSugar', 'digestive'] },
  { id: 'thirst', text: 'Excessive Thirst', categories: ['bloodSugar'] },
  { id: 'urination', text: 'Frequent Urination', categories: ['bloodSugar'] },
  
  { id: 'coldHands', text: 'Cold Hands and Feet', categories: ['adrenalThyroid'] },
  { id: 'hairLoss', text: 'Hair Loss', categories: ['adrenalThyroid'] },
  { id: 'drySkin', text: 'Dry Skin', categories: ['adrenalThyroid'] },
  { id: 'anxiety', text: 'Anxiety/Nervousness', categories: ['adrenalThyroid', 'bloodSugar'] },
  { id: 'insomnia', text: 'Insomnia/Sleep Issues', categories: ['adrenalThyroid', 'bloodSugar'] },
  { id: 'depression', text: 'Depression', categories: ['adrenalThyroid', 'digestive'] },
  
  { id: 'inflammation', text: 'Joint Pain/Inflammation', categories: ['general', 'digestive'] },
  { id: 'headaches', text: 'Headaches', categories: ['general', 'bloodSugar'] },
  { id: 'skinIssues', text: 'Skin Issues (Acne, Eczema, Psoriasis)', categories: ['general', 'digestive'] },
  { id: 'allergies', text: 'Allergies', categories: ['general', 'digestive'] },
  { id: 'autoimmune', text: 'Autoimmune Symptoms', categories: ['general', 'digestive'] },
]

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    )
    setShowResults(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
    // Scroll to results
    setTimeout(() => {
      document.getElementById('symptom-results')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  // Calculate which points of the triangle are most affected
  const getResults = () => {
    if (selectedSymptoms.length === 0) return null

    // Count symptoms by category
    const categoryCounts = {
      digestive: 0,
      bloodSugar: 0,
      adrenalThyroid: 0,
      general: 0
    }

    // For each selected symptom, increment the count for each of its categories
    selectedSymptoms.forEach(symptomId => {
      const symptom = symptoms.find(s => s.id === symptomId)
      if (symptom) {
        symptom.categories.forEach(category => {
          categoryCounts[category]++
        })
      }
    })

    // Find the highest category (excluding general)
    const sortedCategories = [
      { name: 'digestive', count: categoryCounts.digestive, label: 'Digestive System', path: '/digestive-system' },
      { name: 'bloodSugar', count: categoryCounts.bloodSugar, label: 'Blood Sugar System', path: '/blood-sugar' },
      { name: 'adrenalThyroid', count: categoryCounts.adrenalThyroid, label: 'Adrenal-Thyroid Complex', path: '/adrenal-thyroid' }
    ].sort((a, b) => b.count - a.count)

    return sortedCategories
  }

  const results = showResults ? getResults() : null

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-health-blue text-white px-6 py-4">
        <h3 className="text-xl font-proxima font-bold">Symptom Checker</h3>
        <p className="text-blue-100">Select the symptoms you're experiencing to see which points of the Triangle might be affected.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {symptoms.map(symptom => (
            <div 
              key={symptom.id}
              className="flex items-center"
            >
              <input
                type="checkbox"
                id={`symptom-${symptom.id}`}
                checked={selectedSymptoms.includes(symptom.id)}
                onChange={() => handleSymptomToggle(symptom.id)}
                className="w-5 h-5 text-health-blue rounded border-gray-300 focus:ring-health-blue"
              />
              <label 
                htmlFor={`symptom-${symptom.id}`}
                className="ml-2 text-gray-700 cursor-pointer"
              >
                {symptom.text}
              </label>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={selectedSymptoms.length === 0}
            className={`btn ${
              selectedSymptoms.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-glorious-sunset text-white hover:bg-tangy-yellow hover:text-gray-800'
            }`}
          >
            Analyze My Symptoms
          </button>
        </div>
      </form>
      
      {showResults && results && (
        <div id="symptom-results" className="px-6 pb-6">
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold mb-3">Your Results:</h4>
            
            <p className="mb-4">
              Based on your symptoms, the following points of the Triangle of Disease may be affected:
            </p>
            
            <div className="space-y-4">
              {results.map((category, index) => (
                category.count > 0 && (
                  <div 
                    key={category.name}
                    className={`p-4 rounded-lg ${
                      index === 0 
                        ? 'bg-blue-50 border-l-4 border-health-blue' 
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className={`font-semibold ${index === 0 ? 'text-health-blue' : 'text-gray-700'}`}>
                          {index === 0 && '🔍 '}
                          {category.label}
                          {index === 0 && ' (Primary Focus)'}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {category.count} related {category.count === 1 ? 'symptom' : 'symptoms'}
                        </p>
                      </div>
                      <Link 
                        to={category.path}
                        className="btn py-2 px-4 bg-health-blue text-white hover:bg-blue-sky"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                )
              ))}
            </div>
            
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-tangy-yellow">
              <p className="text-gray-700">
                <strong>Note:</strong> This tool provides general guidance based on common symptom patterns. 
                For a comprehensive approach, consider exploring all three points of the Triangle of Disease 
                and consulting with a healthcare professional.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SymptomChecker
