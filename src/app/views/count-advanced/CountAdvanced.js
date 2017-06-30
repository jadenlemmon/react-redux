import React from "react";
import '../count/count.scss';
import {connect} from "react-redux";
import { add, subtract } from '../../actions/actions'

const CountAdvanced = ({ dispatch }) => {
    return (
        <div id="count-contain" className="mt-5">
            <div className="row text-center">
                <div className="col-6">
                    <button className="btn btn-primary" onClick={() => dispatch(add(5))}>Add 5</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary" onClick={() => dispatch(subtract(5))}>Minus 5</button>
                </div>
            </div>
        </div>
    );
};

export default connect()(CountAdvanced);
