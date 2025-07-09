import { CARDS_PER_PAGE } from "@/utils/constants";
import { Pagination, Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface PaginationControlProps {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
  totalItems?: number;
  children?: ReactNode;
}

export const PaginationControl = ({
  count,
  page,
  onPageChange,
  itemsPerPage = CARDS_PER_PAGE,
  totalItems,
  children,
}: PaginationControlProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      {children}

      {count > 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={count}
            page={page}
            onChange={(_, value) => onPageChange(value)}
            sx={{
              "& .MuiPaginationItem-root": {
                fontSize: "1.1rem",
              },
            }}
            size="large"
          />
        </Box>
      )}

      {totalItems !== undefined && (
        <Typography
          variant="body2"
          sx={{ textAlign: "center", mt: 1, color: "text.secondary" }}
        >
          Showing {(page - 1) * itemsPerPage + 1}-
          {Math.min(page * itemsPerPage, totalItems)} of {totalItems}
        </Typography>
      )}
    </Box>
  );
};
