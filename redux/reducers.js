import {
    GET_MOVIES, ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM,
    ADD_TODO_ITEM, REMOVE_TODO_ITEM, CHANGE
} from './actions';
const initialState = {
    movies: [],
    favorites: [],
    todoList: [],
    language: null
};
function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies: action.payload };
        case ADD_FAVORITE_ITEM:
            return { ...state, favorites: [...state.favorites, action.payload] };

        case REMOVE_FAVORITE_ITEM:
            return {
                ...state,
                favorites: state.favorites.filter(
                    movie => movie.id !== action.payload.id,
                ),
            };

        case ADD_TODO_ITEM:
            return { ...state, todoList: [...state.todoList, action.payload] };

        case REMOVE_TODO_ITEM:
            return {
                ...state,
                todoList: state.todoList.filter(
                    todo => todo !== action.payload,
                ),
            };

        case CHANGE:
            return { ...state, language: action.payload };

        default:
            return state;
    }
}
export default moviesReducer;