import {
    REQUEST_POSTS,
    POSTS_SUCCESS,
    POSTS_FAILED}
from '../actions/types';

export const posts = (POSTS = [], action) => {
    switch (action.type) {
        case POSTS_SUCCESS :
            return POSTS = action.value;
        default:
            return POSTS;
    }
};