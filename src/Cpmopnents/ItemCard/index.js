import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css';


function ItemCard(props) {
    return (
        <div className="item-card">
            <div className="img-container">
                <img src={props.image} height="140" width="140" />
            </div>
            <h5>{props.name}</h5>
            <h5>{props.price}</h5>
            <h5>Add to Cart</h5>
            <div className="check-box">
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            </div>
        </div>
    )
}

export default ItemCard;