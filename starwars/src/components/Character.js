// Write your Character component here

import React, {useState, useEffect} from "react";

import styled from 'styled-components'



const Cards = props => {
console.log(props);
    return (

    <div className="cards">
        <h1>Name: {props.cards.name}</h1>
        <p>Height: {props.cards.height}</p>
        <p>Birth Year: {props.cards.birth_year}</p>

    </div>
        
    )
};
export default Cards;