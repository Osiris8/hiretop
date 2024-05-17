// hooks/useTalentProfil.js
"use client";

import { useState } from "react";

export const useTalentProfil = (user) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateTalentProfil = async (e, router) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/talent-profil", {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
          firstname,
          lastname,
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
          typeOfProfile: "talent",
        }),
      });

      if (response.ok && response2.ok) {
        router.push("/talent-dashboard");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    telephone,
    setTelephone,
    country,
    setCountry,
    isSubmitting,
    updateTalentProfil,
  };
};
