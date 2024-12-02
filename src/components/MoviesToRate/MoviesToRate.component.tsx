import React, { useCallback } from "react";
import { MoviesToRateProps } from "./MoviesToGrade.types";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { moviesActions } from "@store/movies/movies.slice";
import { AnimatePresence } from "framer-motion";
import { MovieBigCard } from "@components/MovieBigCard";

export const MoviesToRate: React.FC<MoviesToRateProps> = ({ movies }) => {
  const dispatch = useDispatch();
  const currentMovie = movies[0];
  const slicedMovies = movies.reverse();

  const handleLike = useCallback((movieId: string) => {
    dispatch(moviesActions.likeMovie({ movieId }));
  }, []);

  const handleReject = useCallback((movieId: string) => {
    dispatch(moviesActions.rejectMovie({ movieId }));
  }, []);

  return (
    <Stack direction={{ xs: "column", md: "row" }} height="100%">
      <Stack justifyContent="center" width="100%" height="100%" flex={1}>
        <Stack p={2} gap={2} alignItems="center">
          <Typography variant="h5">{`${currentMovie.title} (${currentMovie.rating}/10)`}</Typography>
          <Box
            position="relative"
            height={{ xs: 400, md: 450, lg: 594 }}
            sx={{
              aspectRatio: "402 / 594",
            }}
          >
            <AnimatePresence>
              {slicedMovies.map((movie) => {
                return (
                  <MovieBigCard
                    key={movie.id}
                    id={movie.id}
                    url={movie.imageURL}
                    isFront={
                      movie.id === slicedMovies[slicedMovies.length - 1].id
                    }
                    handleLike={handleLike}
                    handleReject={handleReject}
                  />
                );
              })}
            </AnimatePresence>
          </Box>

          <Stack direction="row" gap={1}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                handleLike(currentMovie.id);
              }}
            >
              Like
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                handleReject(currentMovie.id);
              }}
            >
              Reject
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack flex={1} height="100%" justifyContent="center">
        <Stack height={{ xs: "auto", md: "none" }}>
          <Stack
            p={2}
            px={{ xs: 2, md: 4, lg: 8 }}
            gap={1}
            height="100%"
            alignItems="center"
          >
            <Typography variant="h6">Summary</Typography>
            <Typography variant="body2">{currentMovie.summary}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
