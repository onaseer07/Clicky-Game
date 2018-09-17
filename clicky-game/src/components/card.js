import React from 'react';
import Style from './style.css';



const Card =(props) => (

    <img id={props.id} className='card card-img-top m-3' src={props.url} alt={props.name} onClick={props.handleClick}/>
);

export default Card;