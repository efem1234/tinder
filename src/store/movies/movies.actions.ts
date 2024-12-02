import { listenerMiddleware } from "@store/store";
import { fetchMoviesDataAction } from "./actions/fetchMoviesData.action";
import { likeMovieAction } from "./actions/likeMovie.action";
import { rejectMovieAction } from "./actions/rejectMovie.action";

export const createMoviesListenerActions = () => {
  listenerMiddleware.startListening(fetchMoviesDataAction());
  listenerMiddleware.startListening(likeMovieAction());
  listenerMiddleware.startListening(rejectMovieAction());
};
