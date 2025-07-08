import { Alert, Box, CircularProgress, Typography } from "@mui/material";

interface LoaderProps {
  isError?: boolean;
}

export const Loader = ({ isError }: LoaderProps) => {
  if (isError) {
    return (
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        p: 4
      }}>
        <Alert severity="error" sx={{ width: '100%', maxWidth: 600 }}>
          Failed to load data. Please try again later.
        </Alert>
      </Box>
    );
  }

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        gap: 2
      }}
    >
      <CircularProgress size={60} thickness={4} />
      <Typography variant="h6" color="text.secondary">
        Loading dogs...
      </Typography>
    </Box>
  );
};
