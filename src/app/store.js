import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {count} from './reducers/countReducer';
import {posts} from './reducers/postsReducer';

export default createStore(
    combineReducers({
        count,
        posts
    }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);