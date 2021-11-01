import { IMovieData, IMoviesData } from "globalTypes/movies";

export enum MoviesActionTypes {
    FETCH_MOVIES = 'FETCH_MOVIES',
    SET_MOVIES = 'SET_MOVIES',
    SET_MOVIE_COUNT = 'SET_MOVIE_COUNT',
    SET_MOVIE_PAGE = 'SET_MOVIE_PAGE',
    SET_MOVIE = 'SET_MOVIE',
    REMOVE_MOVIES = 'REMOVE_MOVIES',
    REMOVE_MOVIE = 'REMOVE_MOVIE',
    FETCH_MOVIES_FAILED = 'FETCH_MOVIES_FAILED',
}

export interface SetMovies {
    type: MoviesActionTypes.SET_MOVIES,
    movies: IMoviesData[],
    movie_count: number
    page: number
}
export interface SetMovie {
    type: MoviesActionTypes.SET_MOVIE,
    movie: IMovieData,
}

export type MoviesAction = SetMovies | SetMovie

export interface MoviesState {
    movies: [] | IMoviesData[],
    movie: null | IMovieData,
    // Movie: null | IMoviePageElements,
    error: null | string,
    amount: number,
    limit: number,
    page: number,
}

