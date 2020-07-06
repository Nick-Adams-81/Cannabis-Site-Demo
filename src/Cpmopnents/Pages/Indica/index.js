import React from 'react';
import ItemCard from '../../ItemCard'
import indica from'./indica.json';
import './style.css';

function Indica () {
    return (
        
        <div class="container">
            <h2>Indica</h2>
            <div class="row">
                <div class="col-sm-4">
                    <ItemCard
                    id={indica[0].id}
                    image={indica[0].image}
                    name={indica[0].name}
                    price={indica[0].price}
                    />
                </div>
            </div>
        </div>
       
    )
}

export default Indica