import { Box, Pagination, Typography } from "@mui/material";
import { DogGrid } from "../components/cardsGrid";
import { useDogsApi } from "../hooks/useApi";
import { useState } from "react";
import { useDogActions } from "../hooks/useFavorites";
import { Loader } from "@/components/loader";

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const perPage = 15;
  const { dogs, isLoading, isError } = useDogsApi();
  const { favorites, handleLike } = useDogActions();

  const paginatedDogs = dogs.slice((page - 1) * perPage, page * perPage);

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
        <>
          <DogGrid
            dogs={paginatedDogs}
            favorites={favorites}
            onLike={handleLike}
          />

          <Pagination
            count={Math.ceil(dogs.length / perPage)}
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
        </>
      )}
    </Box>
  );
};
