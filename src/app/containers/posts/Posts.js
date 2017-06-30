import React from "react";
import { Route } from 'react-router-dom'
import PostsView from '../../views/posts/Posts';
import {connect} from "react-redux";
import { Link } from 'react-router-dom'

const PostsContain = (props) => {
    return (
        <div>
            <div id="main-contain">
                <Route exact path="/posts" component={PostsView} />
            </div>
        </div>
    );
};

export default connect()(PostsContain);