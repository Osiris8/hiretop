// services/talentNextProfilService.js
export const updateTalentNextProfil = async (userId, profilData) => {
  const response = await fetch(`/api/talent-next-profil/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(profilData),
  });
  return response;
};
