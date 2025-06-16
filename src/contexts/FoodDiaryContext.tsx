import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { FoodDiaryState, FoodEntry, EntryType } from '../types/foodDiary';

type FoodDiaryAction =
  | { type: 'ADD_ENTRY'; payload: FoodEntry }
  | { type: 'REMOVE_ENTRY'; payload: string }
  | { type: 'SET_SELECTED_DATE'; payload: string }
  | { type: 'SET_ENTRY_TIME'; payload: string }
  | { type: 'SET_ENTRY_TYPE'; payload: EntryType }
  | { type: 'SET_FOOD_DESCRIPTION'; payload: string }
  | { type: 'SET_SYMPTOM_TYPE'; payload: string }
  | { type: 'SET_SYMPTOM_INTENSITY'; payload: number }
  | { type: 'SET_SYMPTOM_DURATION'; payload: string }
  | { type: 'SET_SYMPTOM_LOCATION'; payload: string }
  | { type: 'SET_SYMPTOM_DESCRIPTION'; payload: string }
  | { type: 'SET_OTHER_DESCRIPTION'; payload: string }
  | { type: 'TOGGLE_INSTRUCTIONS' };

const initialState: FoodDiaryState = {
  entries: [],
  selectedDate: new Date().toISOString().split('T')[0],
  entryTime: '',
  entryType: 'food',
  foodDescription: '',
  symptomType: '',
  symptomIntensity: 5,
  symptomDuration: '',
  symptomLocation: '',
  symptomDescription: '',
  otherDescription: '',
  showInstructions: false,
};

const FoodDiaryContext = createContext<{
  state: FoodDiaryState;
  dispatch: React.Dispatch<FoodDiaryAction>;
  addEntry: (entry: Omit<FoodEntry, 'id' | 'timestamp'>) => void;
  removeEntry: (id: string) => void;
  getTodaysEntries: () => FoodEntry[];
  clearCurrentForm: () => void;
  toggleInstructions: () => void;
} | undefined>(undefined);

function foodDiaryReducer(state: FoodDiaryState, action: FoodDiaryAction): FoodDiaryState {
  switch (action.type) {
    case 'ADD_ENTRY':
      return { ...state, entries: [...state.entries, action.payload] };
    case 'REMOVE_ENTRY':
      return { ...state, entries: state.entries.filter(entry => entry.id !== action.payload) };
    case 'SET_SELECTED_DATE':
      return { ...state, selectedDate: action.payload };
    case 'SET_ENTRY_TIME':
      return { ...state, entryTime: action.payload };
    case 'SET_ENTRY_TYPE':
      return { ...state, entryType: action.payload };
    case 'SET_FOOD_DESCRIPTION':
      return { ...state, foodDescription: action.payload };
    case 'SET_SYMPTOM_TYPE':
      return { ...state, symptomType: action.payload };
    case 'SET_SYMPTOM_INTENSITY':
      return { ...state, symptomIntensity: action.payload };
    case 'SET_SYMPTOM_DURATION':
      return { ...state, symptomDuration: action.payload };
    case 'SET_SYMPTOM_LOCATION':
      return { ...state, symptomLocation: action.payload };
    case 'SET_SYMPTOM_DESCRIPTION':
      return { ...state, symptomDescription: action.payload };
    case 'SET_OTHER_DESCRIPTION':
      return { ...state, otherDescription: action.payload };
    case 'TOGGLE_INSTRUCTIONS':
      return { ...state, showInstructions: !state.showInstructions };
    default:
      return state;
  }
}

export const FoodDiaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(foodDiaryReducer, initialState);

  // Load entries from localStorage on mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('foodDiaryEntries');
    if (savedEntries) {
      try {
        const parsed = JSON.parse(savedEntries);
        parsed.forEach((entry: FoodEntry) => {
          dispatch({ type: 'ADD_ENTRY', payload: entry });
        });
      } catch (error) {
        console.error('Failed to load saved entries', error);
      }
    }
  }, []);

  // Save entries to localStorage when they change
  useEffect(() => {
    if (state.entries.length > 0) {
      localStorage.setItem('foodDiaryEntries', JSON.stringify(state.entries));
    }
  }, [state.entries]);

  const addEntry = (entry: Omit<FoodEntry, 'id' | 'timestamp'>) => {
    const newEntry: FoodEntry = {
      ...entry,
      id: Date.now().toString(),
      timestamp: Date.now(),
    };
    dispatch({ type: 'ADD_ENTRY', payload: newEntry });
  };

  const removeEntry = (id: string) => {
    dispatch({ type: 'REMOVE_ENTRY', payload: id });
  };

  const getTodaysEntries = (): FoodEntry[] => {
    return state.entries
      .filter(entry => entry.date === state.selectedDate)
      .sort((a, b) => a.timestamp - b.timestamp);
  };

  const clearCurrentForm = () => {
    dispatch({ type: 'SET_ENTRY_TIME', payload: '' });
    dispatch({ type: 'SET_FOOD_DESCRIPTION', payload: '' });
    dispatch({ type: 'SET_SYMPTOM_TYPE', payload: '' });
    dispatch({ type: 'SET_SYMPTOM_INTENSITY', payload: 5 });
    dispatch({ type: 'SET_SYMPTOM_DURATION', payload: '' });
    dispatch({ type: 'SET_SYMPTOM_LOCATION', payload: '' });
    dispatch({ type: 'SET_SYMPTOM_DESCRIPTION', payload: '' });
    dispatch({ type: 'SET_OTHER_DESCRIPTION', payload: '' });
  };

  const toggleInstructions = () => {
    dispatch({ type: 'TOGGLE_INSTRUCTIONS' });
  };

  return (
    <FoodDiaryContext.Provider
      value={{
        state,
        dispatch,
        addEntry,
        removeEntry,
        getTodaysEntries,
        clearCurrentForm,
        toggleInstructions,
      }}
    >
      {children}
    </FoodDiaryContext.Provider>
  );
};

export const useFoodDiary = () => {
  const context = useContext(FoodDiaryContext);
  if (context === undefined) {
    throw new Error('useFoodDiary must be used within a FoodDiaryProvider');
  }
  return context;
};
