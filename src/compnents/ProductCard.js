import React from 'react';
import styled from "styled-components"

import Button from './Button'

export default function ProductCard(props) {

    return(
        <CardWrapper>
            <Image src={props.image}/>
            <Title>
                {props.title}
            </Title>
            <Description>
                {props.description}
            </Description>
            <ButtonWrapper>
                <Button text={props.buttonText} to={props.to}/>
            </ButtonWrapper>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: left;
    margin: 15px  20px;
    // padding: 15px 20px;
    border-radius: 2px;
    border: 1px solid lightgrey;
    
`

const Image = styled.img`
    object-fit: cover;
    height: 200px;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
`

const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1rem;
    padding-bottom: 0;
    margin-bottom: 0;

`

const Description = styled.div`
    flex: 1;
    padding: 1rem;

`

const ButtonWrapper = styled.div`
    padding: 1rem;
    border-top: 1px solid lightgrey;
    background-color: #f2f5f3;
`