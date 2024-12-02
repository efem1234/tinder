import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

import { createHealthListenerActions } from "./movies/movies.actions";
import { moviesReducer } from "./movies/movies.slice";

export const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

createHealthListenerActions();
