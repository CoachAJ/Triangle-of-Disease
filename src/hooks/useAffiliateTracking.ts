import { useState, useEffect } from 'react';

export const useAffiliateTracking = () => {
  const [affiliateId, setAffiliateId] = useState<string | null>(null);

  useEffect(() => {
    // Get affiliate ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');
    
    if (uid) {
      // Store in localStorage for persistence across page visits
      localStorage.setItem('affiliateId', uid);
      setAffiliateId(uid);
    } else {
      // Check if we have a stored affiliate ID
      const storedId = localStorage.getItem('affiliateId');
      if (storedId) {
        setAffiliateId(storedId);
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
    createDailyWithDocLink,
    addAffiliateToLink
  };
};

export default useAffiliateTracking;
