import React from 'react';

const Header =(props) => (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-6 d-flex justify-content-end'>{props.message}</div>
            <div className='col-sm-6 d-flex justify-content-end'><strong>Score: {props.currentScore} | Top Score: {props.topScore}</strong></div>
        </div>
    </div>
);

export default Header;