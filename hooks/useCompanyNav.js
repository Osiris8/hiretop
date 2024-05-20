"use client";

import { useEffect, useState } from "react";

export const useUserCompany = (userId, user) => {
  const [userCompany, setUserCompany] = useState({});
  const [profilImageUrl, setProfilImageUrl] = useState("");

  useEffect(() => {
    const getCompany = async () => {
      if (user && user.id) {
        const response = await fetch(`/api/company-profil/${userId}`);
        const data = await response.json();
        console.log(data);
        setUserCompany(data);
      } else {
        console.log("User not logged in or user data not loaded");
      }
    };

    const getCompanyAvatar = async () => {
      if (user && user.id) {
        const response = await fetch(`/api/company-avatar/${userId}`);
        const data = await response.json();
        if (data && data.length > 0 && data[0].avatar) {
          setProfilImageUrl(data[0].avatar);
        } else {
          console.log("No avatar data available");
        }
      } else {
        console.log("User not logged in or user data not loaded");
      }
    };

    getCompany();
    getCompanyAvatar();
  }, [userId, user]);

  return { userCompany, profilImageUrl };
};
