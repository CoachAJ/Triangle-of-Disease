import { useState } from 'react'
import { FaPlus, FaTrash, FaDownload, FaSave, FaPrint } from 'react-icons/fa'

interface FoodEntry {
  id: string
  time: string
  food: string
  symptoms: string
  notes: string
}

const FoodDiaryTool = () => {
  const [entries, setEntries] = useState<FoodEntry[]>([])
  const [time, setTime] = useState('')
  const [food, setFood] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [notes, setNotes] = useState('')
  
  const addEntry = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!time || !food) return
    
    const newEntry: FoodEntry = {
      id: Date.now().toString(),
      time,
      food,
      symptoms,
      notes
    }
    
    setEntries([...entries, newEntry])
    resetForm()
  }
  
  const deleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }
  
  const resetForm = () => {
    setTime('')
    setFood('')
    setSymptoms('')
    setNotes('')
  }
  
  const downloadDiary = () => {
    // Format the diary data
    const diaryText = [
      'FOOD DIARY - Triangle of Disease',
      'Date: ' + new Date().toLocaleDateString(),
      '',
      'TIME | FOOD | SYMPTOMS | NOTES',
      ...entries.map(entry => 
        `${entry.time} | ${entry.food} | ${entry.symptoms} | ${entry.notes}`
      )
    ].join('\n')
    
    // Create a download link
    const element = document.createElement('a')
    const file = new Blob([diaryText], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = `food-diary-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }
  
  const printDiary = () => {
    window.print()
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-health-blue text-white px-6 py-4">
        <h3 className="text-xl font-proxima font-bold">Food Diary Tool</h3>
        <p className="text-blue-100">Track your food intake and symptoms to identify potential triggers</p>
      </div>
      
      <div className="p-6">
        <form onSubmit={addEntry} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="time" className="block text-gray-700 mb-2">
                Time
              </label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-health-blue"
                required
              />
            </div>
            
            <div>
              <label htmlFor="food" className="block text-gray-700 mb-2">
                Food & Drink Consumed
              </label>
              <input
                type="text"
                id="food"
                value={food}
                onChange={(e) => setFood(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-health-blue"
                placeholder="e.g., Eggs, toast, coffee"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="symptoms" className="block text-gray-700 mb-2">
              Symptoms (if any)
            </label>
            <input
              type="text"
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-health-blue"
              placeholder="e.g., Bloating, headache, fatigue"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="notes" className="block text-gray-700 mb-2">
              Notes
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-health-blue"
              placeholder="e.g., Hungry again after 2 hours, craved sugar"
              rows={2}
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-glorious-sunset text-white hover:bg-tangy-yellow hover:text-gray-800 flex items-center"
            >
              <FaPlus className="mr-2" /> Add Entry
            </button>
          </div>
        </form>
        
        {entries.length > 0 ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold">Your Food Diary</h4>
              <div className="flex space-x-2">
                <button
                  onClick={downloadDiary}
                  className="p-2 text-health-blue hover:text-blue-sky transition-colors"
                  title="Download as Text File"
                >
                  <FaDownload />
                </button>
                <button
                  onClick={printDiary}
                  className="p-2 text-health-blue hover:text-blue-sky transition-colors"
                  title="Print Diary"
                >
                  <FaPrint />
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-2 px-4 text-left">Time</th>
                    <th className="py-2 px-4 text-left">Food & Drink</th>
                    <th className="py-2 px-4 text-left">Symptoms</th>
                    <th className="py-2 px-4 text-left">Notes</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map(entry => (
                    <tr key={entry.id} className="border-b border-gray-200">
                      <td className="py-3 px-4">{entry.time}</td>
                      <td className="py-3 px-4">{entry.food}</td>
                      <td className="py-3 px-4">{entry.symptoms || "-"}</td>
                      <td className="py-3 px-4">{entry.notes || "-"}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          title="Delete Entry"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No entries yet. Add your first food item above.</p>
          </div>
        )}
        
        <div className="mt-8 bg-blue-50 p-4 rounded-lg border-l-4 border-health-blue">
          <h5 className="font-semibold mb-2">How to Use Your Food Diary:</h5>
          <ol className="list-decimal ml-5 space-y-1 text-gray-700">
            <li>Record everything you eat and drink for at least 7 days</li>
            <li>Note any symptoms that appear within 24-48 hours after eating</li>
            <li>Look for patterns between specific foods and symptoms</li>
            <li>Consider an elimination diet for suspect foods</li>
            <li>Discuss your findings with your health coach or practitioner</li>
          </ol>
          <p className="mt-3 text-sm text-gray-600">
            Remember: The digestive system is Point 1 of the Triangle of Disease. Identifying and eliminating problem foods
            is a powerful first step in addressing the root causes of many health issues.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FoodDiaryTool
