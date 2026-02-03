import React, { createContext, useContext, ReactNode } from 'react';
import { useAffiliateTracking } from '../hooks/useAffiliateTracking';

interface AffiliateContextType {
  affiliateId: string | null;
  isFromUrl: boolean;
  createDailyWithDocLink: (baseUrl?: string) => string;
  addAffiliateToLink: (url: string) => string;
}

const AffiliateContext = createContext<AffiliateContextType | undefined>(undefined);

export const AffiliateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const affiliateTracking = useAffiliateTracking();

  return (
    <AffiliateContext.Provider value={affiliateTracking}>
      {children}
    </AffiliateContext.Provider>
  );
};

export const useAffiliate = () => {
  const context = useContext(AffiliateContext);
  if (context === undefined) {
    throw new Error('useAffiliate must be used within an AffiliateProvider');
  }
  return context;
};

export default AffiliateContext;
