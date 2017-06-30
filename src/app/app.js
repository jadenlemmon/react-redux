import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import CounterContainer from './containers/counter/Counter';
import PostsContainer from './containers/posts/Posts';
import Nothing from './views/404/404';
import Sidebar from './components/sidebar/Sidebar';

const history = createBrowserHistory();

const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
                <Sidebar />
                <Route path="/counter" component={CounterContainer} />
                <Route path="/posts" component={PostsContainer} />
                <Route exact path="/" component={Nothing}/>
            </div>
        </BrowserRouter>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;