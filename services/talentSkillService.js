// services/talentSkillService.js
export const getTalentSkills = async (userId) => {
  const response = await fetch(`/api/talent-skill/${userId}`);
  return response.json();
};

export const addTalentSkill = async (userId, skill) => {
  const response = await fetch("/api/talent-skill", {
    method: "POST",
    body: JSON.stringify({ userId, skill }),
  });
  return response.ok;
};

export const deleteTalentSkill = async (id) => {
  const response = await fetch(`/api/talent-skill/${id}`, {
    method: "DELETE",
  });
  return response.ok;
};
