// hooks/useTalentNextProfil.js
"use client";

import { useState } from "react";

export const useTalentNextProfil = (userId) => {
  const [level, setLevel] = useState("");
  const [remote, setRemote] = useState("");
  const [freelance, setFreelance] = useState("");
  const [onsite, setOnsite] = useState("");
  const [available, setAvailable] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateTalentNextProfil = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/talent-next-profil/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          level,
          remote,
          freelance,
          onsite,
          available,
          city,
          country,
          bio,
        }),
      });
      if (response.ok) {
        setIsLoading(false);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  return {
    level,
    setLevel,
    remote,
    setRemote,
    freelance,
    setFreelance,
    onsite,
    setOnsite,
    available,
    setAvailable,
    bio,
    setBio,
    country,
    setCountry,
    city,
    setCity,
    isSubmitting,
    isLoading,
    updateTalentNextProfil,
  };
};
