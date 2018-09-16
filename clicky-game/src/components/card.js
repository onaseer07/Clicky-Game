import React from 'react';
import Style from './style.css';



const Card =(props) => (
    <div className='card m-3' data-id={props.dataId} onClick={props.handleClick}>
        <img id={props.id} className='card-img-top' src={props.url} alt={props.name}/>
    </div>
);

export default Card;