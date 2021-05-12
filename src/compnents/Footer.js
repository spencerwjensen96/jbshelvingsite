import React from 'react';
import styled from "styled-components"

import mainLogo from '../assets/images/icons/Logo.png'
import facebookLogo from '../assets/images/icons/FacebookBlue.png'
import instagramLogo from '../assets/images/icons/InstagramBlue.png'
import googleLogo from '../assets/images/icons/GoogleBlue.png'

export default function Footer(props) {

function noticeAboutFreelance() {
    alert("Freelance Website Creation - from design and deployment\n\nContact Spencer Jensen\nspencerwjensen96@gmail.com")
}

return(
    <div>
        <FixedRow style={{justifyContent: 'space-around'}}>
            <img height='100px' src={mainLogo} alt="Logo"></img>
        </FixedRow>
        <FixedRow style={{justifyContent: 'center'}}>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/jbshelving.co/">
            <Logo height="100px" src={facebookLogo} alt="Find Us on Facebook"></Logo></a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jbshelving.co/">
            <Logo height="100px" src={instagramLogo} alt="Find Us on Instagram"></Logo></a>
            <a target="_blank" rel="noreferrer" href="https://www.google.com/search?q=JB+Shelving">
            <Logo height="100px" src={googleLogo} alt="Check out our Google Reviews"></Logo></a>
        </FixedRow>
    <ColoredBar>
        <FooterText>Copyright <span>&#169;</span> 2020 JB Shelving. All Rights Reserved</FooterText>
        <FooterText onClick={noticeAboutFreelance}>Created by Spencer Jensen</FooterText>
    </ColoredBar>
    </div>
)

}

const Logo = styled.img`
    margin: 0rem 2rem;
`

const FixedRow = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: row;
    padding-bottom: 3rem;
`

const ColoredBar = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4.5rem;
    background-image: linear-gradient(#102c8c, #102c8c, #0e246e);  
    text-align: center;
`

const FooterText = styled.div`
    padding-top: 0.5rem;
    color: white;
`