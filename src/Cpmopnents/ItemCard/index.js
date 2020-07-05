import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css';


function ItemCard(props) {
    <div>
        <div className="img-container">
            <img src={props.image} />
        </div>
        <br></br>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox'}} />    
    </div>
}

export default ItemCard