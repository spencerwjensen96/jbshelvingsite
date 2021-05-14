import React from 'react';
import styled from "styled-components"

export default function Button(props) {

    return(
        <ButtonWrapper target="_blank" href={props.to}>
            {props.text}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.a`
    
    background-color: #102c8c;
    color: white;
    border-radius: 0.5rem;
    text-decoration: none;
    text-align: center;
    padding: 0.5rem;
    margin: 0.5rem;
    text-size: 80%;
    &:hover{
        text-decoration: none;
        opacity: 90%;
        color: white;
    }

`