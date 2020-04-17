// Write your Character component here

import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from 'styled-components'


const CardBackground = styled.div`
    background-color:white;
    margin:2%;
    padding: 1%;
    border-radius:30px;
    `;


const Cards = props => {
console.log(props.cards);
    return (

<div className="cards">
    <div>Name: {props.cards.name}</div>
    <p>Height: {props.cards.height}</p>
    <p>Weight: {props.cards.mass}</p>
    <p>Hair Color: {props.cards.hair_color}</p>
    <p>Eye Color: {props.cards.eye_color}</p>
    <p>Skin Color: {props.cards.skin_color}</p>
    <p>Birth Year: {props.cards.birth_year}</p>
    <p>Gender: {props.cards.gender}</p>
    <p>Homeworld: {props.cards.homeworld}</p>
</div>


    )
}




export default Cards;