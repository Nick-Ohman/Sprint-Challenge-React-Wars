// Write your Character component here

import React, {useState, useEffect} from "react";

import styled from 'styled-components'

const CardHolder = styled.div`
    background-color:grey;
    padding:2%;
    margin:2%;
    border-radius:20px;
    

    &:hover{
        background-color:darkgray;
    }

`

const Cards = props => {
console.log(props.cards);
    return (

    <CardHolder className="cards">
        <h1>Name: {props.cards.name}</h1>
        <p>Height: {props.cards.height}</p>
        <p>Birth Year: {props.cards.birth_year}</p>

    </CardHolder>
        
    )
};
export default Cards;