import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES, ACTIVE } from "../actions/types";

const initialState = {
  text: "",
  movies: [],
  movie: [],
  active: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case ACTIVE:
      return {
        ...state,
        active: action.payload
      };
    default:
      return state;
  }
}
