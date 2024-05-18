// hooks/useTalentNav.js
"use client";

import { useState, useEffect } from "react";

export const useTalentNav = (user) => {
  const [userTalent, setUserTalent] = useState({});
  const [profilImageUrl, setProfilImageUrl] = useState("");

  useEffect(() => {
    const getTalent = async () => {
      if (user && user.id) {
        try {
          const response = await fetch(`/api/talent-profil/${user.id}`);
          const data = await response.json();
          setUserTalent(data);
        } catch (error) {
          console.error("Error fetching talent profile:", error);
        }
      }
    };

    const getTalentAvatar = async () => {
      if (user && user.id) {
        try {
          const response = await fetch(`/api/talent-avatar/${user.id}`);
          const data = await response.json();
          if (response.ok && data[0]?.avatar) {
            setProfilImageUrl(data[0].avatar);
          } else {
            setProfilImageUrl("/default-avatar.png"); // Image de secours
          }
        } catch (error) {
          console.error("Error fetching talent avatar:", error);
          setProfilImageUrl("/default-avatar.png"); // Image de secours en cas d'erreur
        }
      }
    };

    getTalent();
    getTalentAvatar();
  }, [user]);

  return { userTalent, profilImageUrl };
};
