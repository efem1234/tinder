import { MoviesToRate } from "@components/MoviesToRate";
import { RemainingPhotos } from "@components/RemainingPhotos";
import { Stack, Typography } from "@mui/material";
import { moviesSelectors } from "@store/movies/movies.selector";
import { useSelector } from "react-redux";

export const GradingSection: React.FC = () => {
  const moviesBeforeGrade = useSelector(moviesSelectors.moviesBeforeGrade);

  return (
    <Stack
      py={{ xs: 0, md: 2, lg: 5 }}
      direction={{ xs: "column-reverse", md: "row" }}
      height={moviesBeforeGrade.length <= 0 ? "calc(100vh - 144px)" : "100%"}
      width="100%"
    >
      {moviesBeforeGrade.length > 0 ? (
        <>
          <Stack height="100%" flex={1}>
            <RemainingPhotos movies={moviesBeforeGrade} />
          </Stack>
          <Stack height="100%" flex={2}>
            <MoviesToRate movies={moviesBeforeGrade} />
          </Stack>
        </>
      ) : (
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          color={(theme) => theme.palette.text.disabled}
        >
          <Typography variant="h4">No movies to rate</Typography>
        </Stack>
      )}
    </Stack>
  );
};
