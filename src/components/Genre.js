import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Release from './Release';

export default class Genre extends Component {
    render() {
        const match = this.props.match;
        const urlParams = match.params;    

        return (
            <div className='row'>
                <h3 className='col-md-12'>{urlParams.genre}</h3>
                <Route to={`${match.path}/:release`} component={Release} />
            </div>
        )
    }
}