
import { MoviesAction, MoviesActionTypes, MoviesState } from "store/types/movies";


const initialState: MoviesState = {
    movies: [],
    movie: null,
    limit: 10,
    error: null,
    amount: 0,
    page: 1
};



const reducer = (
    state = initialState,
    action: MoviesAction
): MoviesState => {
    // 
    switch (action.type) {
        case MoviesActionTypes.SET_MOVIES:
            return { ...state, movies: action.movies, amount: action.movie_count, page: action.page };
        case MoviesActionTypes.SET_MOVIE:
            return { ...state, movie: { ...state.movie, ...action.movie } };

        default:
            return state;
    }
};

export default reducer;
