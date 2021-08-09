
import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';


export const getMovies = () => {
    try {
        return async dispatch => {
            const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=64cda9458a0b50a8a6539c5bce6042a3&page=1');
            if (res.data) {
                dispatch({
                    type: GET_MOVIES,
                    payload: res.data,
                });
            } else {
                console.log('Unable to fetch');
            }
        };
    } catch (error) {
    }
};

export const addFavorite = movie => dispatch => {
    dispatch({
        type: ADD_FAVORITE_ITEM,
        payload: movie,
    });
};

export const removeFavorite = movie => dispatch => {
    dispatch({
        type: REMOVE_FAVORITE_ITEM,
        payload: movie,
    });
};

/*=========================================*/

export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
export const CHANGE = 'CHANGE';


export const addTodo = todo => dispatch => {
    dispatch({
        type: ADD_TODO_ITEM,
        payload: todo,
    });
};

export const removeTodo = todo => dispatch => {
    dispatch({
        type: REMOVE_TODO_ITEM,
        payload: todo,
    });
};

export const changeLanguge = lang => dispatch => {
    dispatch({
        type: CHANGE,
        payload: lang,
    });
};
