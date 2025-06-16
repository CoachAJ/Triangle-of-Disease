import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DigestiveSystemPage from './pages/DigestiveSystemPage'
import BloodSugarPage from './pages/BloodSugarPage'
import AdrenalThyroidPage from './pages/AdrenalThyroidPage'
import HealthStrategiesPage from './pages/HealthStrategiesPage'
import ResourcesPage from './pages/ResourcesPage'
import HealthCoachesPage from './pages/HealthCoachesPage'
import AssessmentToolsPage from './pages/AssessmentToolsPage'
import FoodDiaryPage from './pages/FoodDiaryPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="digestive-system" element={<DigestiveSystemPage />} />
        <Route path="blood-sugar" element={<BloodSugarPage />} />
        <Route path="adrenal-thyroid" element={<AdrenalThyroidPage />} />
        <Route path="health-strategies" element={<HealthStrategiesPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="health-coaches" element={<HealthCoachesPage />} />
        <Route path="assessment-tools" element={<AssessmentToolsPage />} />
        <Route path="food-diary" element={<FoodDiaryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
