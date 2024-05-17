// services/companyProfilService.js
export const addCompanyProfil = async (
  userId,
  company,
  domain,
  size,
  position,
  telephone,
  country
) => {
  const response = await fetch("/api/company-profil", {
    method: "POST",
    body: JSON.stringify({
      userId,
      company,
      domain,
      size,
      position,
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
