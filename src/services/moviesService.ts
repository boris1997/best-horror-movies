import { AxiosResponse } from "axios"
import { IMovieResponse, IMoviesResponse } from "globalTypes/movies"
import $host from "http/axios"

export const getTopHorrorMovies = async (limit: number, quality: string, sort_by: string, genre: string, page: number | string): Promise<AxiosResponse<IMoviesResponse>> => {


    return $host.get(`/list_movies.json/`, {
        params: {
            limit,
            quality,
            sort_by,
            genre,
            page,
        }
    })
}

export const getTopHorrorMovie = async (movie_id: number): Promise<AxiosResponse<IMovieResponse>> => {


    return $host.get(`/movie_details.json`, {
        params: {
            movie_id
        }
    })
}

