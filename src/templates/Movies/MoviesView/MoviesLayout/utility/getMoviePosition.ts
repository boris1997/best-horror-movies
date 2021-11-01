export const getMoviePosition = (page: number, index: number) => {
    let moviePosition: string | number = index + 1;
    if (page > 1) {
        const ending = page - 1;
        moviePosition = ending.toString() + moviePosition;
    }
    if (+moviePosition > 100) {
        moviePosition = moviePosition.toString();
        moviePosition =
            +moviePosition.split("")[0] +
            +moviePosition.split("")[1] +
            moviePosition.split("")[2];
    }
    return moviePosition
}