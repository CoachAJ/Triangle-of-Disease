import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SymptomChecker from '../components/SymptomChecker'
import BMICalculator from '../components/BMICalculator'
import FoodDiaryTool from '../components/FoodDiaryTool'

const AssessmentToolsPage = () => {
  return (
    <>
      <Helmet>
        <title>Assessment Tools - Triangle of Disease</title>
        <meta name="description" content="Interactive tools to help you assess your health in relation to the Triangle of Disease. Use our symptom checker, BMI calculator, and food diary to identify potential health patterns." />
      </Helmet>

      <HeroSection
        title="Assessment Tools"
        subtitle="Identify Your Health Patterns"
        description="Interactive tools to help you assess your health in relation to the Triangle of Disease. These assessments can help you identify which points of the Triangle might need the most attention."
        backgroundImage="/assets/assessment-tools-hero-bg.jpg"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-health-blue mb-6">Understanding Your Health</h2>
            <p className="text-lg mb-6">
              Self-assessment is an important first step in addressing the Triangle of Disease. The tools on this page can help you identify patterns in your health and potential areas to focus on.
            </p>
            <p className="mb-6">
              While these tools provide valuable insights, they are not intended to replace professional medical advice. Use them as a starting point for understanding your health in relation to the Triangle of Disease concept.
            </p>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 text-left">
              <h3 className="text-xl font-proxima font-bold mb-3 text-center">How to Use These Tools</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Be honest</strong> with your responses for the most accurate results</li>
                <li><strong>Start with the Symptom Checker</strong> to see which points of the Triangle might be most affected</li>
                <li><strong>Use the Food Diary</strong> to track potential food triggers and patterns</li>
                <li><strong>Calculate your BMI</strong> as one metric of metabolic health</li>
                <li><strong>Take notes</strong> on your results to discuss with your health practitioner</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Checker Section */}
      <section className="py-16 bg-gray-50" id="symptom-checker">
        <div className="container-custom">
          <div className="section-title">
            <h2>Symptom Checker</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg mb-8">
              Select the symptoms you're experiencing to see which points of the Triangle might be affected. This can help you prioritize your approach to addressing health challenges.
            </p>
            <SymptomChecker />
          </div>
        </div>
      </section>

      {/* Food Diary Section */}
      <section className="py-16 bg-white" id="food-diary">
        <div className="container-custom">
          <div className="section-title">
            <h2>Food Diary Tool</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg mb-8">
              Track your food intake and any symptoms that follow to identify potential trigger foods. This is especially helpful for addressing Point One of the Triangle (Digestive System).
            </p>
            <FoodDiaryTool />
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-16 bg-gray-50" id="bmi-calculator">
        <div className="container-custom">
          <div className="section-title">
            <h2>BMI Calculator</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg mb-8">
              Calculate your Body Mass Index (BMI) as one indicator of metabolic health. Weight issues often relate to all three points of the Triangle, particularly blood sugar balance.
            </p>
            <BMICalculator />
          </div>
        </div>
      </section>

      {/* Additional Assessments Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>Additional Assessment Resources</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg mb-8">
              For a more comprehensive assessment, consider these additional resources that can provide deeper insights into your health in relation to the Triangle of Disease.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-proxima font-bold mb-4 text-health-blue">Comprehensive Questionnaires</h3>
                <p className="mb-4">
                  More detailed health questionnaires are available in our resources section, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Digestive Health Assessment</li>
                  <li>Blood Sugar Balance Questionnaire</li>
                  <li>Adrenal Function Self-Test</li>
                  <li>Thyroid Symptom Evaluation</li>
                </ul>
                <Link 
                  to="/resources" 
                  className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                >
                  View questionnaires in Resources →
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-proxima font-bold mb-4 text-health-blue">Working with Health Professionals</h3>
                <p className="mb-4">
                  For the most comprehensive assessment, consider working with healthcare professionals who can provide:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Functional lab testing</li>
                  <li>Microbiome analysis</li>
                  <li>Food sensitivity testing</li>
                  <li>Comprehensive thyroid panels</li>
                  <li>Adrenal stress index testing</li>
                  <li>Metabolic testing</li>
                </ul>
                <p className="text-sm text-gray-600 italic">
                  The results from these assessments can be interpreted in the context of the Triangle of Disease to create a personalized healing protocol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-health-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Take the Next Step?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Now that you've assessed your health patterns, explore our comprehensive strategies for addressing all three points of the Triangle of Disease.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/health-strategies" 
                className="btn bg-white text-health-blue hover:bg-tangy-yellow hover:text-gray-800"
              >
                View Health Strategies
              </Link>
              <Link 
                to="/resources" 
                className="btn bg-glorious-sunset text-white hover:bg-tangy-yellow hover:text-gray-800"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AssessmentToolsPage
