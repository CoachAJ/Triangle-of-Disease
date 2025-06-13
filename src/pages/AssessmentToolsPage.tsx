import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

// Define the questions for each assessment
const digestiveQuestions = [
  "Do you experience bloating after meals?",
  "Do you have irregular bowel movements (constipation, diarrhea, or alternating)?",
  "Do you experience heartburn or acid reflux?",
  "Do you have food sensitivities or intolerances?",
  "Do you experience abdominal pain or discomfort?",
  "Do certain foods cause digestive upset?",
  "Do you have a history of antibiotic use?",
  "Do you have skin issues like eczema, acne, or rashes?",
  "Do you experience bad breath despite good oral hygiene?",
  "Do you feel excessively full after small meals?"
]

const bloodSugarQuestions = [
  "Do you feel tired after meals, especially carbohydrate-rich ones?",
  "Do you experience energy crashes in the afternoon?",
  "Do you crave sweets or carbohydrates?",
  "Do you feel irritable or shaky when hungry?",
  "Do you wake up during the night?",
  "Do you have difficulty losing weight, especially around your abdomen?",
  "Do you feel anxious or jittery after consuming caffeine?",
  "Do you get lightheaded if meals are delayed?",
  "Do you feel the need to eat every 2-3 hours?",
  "Do you have difficulty concentrating or brain fog?"
]

const adrenalThyroidQuestions = [
  "Do you feel tired even after a full night's sleep?",
  "Do you have cold hands and feet?",
  "Do you have difficulty handling stress?",
  "Do you experience hair loss or thinning?",
  "Do you have difficulty losing weight despite efforts?",
  "Do you feel 'wired but tired'?",
  "Do you have salt cravings?",
  "Do you experience dizziness when standing up quickly?",
  "Do you have dry skin or brittle nails?",
  "Do you feel more energetic in the evening than morning?"
]

