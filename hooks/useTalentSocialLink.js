// hooks/useTalentSocialLink.js
"use client";

import { useState } from "react";

export const useTalentSocialLink = (userId) => {
  const [facebook, setFacebook] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const updateTalentSocialLink = async (e) => {
    e.preventDefault();
    setLoadingButton(true);
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/talent-social-link/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          facebook,
          github,
          twitter,
          linkedin,
        }),
      });
      if (response.ok) {
        setLoadingButton(false);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingButton(false);
      setIsSubmitting(false);
    }
  };

  return {
    facebook,
    setFacebook,
    github,
    setGithub,
    twitter,
    setTwitter,
    linkedin,
    setLinkedin,
    isSubmitting,
    loadingButton,
    updateTalentSocialLink,
  };
};
