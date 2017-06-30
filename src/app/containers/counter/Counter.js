import React from "react";
import { Route, Redirect } from 'react-router-dom'
import './counter.scss';
import CountView from '../../views/count/Count';
import CountViewAdvanced from '../../views/count-advanced/CountAdvanced';
import PostsView from '../../views/posts/Posts';
import {connect} from "react-redux";
import { Link } from 'react-router-dom'

const CounterContain = (props) => {
    return (
        <div>
            <div id="main-contain">
                <div id="header" className="d-flex align-items-center justify-content-center">
                    <h1>Counter</h1>
                </div>
                <h1 className="text-center count">{props.count}</h1>
                <Route exact path="/counter/basic" component={CountView} />
                <Route exact path="/counter/advanced" component={CountViewAdvanced} />
                <Redirect from="/counter" to="/counter/basic"/>
                <div id="bottom-nav" className="mt-5">
                    <div className="container">
                        <div className="col-md-6 offset-md-3">
                            <div className="row text-center">
                                <div className="col">
                                    <Link to="/counter/basic"><button className="btn">Basic Controls</button></Link>
                                </div>
                                <div className="col">
                                    <Link to="/counter/advanced"><button className="btn">Advanced Controls</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return { count: state.count }
}

export default connect(mapStateToProps)(CounterContain);