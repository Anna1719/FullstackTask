import { useState } from "react";
import { DogGrid } from "../components/cardsGrid";
import { useDogFavorites } from "../hooks/useFavorites";
import { Box, Typography } from "@mui/material";
import { useDogsApi } from "../hooks/useApi";
import { Loader } from "@/components/shared/loader";
import { PaginationControl } from "@/components/shared/paginationControl";
import { CARDS_PER_PAGE } from "@/utils/constants";

export const FavoritesPage = () => {
  const [page, setPage] = useState(1);
  const { dogs, isLoading, isError } = useDogsApi();
  const { favorites, handleLike } = useDogFavorites();

  const favoriteDogs = dogs
    .filter((dog) => favorites.includes(dog.filename))
    .slice((page - 1) * CARDS_PER_PAGE, page * CARDS_PER_PAGE);

  return (
    <Box sx={{ mx: "auto", p: 3 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: 700,
          color: "primary.main",
        }}
      >
        Favorite Dogs ({favorites.length})
      </Typography>

      {isError ? (
        <Loader isError />
      ) : isLoading ? (
        <Loader />
      ) : (
        <PaginationControl
          count={Math.ceil(favorites.length / 15)}
          page={page}
          onPageChange={setPage}
          totalItems={favorites.length}
        >
          <DogGrid
            dogs={favoriteDogs}
            favorites={favorites}
            onLike={handleLike}
          />
        </PaginationControl>
      )}
    </Box>
  );
};
