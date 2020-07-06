import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css';


function ItemCard(props) {
    return (
    <div>
        <div className="img-container">
            <img src={props.image} height="140" width="140"/>
        </div>
        <br></br>
        <br></br>
        <h5>{props.name}</h5>
        <p>{props.price}</p>
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox'}} />    
    </div>
    )
}

export default ItemCard;