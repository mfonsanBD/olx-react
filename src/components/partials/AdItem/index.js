import React from 'react';
import { Link } from 'react-router-dom';
import {Item} from './styled';

const LatestItems = (props)=>{
    let price = '';

    if(props.data.priceNegotiable){
        price = "Negociável!";
    }
    else{
        price = props.data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
    return(
        <Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.image} alt={props.data.title}/>
                </div>
                <div className="itemTitle">{props.data.title}</div>
                <div className="itemPrice">{price}</div>
            </Link>
        </Item>
    );
};

export default LatestItems;