import React from 'react';
import styled from "styled-components"

export default function JumbotronVideo(props) {
    
    return(
        <Container>
            <Overlay></Overlay>
            <Video playsInline autoPlay muted loop>
                <source src={props.src} type="video/mp4"></source>
            </Video>
            <Logo>
                <LogoImage src={props.mainLogo}/>
            </Logo>
            <Caption>
                <Header>{props.headerText}</Header>
                <Subheader>{props.subheaderText}</Subheader>
            </Caption>
        </Container>
    )
}

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
`

const Caption =styled.div`
    display: block;
`

const Video = styled.video`
    width: 100vw;
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
    z-index: 1;
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