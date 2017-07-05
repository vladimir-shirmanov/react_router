import React from 'react';

const Release = ({ match }) => {
    let template;

    if (match.params.release) {
        template = (
            <div className='col-md-12'>
                <p>{match.params.release}</p>
            </div>
        )
    } else {
        template = (
            <div className='col-md-12'>
                <p>Здесь будет список релизов</p>
            </div>
        );
    }

    return template;
};

export default Release;