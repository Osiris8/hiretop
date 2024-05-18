// hooks/useTalentAvatar.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";

export const useTalentAvatar = (user) => {
  const [file, setFile] = useState(null);
  const [profilImageUrl, setProfilImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { edgestore } = useEdgeStore();
  const router = useRouter();

  const uploadTalentAvatar = async (e) => {
    e.preventDefault();

    if (file) {
      setIsLoading(true);
      setIsSubmitting(true);
      try {
        const res = await edgestore.publicFiles.upload({
          file,
        });

        setProfilImageUrl(res.url);

        const response = await fetch(`/api/talent-avatar/${user.id}`, {
          method: "PATCH",
          body: JSON.stringify({
            userId: user.id,
            avatar: res.url,
          }),
        });

        if (response.ok) {
          setIsLoading(false);
          router.push("/talent-dashboard");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        setIsSubmitting(false);
      }
    }
  };

  return {
    file,
    setFile,
    profilImageUrl,
    isSubmitting,
    isLoading,
    uploadTalentAvatar,
  };
};
