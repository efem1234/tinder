import {
  ListenerEffectAPI,
  PayloadAction,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { moviesActions } from "../movies.slice";
import { moviesMockedData } from "../movies.mock";
import { RateStatus } from "../movies.types";

export const fetchMoviesDataAction = () => ({
  actionCreator: moviesActions.fetchMoviesDataRequest,
  effect: async (
    _action: PayloadAction,
    listenerApi: ListenerEffectAPI<
      unknown,
      ThunkDispatch<unknown, unknown, UnknownAction>,
      unknown
    >
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const formattedMoviesData = moviesMockedData.map((movie) => ({
        ...movie,
        rateStatus: RateStatus.BEFORE_RATING,
      }));

      listenerApi.dispatch(
        moviesActions.fetchMoviesDataSuccess(formattedMoviesData)
      );
    } catch (e) {
      listenerApi.dispatch(moviesActions.fetchMoviesDataFailure());
    }
  },
});
