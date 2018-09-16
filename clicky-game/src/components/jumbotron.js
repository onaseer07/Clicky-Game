import React from 'react';
import Style from './style.css';

const Jumbotron =(props) => (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-12 d-flex justify-content-center'>
                <img className='img-fluid' src='./images/bg.jpg' alt='Avengers Clicky  Game'/>
            </div>
            <div className='col-sm-12 d-flex justify-content-center align-items-center'><h3 className='text-center'><strong>{props.gameName}</strong></h3></div>
            <div className='col-sm-12 text-center'>{props.rules}</div> 
        </div>
    </div>
);

export default Jumbotron;