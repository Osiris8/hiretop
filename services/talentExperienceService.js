// services/talentExperienceService.js
export const getTalentExperience = async (userId) => {
  const response = await fetch(`/api/talent-experience/${userId}`);
  return response.json();
};

export const addTalentExperience = async (userId, description) => {
  const response = await fetch("/api/talent-experience", {
    method: "POST",
    body: JSON.stringify({ userId, description }),
  });
  return response.json();
};

export const deleteTalentExperience = async (id) => {
  const response = await fetch(`/api/talent-experience/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
