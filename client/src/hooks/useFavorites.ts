import { useState, useEffect } from "react";
import { likeDog } from "../api/dogsApi";

export const useDogActions = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("dogFavorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("dogFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleLike = async (filename: string, currentLikes: number) => {
    if (favorites.includes(filename)) return currentLikes;

    try {
      const { success, likes } = await likeDog(filename);
      if (success) {
        setFavorites((prev) => [...prev, filename]);
        return likes;
      }
    } catch (error) {
      console.error("Like error:", error);
    }
    return currentLikes;
  };

  return {
    favorites,
    handleLike,
  };
};
