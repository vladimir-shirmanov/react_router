import React, { Component } from 'react';
import Admin from '../components/Admin';
import Genre from '../components/Genre';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import List from '../components/List';

import { Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1>App</h1>
                <Router history={browserHistory}>
                    <div>
                        <ul>
                            <li><Link to='/admin'>Admin</Link></li>
                            <li><Link to='/genre'>Genre</Link></li>
                            <li><Link to='/list'>List</Link></li>
                        </ul>
                        <div>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route path='/admin' component={Admin} />
                                <Route path='/genre/:genre' component={Genre} />
                                <Route path='/list' component={List} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>)
    }
}