// hooks/useTalentExperience.js
"use client";

import { useState, useEffect } from "react";

export const useTalentExperience = (userId) => {
  const [experience, setExperience] = useState("");
  const [allExperiences, setAllExperiences] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getExperience = async () => {
      if (userId) {
        try {
          const response = await fetch(`/api/talent-experience/${userId}`);
          const data = await response.json();
          setAllExperiences(data);
        } catch (error) {
          console.error("Error fetching experiences:", error);
        }
      }
    };
    getExperience();
  }, [userId]);

  const addExperience = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/talent-experience", {
        method: "POST",
        body: JSON.stringify({ userId, description: experience }),
      });
      if (response.ok) {
        setExperience("");
        const newExperience = await response.json();
        setAllExperiences([...allExperiences, newExperience]);
      }
    } catch (error) {
      console.error("Error adding experience:", error);
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  const deleteExperience = async (id) => {
    try {
      const response = await fetch(`/api/talent-experience/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAllExperiences(allExperiences.filter((exp) => exp._id !== id));
      }
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  };

  return {
    experience,
    setExperience,
    allExperiences,
    isSubmitting,
    isLoading,
    addExperience,
    deleteExperience,
  };
};
