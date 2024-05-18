// services/talentAvatarService.js
export const updateTalentAvatar = async (userId, avatarUrl) => {
  const response = await fetch(`/api/talent-avatar/${userId}`, {
    method: "PATCH",
    body: JSON.stringify({
      userId,
      avatar: avatarUrl,
    }),
  });
  return response;
};
