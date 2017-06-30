import React from "react";
import {connect} from "react-redux";
import {fetchPosts} from '../../actions/actions';

class Posts extends React.Component {

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.fetchPosts();
    }

    render()
    {
        return (
            <div id="posts-contain" className="mt-5">
                <div className="container">
                    <div className="row">
                        {
                            this.props.posts.map((post) => {
                                return (
                                    <div className="col-4" key={post.id}>
                                        <div className="post">
                                            <h4>{post.title}</h4>
                                            <p>{post.body}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps, {fetchPosts})(Posts);
