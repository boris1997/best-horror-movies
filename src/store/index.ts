// import { rootReducers } from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import movieReducer from 'store/reducers/movies'
import { composeWithDevTools } from 'redux-devtools-extension'

export const rootReducers = combineReducers({
    movies: movieReducer,

})



export type RootState = ReturnType<typeof rootReducers>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
    }
}


/* const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose; */



export const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);