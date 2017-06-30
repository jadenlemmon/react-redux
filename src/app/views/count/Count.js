import React from "react";
import './count.scss';
import {connect} from "react-redux";
import { increase, decrease } from '../../actions/actions'

const Count = ({ dispatch }) => {
    return (
        <div id="count-contain" className="mt-5">
            <div className="row text-center">
                <div className="col-6">
                    <button className="btn btn-primary" onClick={() => dispatch(increase())}>Increase</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary" onClick={() => dispatch(decrease())}>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default connect()(Count);
