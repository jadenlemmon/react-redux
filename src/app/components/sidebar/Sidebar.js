import React from "react";
import './sidebar.scss';
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            show: false
        };

        this.toggle = this.toggle.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    toggle()
    {
        this.setState({show: !this.state.show});
    }

    navigate(route)
    {
        this.toggle();

        this.context.router.history.push(route);
    }

    render()
    {
        return (
            <div id="sidebar-contain" className={this.state.show ? 'active': null}>
                <div className="toggle" onClick={this.toggle}>
                    <i className="fa fa-bars" aria-hidden="true" />
                </div>
                <div className="nav-contain">
                    <div className="nav-item active">
                        <a onClick={() => this.navigate('/counter')}>Counter</a>
                    </div>
                    <div className="nav-item">
                        <a onClick={() => this.navigate('/posts')}>Posts</a>
                    </div>
                </div>
            </div>
        )
    }
}

Sidebar.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Sidebar;