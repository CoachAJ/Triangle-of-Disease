import { useState } from 'react'

type Unit = 'metric' | 'imperial'

const BMICalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState<Unit>('imperial')
  const [bmi, setBmi] = useState<number | null>(null)
  
  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!height || !weight) return
    
    let bmiValue: number
    
    if (unit === 'metric') {
      // Height in cm, weight in kg
      const heightInMeters = parseFloat(height) / 100
      bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters)
    } else {
      // Height in inches, weight in pounds
      bmiValue = (parseFloat(weight) * 703) / (parseFloat(height) * parseFloat(height))
    }
    
    setBmi(parseFloat(bmiValue.toFixed(1)))
  }
  
  const getBMICategory = (bmi: number): { category: string; color: string } => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-500' }
    if (bmi < 25) return { category: 'Normal weight', color: 'text-green-500' }
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-500' }
    if (bmi < 35) return { category: 'Obesity Class I', color: 'text-orange-500' }
    if (bmi < 40) return { category: 'Obesity Class II', color: 'text-red-500' }
    return { category: 'Obesity Class III', color: 'text-red-700' }
  }

  const resetCalculator = () => {
    setHeight('')
    setWeight('')
    setBmi(null)
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-health-blue text-white px-6 py-4">
        <h3 className="text-xl font-proxima font-bold">BMI Calculator</h3>
        <p className="text-blue-100">Calculate your Body Mass Index (BMI)</p>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button
              type="button"
              className={`flex-1 py-2 px-4 text-center ${
                unit === 'imperial'
                  ? 'bg-health-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setUnit('imperial')}
            >
              Imperial (lb/in)
            </button>
            <button
              type="button"
              className={`flex-1 py-2 px-4 text-center ${
                unit === 'metric'
                  ? 'bg-health-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setUnit('metric')}
            >
              Metric (kg/cm)
            </button>
          </div>
        </div>
        
        <form onSubmit={calculateBMI}>
          <div className="mb-4">
            <label htmlFor="height" className="block text-gray-700 mb-2">
              Height {unit === 'imperial' ? '(inches)' : '(cm)'}
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-health-blue"
              placeholder={unit === 'imperial' ? 'e.g., 68' : 'e.g., 173'}
              required
              min="1"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="weight" className="block text-gray-700 mb-2">
              Weight {unit === 'imperial' ? '(pounds)' : '(kg)'}
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-health-blue"
              placeholder={unit === 'imperial' ? 'e.g., 160' : 'e.g., 72'}
              required
              min="1"
            />
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="btn bg-glorious-sunset text-white hover:bg-tangy-yellow hover:text-gray-800"
            >
              Calculate BMI
            </button>
            <button
              type="button"
              onClick={resetCalculator}
              className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Reset
            </button>
          </div>
        </form>
        
        {bmi !== null && (
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Your BMI Results</h4>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{bmi}</div>
              <div className={`text-xl font-semibold ${getBMICategory(bmi).color}`}>
                {getBMICategory(bmi).category}
              </div>
            </div>
            
            <div className="mt-4">
              <div className="h-6 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-red-700 relative">
                  <div 
                    className="absolute h-full w-1 bg-black"
                    style={{ 
                      left: `${Math.min(Math.max((bmi / 50) * 100, 0), 100)}%`,
                      transform: 'translateX(-50%)'
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>15</span>
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
                <span>35</span>
                <span>40+</span>
              </div>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded border border-gray-200">
              <h5 className="font-semibold mb-2">Health Insights:</h5>
              <p className="text-sm text-gray-700 mb-2">
                BMI is a screening tool but doesn't diagnose body fatness or health.
                The Triangle of Disease approach recognizes that weight issues often relate to:
              </p>
              <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
                <li>Blood sugar imbalances (Point 2)</li>
                <li>Hormonal regulation issues (Point 3)</li>
                <li>Digestive health affecting nutrient absorption (Point 1)</li>
              </ul>
              <p className="text-sm mt-3 text-gray-700">
                For a holistic approach to weight management, explore all three points of the Triangle.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BMICalculator
