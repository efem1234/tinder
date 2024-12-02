import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { moviesAdapter, moviesInitialState } from "./movies.constants";
import { RateStatus, SingleMovieToGradeType } from "./movies.types";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesInitialState,
  reducers: {
    fetchMoviesDataRequest: (state) => {
      state.isFetched = false;
      state.isFetching = true;
    },
    fetchMoviesDataSuccess: (
      state,
      action: PayloadAction<SingleMovieToGradeType[]>
    ) => {
      state.isFetched = true;
      state.isFetching = false;

      moviesAdapter.setAll(state.movies, action.payload);
    },
    fetchMoviesDataFailure: (state) => {
      state.isFetched = false;
      state.isFetching = false;
    },
    likeMovie: (state, action: PayloadAction<{ movieId: string }>) => {
      moviesAdapter.updateOne(state.movies, {
        id: action.payload.movieId,
        changes: { rateStatus: RateStatus.LIKED },
      });
    },
    rejectMovie: (state, action: PayloadAction<{ movieId: string }>) => {
      moviesAdapter.updateOne(state.movies, {
        id: action.payload.movieId,
        changes: { rateStatus: RateStatus.REJECTED },
      });
    },
  },
});

export const { actions: moviesActions, reducer: moviesReducer } = moviesSlice;
