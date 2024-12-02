import { useMediaQuery, Stack, Typography, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { RemainingPhotosProps } from "./RemainingPhotos.types";

export const RemainingPhotos: React.FC<RemainingPhotosProps> = ({ movies }) => {
  const theme = useTheme();
  const showMobileVariant = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        p={2}
        height={{ xs: 200, md: 400 }}
        width="100%"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Typography variant="h6">Remaining {movies.length} movies</Typography>
        <Stack
          justifyContent="center"
          flex={1}
          width="100%"
          alignItems="center"
          position="relative"
        >
          <AnimatePresence>
            {movies.map((movie, index: number) => (
              <motion.img
                key={movie.id}
                src={movie.imageURL}
                alt="Movie"
                style={{
                  position: "absolute",
                  filter: index === movies.length - 1 ? "none" : "blur(2px)",
                  top:
                    !showMobileVariant && index > movies.length - 5
                      ? Math.min(25 * index, 200)
                      : showMobileVariant
                      ? "auto"
                      : 0,
                  left:
                    showMobileVariant && index > movies.length - 5
                      ? Math.min(25 * index, 200)
                      : !showMobileVariant
                      ? "auto"
                      : 0,
                  width: 82,
                  height: 110,
                  borderRadius: 8,
                  transform: `rotate(${Math.min(index, 20)}deg)`,
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
              />
            ))}
          </AnimatePresence>
        </Stack>
      </Stack>
    </Stack>
  );
};
