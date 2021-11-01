import { IMovieData, IMoviesData } from "globalTypes/movies"
import { Dispatch } from "react"
import { getTopHorrorMovie, getTopHorrorMovies } from "services/moviesService"
import { MoviesAction, MoviesActionTypes, SetMovie, SetMovies } from "store/types/movies"

export const setMovies = (movies: IMoviesData[], movie_count: number, page: number): SetMovies => {
    return {
        type: MoviesActionTypes.SET_MOVIES,
        movies: movies,
        movie_count: movie_count,
        page: page,
    }
}

export const setMovie = (movie: IMovieData): SetMovie => {
    return {
        type: MoviesActionTypes.SET_MOVIE,
        movie: movie,
    }
}


export const fetchTopHorrorMovies = (limit: number = 10, quality: string, sort_by: string, genre: string, page_number: number) => {

    return (dispatch: Dispatch<MoviesAction>) => {
        getTopHorrorMovies(limit, quality, sort_by, genre, page_number)
            .then(({ data: { data: { movie_count, movies } } }) => {
                dispatch(setMovies(movies, movie_count, page_number));
            })
            .catch(({ response: { status, data: { message } } }) => {

            })
    }

}

export const fetchTopHorrorMovie = (id: number) => {

    return (dispatch: any) => {
        getTopHorrorMovie(id)
            .then(({ data: { data: { movie } } }) => {

                dispatch(setMovie(movie));

                // ;

            })
            .catch(({ response: { status, data: { message } } }) => {

            })
    }

}