import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { moviesAdapter } from "./movies.constants";
import { RateStatus } from "./movies.types";

const isFetchedMoviesData = (state: RootState) => state.movies.isFetched;

const moviesBeforeGrade = createSelector(
  [(state: RootState) => state?.movies.movies],
  (state) =>
    moviesAdapter
      .getSelectors()
      .selectAll(state)
      .filter((movie) => movie.rateStatus === RateStatus.BEFORE_RATING)
);

const moviesAfterGrade = createSelector(
  [(state: RootState) => state?.movies.movies],
  (state) =>
    moviesAdapter
      .getSelectors()
      .selectAll(state)
      .filter((movie) => movie.rateStatus !== RateStatus.BEFORE_RATING)
);

export const moviesSelectors = {
  isFetchedMoviesData,
  moviesBeforeGrade,
  moviesAfterGrade,
};
