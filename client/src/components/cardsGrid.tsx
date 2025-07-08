import { Box } from "@mui/material";
import { DogItem } from "../types/types";
import { DogCard } from "./dogCard";
import { Masonry } from "@mui/lab";

interface DogGridProps {
  dogs: DogItem[];
  favorites: string[];
  onLike: (filename: string, currentLikes: number) => Promise<number>;
}

export const DogGrid = ({ dogs, favorites, onLike }: DogGridProps) => {
  return (
    <Box sx={{p: 2, minHeight: '80vh'}}>
      <Masonry
        columns={{ xs: 2, sm: 3, md: 4 }}
        spacing={2}
        sx={{ margin: 0,
          transition: 'all 0.3s ease'
         }}
      >
        {dogs.map((dog) => (
          <div key={dog.filename} style={{ display: 'flex' }}>
            <DogCard
              dog={dog}
              isFavorite={favorites.includes(dog.filename)}
              onLike={onLike}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
};