import {
  ListenerEffectAPI,
  PayloadAction,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { moviesActions } from "../movies.slice";

export const rejectMovieAction = () => ({
  actionCreator: moviesActions.likeMovie,
  effect: async (
    _action: PayloadAction<{ movieId: string }>,
    _listenerApi: ListenerEffectAPI<
      unknown,
      ThunkDispatch<unknown, unknown, UnknownAction>,
      unknown
    >
  ) => {
    try {
      // Inform backend here
      console.log("Movie rejected");
    } catch (e) {
      throw new Error("Failed to change rate status");
    }
  },
});
