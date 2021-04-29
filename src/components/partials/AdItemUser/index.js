import React from 'react';
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
        <Item>
            <div className="itemImage">
                <img 
                    src={`http://alunos.b7web.com.br:501/media/${props.data.images[0].url}`} 
                    alt={props.data.title}
                    width="150"
                />
            </div>
            <div className="itemTitle">{props.data.title}</div>
            <div className="itemPrice">{price}</div>
        </Item>
    );
};

export default LatestItems;