import { useState } from "react";
import { DogGrid } from "../components/cardsGrid";
import { useDogActions } from "../hooks/useFavorites";
import { Box, Pagination, Typography } from "@mui/material";
import { useDogsApi } from "../hooks/useApi";
import { Loader } from "@/components/loader";

export const FavoritesPage = () => {
  const [page, setPage] = useState(1);
  const perPage = 15;
  const { dogs, isLoading, isError } = useDogsApi();
  const { favorites, handleLike } = useDogActions();

  const favoriteDogs = dogs
    .filter((dog) => favorites.includes(dog.filename))
    .slice((page - 1) * perPage, page * perPage);

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
        <>
          <DogGrid
            dogs={favoriteDogs}
            favorites={favorites}
            onLike={handleLike}
          />

          {favorites.length > 0 && (
            <Pagination
              count={Math.ceil(favorites.length / perPage)}
              page={page}
              onChange={(_, value) => setPage(value)}
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "center",
                "& .MuiPaginationItem-root": {
                  fontSize: "1.1rem",
                },
              }}
              size="large"
            />
          )}
        </>
      )}
    </Box>
  );
};
