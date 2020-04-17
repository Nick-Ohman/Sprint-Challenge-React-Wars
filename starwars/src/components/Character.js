// Write your Character component here

import React, {useState, useEffect} from "react";

import styled from 'styled-components'

const CardHolder = styled.div`
    background-color:grey;
    padding:2%;
    margin:2%;
    border-radius:20px;
    width:42%;
    

    &:hover{
        background-color:darkgray;
    }

`

const P = styled.p`
    color:white;

`
const Header = styled.h1`
    color: white;
    &:hover{
        color:black;
    }
`


const Cards = props => {
console.log(props.cards);
    return (

    <CardHolder className="cards">
        <Header>Name: {props.cards.name}</Header>
        <P>Height: {props.cards.height}</P>
        <P>Birth Year: {props.cards.birth_year}</P>

    </CardHolder>
        
    )
};
export default Cards;