const AssessmentToolsPage = () => {
  const [activeAssessment, setActiveAssessment] = useState('')
  const [answers, setAnswers] = useState<{ [key: string]: boolean }>({})
  const [showResults, setShowResults] = useState(false)

  // Function to handle starting a specific assessment
  const startAssessment = (assessmentType: string) => {
    setActiveAssessment(assessmentType)
    setAnswers({})
    setShowResults(false)
  }

  // Function to handle answer changes
  const handleAnswerChange = (questionIndex: number, value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [`${activeAssessment}-${questionIndex}`]: value
    }))
  }

  // Function to calculate results
  const calculateResults = () => {
    let count = 0
    const questions = activeAssessment === 'digestive' 
      ? digestiveQuestions 
      : activeAssessment === 'bloodSugar' 
        ? bloodSugarQuestions 
        : adrenalThyroidQuestions

    for (let i = 0; i < questions.length; i++) {
      if (answers[`${activeAssessment}-${i}`] === true) {
        count++
      }
    }

    return {
      score: count,
      totalQuestions: questions.length,
      percentage: Math.round((count / questions.length) * 100)
    }
  }

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  // Determine which questions to display based on active assessment
  const getQuestionsForActiveAssessment = () => {
    switch (activeAssessment) {
      case 'digestive':
        return digestiveQuestions
      case 'bloodSugar':
        return bloodSugarQuestions
      case 'adrenalThyroid':
        return adrenalThyroidQuestions
      default:
        return []
    }
  }

  // Get appropriate title and color based on active assessment
  const getAssessmentTitle = () => {
    switch (activeAssessment) {
      case 'digestive':
        return { title: 'Digestive System Assessment', color: 'text-health-blue', bgColor: 'bg-health-blue' }
      case 'bloodSugar':
        return { title: 'Blood Sugar Assessment', color: 'text-blue-sky', bgColor: 'bg-blue-sky' }
      case 'adrenalThyroid':
        return { title: 'Adrenal-Thyroid Assessment', color: 'text-glorious-sunset', bgColor: 'bg-glorious-sunset' }
      default:
        return { title: '', color: '', bgColor: '' }
    }
  }

  // Render results section
  const renderResults = () => {
    const results = calculateResults()
    const { title, color } = getAssessmentTitle()
    
    let message = ''
    let link = ''
    
    if (results.percentage < 30) {
      message = "Your results suggest this area may not be a primary concern. However, it's still important to support this system as part of your overall health."
    } else if (results.percentage < 70) {
      message = "Your results suggest this area may need some attention. Consider implementing some of the strategies mentioned below to support this system."
    } else {
      message = "Your results suggest this area needs significant attention. This point of the Triangle of Disease may be a priority for you to address."
    }
    
    switch (activeAssessment) {
      case 'digestive':
        link = '/digestive-system'
        break
      case 'bloodSugar':
        link = '/blood-sugar'
        break
      case 'adrenalThyroid':
        link = '/adrenal-thyroid'
        break
    }

    return (
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg mt-8">
        <h3 className={`text-2xl font-bold mb-4 ${color}`}>{title} Results</h3>
        <div className="flex items-center mb-6">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className={`${getAssessmentTitle().bgColor} h-4 rounded-full`} 
              style={{ width: `${results.percentage}%` }}
            ></div>
          </div>
          <span className="ml-4 font-bold">{results.percentage}%</span>
        </div>
        <p className="mb-4 text-lg">
          You answered "Yes" to {results.score} out of {results.totalQuestions} questions.
        </p>
        <p className="mb-6 text-lg">
          {message}
        </p>
        <div className="flex justify-between flex-wrap">
          <button 
            onClick={() => setShowResults(false)} 
            className="btn bg-gray-600 hover:bg-gray-700 mb-4 md:mb-0"
          >
            Retake Assessment
          </button>
          <a href={link} className={`btn ${getAssessmentTitle().bgColor}`}>
            Learn More About This Triangle Point
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Assessment Tools - Triangle of Disease | Daily with Doc & Becca</title>
        <meta name="description" content="Self-assessment tools to help you identify which points of the Triangle of Disease may need attention." />
        <meta property="og:title" content="Assessment Tools - Triangle of Disease | Daily with Doc & Becca" />
        <meta property="og:description" content="Self-assessment tools to help you identify which points of the Triangle of Disease may need attention." />
        <meta property="og:image" content="/assets/assessment-tools.jpg" />
        <meta property="og:url" content="https://triangleofdisease.netlify.app/assessment-tools" />
        <link rel="canonical" href="https://triangleofdisease.netlify.app/assessment-tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-health-blue via-blue-sky to-glorious-sunset text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Assessment Tools</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Identify which points of your Triangle of Disease may need attention with these self-assessment questionnaires.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!activeAssessment ? (
              <>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Self-Assessment Questionnaires</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    These questionnaires are designed to help you identify which points of your Triangle of Disease may need the most attention. 
                    Select an assessment to begin.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Digestive System Assessment */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-health-blue text-white p-6 text-center">
                      <h3 className="text-xl font-bold">Digestive System</h3>
                      <p className="mt-2">Point 1 of the Triangle</p>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">
                        Assess your digestive health, including gut function, microbiome balance, and intestinal barrier integrity.
                      </p>
                      <button 
                        onClick={() => startAssessment('digestive')} 
                        className="btn bg-health-blue hover:bg-blue-700 w-full"
                      >
                        Start Assessment
                      </button>
                    </div>
                  </div>

                  {/* Blood Sugar Assessment */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-blue-sky text-white p-6 text-center">
                      <h3 className="text-xl font-bold">Blood Sugar</h3>
                      <p className="mt-2">Point 2 of the Triangle</p>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">
                        Evaluate your blood sugar regulation, insulin sensitivity, and glycemic control.
                      </p>
                      <button 
                        onClick={() => startAssessment('bloodSugar')} 
                        className="btn bg-blue-sky hover:bg-blue-500 w-full"
                      >
                        Start Assessment
                      </button>
                    </div>
                  </div>

                  {/* Adrenal-Thyroid Assessment */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-glorious-sunset text-white p-6 text-center">
                      <h3 className="text-xl font-bold">Adrenal-Thyroid</h3>
                      <p className="mt-2">Point 3 of the Triangle</p>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">
                        Assess your stress response system, thyroid function, and hormonal balance.
                      </p>
                      <button 
                        onClick={() => startAssessment('adrenalThyroid')} 
                        className="btn bg-glorious-sunset hover:bg-orange-500 w-full"
                      >
                        Start Assessment
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg mt-16">
                  <h3 className="text-xl font-bold mb-4 text-health-blue">Disclaimer</h3>
                  <p className="text-gray-700">
                    These self-assessments are educational tools designed to help you identify potential areas of concern. They are not diagnostic tools and should not replace professional medical advice. If you have health concerns, please consult with a qualified healthcare provider.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <button 
                  onClick={() => setActiveAssessment('')} 
                  className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Assessment Selection
                </button>

                <div className={`p-8 rounded-lg shadow-lg border-t-4 border-${activeAssessment === 'digestive' ? 'health-blue' : activeAssessment === 'bloodSugar' ? 'blue-sky' : 'glorious-sunset'}`}>
                  <h2 className={`text-2xl font-bold mb-6 ${getAssessmentTitle().color}`}>
                    {getAssessmentTitle().title}
                  </h2>
                  
                  {!showResults ? (
                    <form onSubmit={handleSubmit}>
                      <p className="mb-6 text-gray-600">
                        Answer each question with "Yes" or "No" based on your experiences over the past 3 months.
                      </p>
                      
                      <div className="space-y-6 mb-8">
                        {getQuestionsForActiveAssessment().map((question, index) => (
                          <div key={index} className="p-4 bg-gray-50 rounded-lg">
                            <p className="font-medium mb-3">{question}</p>
                            <div className="flex space-x-4">
                              <label className="flex items-center cursor-pointer">
                                <input
                                  type="radio"
                                  name={`question-${index}`}
                                  value="yes"
                                  onChange={() => handleAnswerChange(index, true)}
                                  checked={answers[`${activeAssessment}-${index}`] === true}
                                  className="mr-2"
                                  required
                                />
                                Yes
                              </label>
                              <label className="flex items-center cursor-pointer">
                                <input
                                  type="radio"
                                  name={`question-${index}`}
                                  value="no"
                                  onChange={() => handleAnswerChange(index, false)}
                                  checked={answers[`${activeAssessment}-${index}`] === false}
                                  className="mr-2"
                                />
                                No
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        type="submit" 
                        className={`btn ${getAssessmentTitle().bgColor} w-full md:w-auto`}
                      >
                        View Results
                      </button>
                    </form>
                  ) : (
                    renderResults()
                  )}
                </div>
              </div>
            )}

            {/* Schema.org structured data for SEO */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "MedicalWebPage",
                  "name": "Assessment Tools - Triangle of Disease",
                  "description": "Self-assessment tools to help you identify which points of the Triangle of Disease may need attention.",
                  "url": "https://triangleofdisease.netlify.app/assessment-tools",
                  "author": {
                    "@type": "Organization",
                    "name": "Daily with Doc & Becca"
                  }
                }
              `}
            </script>
          </div>
        </div>
      </section>
    </>
  )
}

export default AssessmentToolsPage
