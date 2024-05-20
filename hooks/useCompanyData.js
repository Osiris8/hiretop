"use client";

import { useState, useEffect } from "react";

export const useCompanyData = (userId) => {
  const [companyData, setCompanyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(`/api/company/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch company data");
        }
        const data = await response.json();
        setCompanyData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchCompanyData();
    }
  }, [userId]);

  return { companyData, isLoading, error };
};
