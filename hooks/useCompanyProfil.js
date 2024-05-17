// hooks/useCompanyProfil.js
"use client";

import { useState } from "react";

export const useCompanyProfil = (user) => {
  const [company, setCompany] = useState("");
  const [domain, setDomain] = useState("");
  const [size, setSize] = useState("");
  const [position, setPosition] = useState("");
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateCompanyProfil = async (e, router) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/company-profil", {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
          company,
          domain,
          size,
          position,
          telephone,
          country,
        }),
      });

      const response2 = await fetch("/api/status-profil", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          typeOfProfile: "company",
        }),
      });

      if (response.ok && response2.ok) {
        router.push("/company-dashboard");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    company,
    setCompany,
    domain,
    setDomain,
    size,
    setSize,
    position,
    setPosition,
    telephone,
    setTelephone,
    country,
    setCountry,
    isSubmitting,
    updateCompanyProfil,
  };
};
