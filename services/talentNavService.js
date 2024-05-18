// services/talentNavService.js
export const getTalentProfil = async (userId) => {
  const response = await fetch(`/api/talent-profil/${userId}`);
  return response.json();
};

export const getTalentAvatar = async (userId) => {
  const response = await fetch(`/api/talent-avatar/${userId}`);
  return response.json();
};
