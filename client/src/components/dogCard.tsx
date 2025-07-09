import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DogItem } from "../types/appTypes";
import { useEffect, useRef, useState } from "react";

interface DogCardProps {
  dog: DogItem;
  isFavorite: boolean;
  onLike: (filename: string) => Promise<void>;
}

export const DogCard = ({ dog, isFavorite, onLike }: DogCardProps) => {
  const [showLikeEffect, setShowLikeEffect] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: dog.type === "video" ? 16 : 4,
    height: dog.type === "video" ? 9 : 3,
  });
  const cardRef = useRef<HTMLDivElement>(null);
  let tapCount = 0;
  let tapTimer: ReturnType<typeof setTimeout>;

  const handleLike = async () => {
    try {
      await onLike(dog.filename);
      setShowLikeEffect(true);
      setTimeout(() => setShowLikeEffect(false), 1000);
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  const handleDoubleTap = () => {
    tapCount++;
    if (tapCount === 1) {
      tapTimer = setTimeout(() => {
        tapCount = 0;
      }, 300);
    } else if (tapCount === 2) {
      clearTimeout(tapTimer);
      handleLike();
      tapCount = 0;
    }
  };

  const handleMediaLoad = (event: any) => {
    const { naturalWidth, naturalHeight, videoWidth, videoHeight } = event.target;
    const width = naturalWidth || videoWidth;
    const height = naturalHeight || videoHeight;
    setDimensions({ width, height });
  };

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.addEventListener("touchstart", handleDoubleTap);
      return () => card.removeEventListener("touchstart", handleDoubleTap);
    }
  }, []);

  const aspectRatio = dimensions.width > 0 ? dimensions.height / dimensions.width : 1;

  return (
    <Card
      ref={cardRef}
      sx={{
        position: "relative",
        mb: 3,
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        border: "1px solid rgba(0,0,0,0.08)",
        overflow: "hidden",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
        },
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={(e) => {
        if (e.detail === 2) handleLike();
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingTop: `${aspectRatio * 100}%`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {dog.type === "image" ? (
          <CardMedia
            component="img"
            image={dog.url}
            alt={dog.filename}
            onLoad={handleMediaLoad}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px 12px 0 0",
            }}
          />
        ) : (
          <CardMedia
            component="video"
            src={dog.url}
            preload="metadata"
            controls
            onLoadedMetadata={handleMediaLoad}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px 12px 0 0",
            }}
          />
        )}
      </Box>

      {/* Эффект лайка */}
      {showLikeEffect && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "5rem",
            color: "white",
            textShadow: "0 0 10px rgba(0,0,0,0.5)",
            pointerEvents: "none",
            animation: "fadeInOut 1s ease-in-out",
            "@keyframes fadeInOut": {
              "0%": {
                opacity: 0,
                transform: "translate(-50%, -50%) scale(0.5)",
              },
              "50%": {
                opacity: 1,
                transform: "translate(-50%, -50%) scale(1.2)",
              },
              "100%": {
                opacity: 0,
                transform: "translate(-50%, -50%) scale(1.5)",
              },
            },
          }}
        >
          <FavoriteIcon fontSize="inherit" />
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 1,
          height: 52,
          bgcolor: "background.paper",
        }}
      >
        <IconButton
          onClick={handleLike}
          sx={{
            color: isFavorite ? "error.main" : "action.active",
            p: 0.5,
            "& .MuiSvgIcon-root": {
              fontSize: "1.6rem",
            },
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <Typography
          variant="body2"
          sx={{
            ml: 0.5,
            minWidth: 24,
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          {dog.likes}
        </Typography>
      </Box>
    </Card>
  );
};