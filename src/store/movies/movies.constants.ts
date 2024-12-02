import { createEntityAdapter } from "@reduxjs/toolkit";
import { MoviesInitialStateType, SingleMovieToGradeType } from "./movies.types";

export const moviesAdapter = createEntityAdapter<SingleMovieToGradeType>({});

export const moviesInitialState: MoviesInitialStateType = {
  isFetched: false,
  isFetching: false,
  movies: moviesAdapter.getInitialState(),
};
