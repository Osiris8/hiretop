// services/talentSocialLinkService.js
export const updateTalentSocialLink = async (userId, socialLinks) => {
  const response = await fetch(`/api/talent-social-link/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(socialLinks),
  });
  return response;
};
