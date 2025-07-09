import { Box, Typography } from "@mui/material";
import { DogGrid } from "../components/cardsGrid";
import { useDogsApi } from "../hooks/useApi";
import { useState } from "react";
import { useDogFavorites } from "../hooks/useFavorites";
import { Loader } from "@/components/shared/loader";
import { PaginationControl } from "@/components/shared/paginationControl";
import { CARDS_PER_PAGE } from "@/utils/constants";

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const { dogs, isLoading, isError } = useDogsApi();
  const { favorites, handleLike } = useDogFavorites();

  const paginatedDogs = dogs.slice((page - 1) * CARDS_PER_PAGE, page * CARDS_PER_PAGE);

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
        Dog Gallery
      </Typography>

      {isError ? (
        <Loader isError />
      ) : isLoading ? (
        <Loader />
      ) : (
        <PaginationControl
          count={Math.ceil(dogs.length / 15)}
          page={page}
          onPageChange={setPage}
          totalItems={dogs.length}
        >
          <DogGrid
            dogs={paginatedDogs}
            favorites={favorites}
            onLike={handleLike}
          />
        </PaginationControl>
      )}
    </Box>
  );
};
