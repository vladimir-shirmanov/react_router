import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
    render() {
        return (
            <div className='container'>
                <div className='col-md-12'>
                    The page not found. Come back to <Link to='/'>Home</Link>?
                </div>
            </div>
        )
    }
}