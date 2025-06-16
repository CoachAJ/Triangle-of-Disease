import React from 'react';
import { FoodDiaryProvider } from '../contexts/FoodDiaryContext';
import { Helmet } from 'react-helmet-async'
import ComprehensiveFoodDiary from '../components/ComprehensiveFoodDiary';

const FoodDiaryPage: React.FC = () => {
  return (
    <FoodDiaryProvider>
      <Helmet>
        <title>Food Diary - Triangle of Disease</title>
        <meta name="description" content="Track your food intake, symptoms, and other factors to identify patterns and triggers related to the Triangle of Disease." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComprehensiveFoodDiary />
        </div>
      </div>
    </FoodDiaryProvider>
  );
};

export default FoodDiaryPage;
