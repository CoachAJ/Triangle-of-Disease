import { useState, useEffect } from 'react';

// Weighted affiliate rotation configuration
// Pharmacist Ben's downlines get ~2:1 weight over AJ, Becca, Ruthellen
const WEIGHTED_AFFILIATES = [
  { uid: '101384854', weight: 4 },  // Pharmacist Ben primary - highest weight
  { uid: '100506163', weight: 3 },  // Pharmacist Ben secondary
  { uid: '102742703', weight: 2 },  // AJ
  { uid: '101848575', weight: 1 },  // Becca
  { uid: '102707635', weight: 1 },  // Ruthellen
];

// Build weighted pool for random selection
const buildWeightedPool = (): string[] => {
  const pool: string[] = [];
  WEIGHTED_AFFILIATES.forEach(({ uid, weight }) => {
    for (let i = 0; i < weight; i++) {
      pool.push(uid);
    }
  });
  return pool;
};

const AFFILIATE_POOL = buildWeightedPool();

// Select a random affiliate from weighted pool
const selectWeightedAffiliate = (): string => {
  const randomIndex = Math.floor(Math.random() * AFFILIATE_POOL.length);
  return AFFILIATE_POOL[randomIndex];
};

export const useAffiliateTracking = () => {
  const [affiliateId, setAffiliateId] = useState<string | null>(null);
  const [isFromUrl, setIsFromUrl] = useState<boolean>(false);

  useEffect(() => {
    // Get affiliate ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');
    
    if (uid) {
      // URL parameter takes priority - store and use it
      localStorage.setItem('affiliateId', uid);
      localStorage.setItem('affiliateFromUrl', 'true');
      setAffiliateId(uid);
      setIsFromUrl(true);
    } else {
      // Check if we have a stored affiliate ID from a previous URL visit
      const storedId = localStorage.getItem('affiliateId');
      const wasFromUrl = localStorage.getItem('affiliateFromUrl') === 'true';
      
      if (storedId && wasFromUrl) {
        // Keep using the affiliate ID from the original URL visit
        setAffiliateId(storedId);
        setIsFromUrl(true);
      } else {
        // No URL-based affiliate - use weighted rotation for this visit
        const rotatedAffiliate = selectWeightedAffiliate();
        setAffiliateId(rotatedAffiliate);
        setIsFromUrl(false);
        // Don't persist rotated affiliates - each new visit gets fresh rotation
      }
    }
  }, []);

  // Function to create Daily with Doc links with affiliate ID
  const createDailyWithDocLink = (baseUrl: string = 'https://dailywithdoc.com') => {
    if (affiliateId) {
      return `${baseUrl}/?uid=${affiliateId}`;
    }
    return baseUrl;
  };

  // Function to add affiliate ID to any URL if it's a Daily with Doc domain
  const addAffiliateToLink = (url: string) => {
    if (url.includes('dailywithdoc.com') && affiliateId) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}uid=${affiliateId}`;
    }
    return url;
  };

  return {
    affiliateId,
    isFromUrl,
    createDailyWithDocLink,
    addAffiliateToLink
  };
};

export default useAffiliateTracking;
