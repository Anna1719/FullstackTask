import { useState, useEffect } from "react";
import { likeDog } from "../api/dogsApi";
import { useQueryClient } from "@tanstack/react-query";

type UseDogFavoritesReturn = {
  favorites: string[];
  handleLike: (filename: string) => Promise<void>;
};

export const useDogFavorites = (): UseDogFavoritesReturn => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const queryClient = useQueryClient();

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dogFavorites");
      if (saved) setFavorites(JSON.parse(saved));
    } catch (error) {
      console.error("Failed to load favorites", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dogFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleLike = async (filename: string): Promise<void> => {
    if (favorites.includes(filename)) {
      return;
    }

    try {
      const { success } = await likeDog(filename);
      if (success) {
        setFavorites((prev) => [...prev, filename]);
        queryClient.invalidateQueries({ queryKey: ["dogs"] });
      }
    } catch (error) {
      console.error("Like error:", error);
      throw error;
    }
  };

  return {
    favorites,
    handleLike,
  };
};