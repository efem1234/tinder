import { useDispatch, useSelector } from "react-redux";
import { moviesSelectors } from "@store/movies/movies.selector";
import { useEffect } from "react";
import { moviesActions } from "@store/movies/movies.slice";
import { Navbar } from "@components/Navbar";
import { GradingSection } from "@components/MainSection/MainSection.component";
import { CircularProgress, Stack } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const isFetchedMoviesData = useSelector(moviesSelectors.isFetchedMoviesData);

  useEffect(() => {
    dispatch(moviesActions.fetchMoviesDataRequest());
  }, []);

  return (
    <Stack width="100%" alignItems="center" p={4}>
      <Stack
        height={!isFetchedMoviesData ? "calc(100vh - 144px)" : "100%"}
        width="100%"
        gap={2}
        maxWidth={1440}
      >
        <Navbar />
        {!isFetchedMoviesData ? (
          <Stack
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            color={(theme) => theme.palette.text.disabled}
          >
            <CircularProgress />
          </Stack>
        ) : (
          <GradingSection />
        )}
      </Stack>
    </Stack>
  );
}

export default App;
