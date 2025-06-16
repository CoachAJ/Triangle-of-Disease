export type EntryType = 'food' | 'symptom' | 'other';

export interface FoodEntry {
  id: string;
  date: string;
  time: string;
  type: EntryType;
  description: string;
  timestamp: number;
  symptomType?: string;
  intensity?: number;
  duration?: string;
  location?: string;
}

export interface FoodDiaryState {
  entries: FoodEntry[];
  selectedDate: string;
  entryTime: string;
  entryType: EntryType;
  foodDescription: string;
  symptomType: string;
  symptomIntensity: number;
  symptomDuration: string;
  symptomLocation: string;
  symptomDescription: string;
  otherDescription: string;
  showInstructions: boolean;
}
