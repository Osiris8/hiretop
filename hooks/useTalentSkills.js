// hooks/useTalentSkills.js
"use client";

import { useState, useEffect } from "react";

export const useTalentSkills = (userId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skill, setSkill] = useState("");
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      if (userId) {
        try {
          const response = await fetch(`/api/talent-skill/${userId}`);
          const data = await response.json();
          setAllSkills(data);
        } catch (error) {
          console.error("Error fetching skills:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getSkills();
  }, [userId, skill]);

  const addSkill = async () => {
    setIsSubmitting(true);
    setIsLoading(true);
    try {
      const response = await fetch("/api/talent-skill", {
        method: "POST",
        body: JSON.stringify({ userId, skill }),
      });
      if (response.ok) {
        setSkill("");
        setAllSkills([...allSkills, skill]);
      }
    } catch (error) {
      console.error("Error adding skill:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteSkill = async (id) => {
    try {
      const response = await fetch(`/api/talent-skill/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAllSkills(allSkills.filter((s) => s._id !== id));
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return {
    isLoading,
    isSubmitting,
    skill,
    allSkills,
    setSkill,
    addSkill,
    deleteSkill,
  };
};
