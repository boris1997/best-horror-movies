export interface IMoviesResponse {
    data: IMovies;
}
export interface IMovieResponse {
    data: IMovie;
}


export interface IMovies {
    movie_count: number;
    movies: IMoviesData[];
}
export interface IMovie {
    movie: IMovieData;
}

export interface IMoviesData {
    id: number;
    title: string;
    runtime: number;
    medium_cover_image: string;
    genres: string[];
    rating: number;
    year: number;
}

export interface IMovieData extends IMoviesData {
    torrents: ITorrents[];
    description_intro: string;
    like_count: number;
    background_image: string;
}

export interface ITorrents {
    url: string;
    quality: string
}