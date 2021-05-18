import React from 'react';
import styled from "styled-components"

export default function Jumbotron(props) {
    
    return(
        <Container>
            <ImageWrapper style={props.background==="lighten" ? {opacity: 0.5, backgroundColor: "rgba(255,255,255)"} : {opacity: 1}}>
                <Image src={props.frontImage} style={(props.headerText==="") ? {opacity: 1} : {opacity: 0.5}}/>
            </ImageWrapper>
            <Logo>
                <LogoImage src={props.mainLogo} />
            </Logo>
            <Caption>
                <Header>{props.headerText}</Header>
                <Subheader>{props.subheaderText}</Subheader>
            </Caption>
        </Container>
    )
}

const ImageWrapper = styled.div`

    z-index: 1;
    background-color: black;
`

const Caption =styled.div`
    display: block;
`

const Image = styled.img`
    width: 100vw;
    background-color: black;
    object-fit: cover;
    height: 444px;
`
const Container = styled.div`
    position: relative;
    text-align: center;
    color: white;
`
const Logo = styled.div`
    position: absolute;
    height: 40%;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
    @media all and (max-width: 600px) {
        height: 25%;
        left: 40%;
    }
`
const LogoImage = styled.img`
    height: 100%;
`
const Header = styled.div`
    position: absolute;
    color: white;
    font-size: 3.3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.1;
    @media all and (max-width: 600px) {
        font-size: 2rem;
    }
`
const Subheader = styled.div`
    position: absolute;
    color: white;
    font-weight: 500;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
`