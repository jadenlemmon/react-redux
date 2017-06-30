import {INCREASE, DECREASE, ADD, SUBTRACT, REQUEST_POSTS, POSTS_SUCCESS, POSTS_FAILED} from './types';

export function increase(value) {
    return {
        type: INCREASE,
        value
    }
}

export function decrease(value) {
    return {
        type: DECREASE,
        value
    }
}

export function add(value) {
    return {
        type: ADD,
        value
    }
}

export function subtract(value) {
    return {
        type: SUBTRACT,
        value
    }
}

export function requestPosts(value) {
    return {
        type: REQUEST_POSTS,
        value
    }
}

export function postsSuccess(value) {
    return {
        type: POSTS_SUCCESS,
        value
    }
}

export function postsFailed(value) {
    return {
        type: POSTS_FAILED,
        value
    }
}

export function fetchPosts(value) {
    return function (dispatch) {
        dispatch(requestPosts(value));
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(
                response => response.json(),
                error => dispatch(postsFailed(error))
            )
            .then(json =>
                dispatch(postsSuccess(json))
            )
    }
}