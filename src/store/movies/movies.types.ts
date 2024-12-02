import { EntityState } from "@reduxjs/toolkit";

export type SingleMovieDTO = {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
};
export enum RateStatus {
  REJECTED = "REJECTED",
  LIKED = "LIKED",
  BEFORE_RATING = "BEFORE_RATING",
}
export type SingleMovieToGradeType = SingleMovieDTO & {
  rateStatus: RateStatus;
};
export type MoviesInitialStateType = {
  isFetched: boolean;
  isFetching: boolean;
  movies: EntityState<SingleMovieToGradeType, string>;
};
