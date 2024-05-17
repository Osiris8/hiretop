// services/talentProfilService.js
export const addTalentProfil = async (
  userId,
  firstname,
  lastname,
  telephone,
  country
) => {
  const response = await fetch("/api/talent-profil", {
    method: "POST",
    body: JSON.stringify({
      userId,
      firstname,
      lastname,
      telephone,
      country,
    }),
  });
  return response;
};

export const addStatusProfil = async (userId, typeOfProfile) => {
  const response = await fetch("/api/status-profil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      typeOfProfile,
    }),
  });
  return response;
};
