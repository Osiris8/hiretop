"use client";

import React, { useState, useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const TalentSkillData = async function () {
  const { user } = useKindeBrowserClient();

  const userId = user?.id;

  const [allSkills, setAllSkills] = useState([]);

  const getSkill = async () => {
    if (user && user.id) {
      // Vérifier que 'user' et 'user.id' existent
      const response = await fetch(`/api/talent-skill/${userId}`);

      const data = await response.json();
      console.log(data);
      setAllSkills(data);
    } else {
      console.log("User not logged in or user data not loaded");
    }
  };
  getSkill();

  return (
    <div>
      <ul>
        {allSkills.map((allSkills, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-gray-500">{allSkills}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TalentSkillData;
