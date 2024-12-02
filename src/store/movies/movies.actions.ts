import { listenerMiddleware } from "@store/store";
import { fetchMoviesDataAction } from "./actions/fetchMoviesData.action";

export const createHealthListenerActions = () => {
  listenerMiddleware.startListening(fetchMoviesDataAction());
};
