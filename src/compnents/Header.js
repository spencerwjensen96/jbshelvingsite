import React from 'react';
import styled from "styled-components"

export default function Header(props) {

return(
  <HeaderWrapper>
    <StyledHeader href={props.to}>
        {props.headerText}
    </StyledHeader> 
    
    <Nav>
        <StyledLink href="/">
          Home
        </StyledLink>
        <StyledLink href="/about">
          About
        </StyledLink>
        <StyledLink href="/products">
          Products
        </StyledLink>
        <StyledLink href="/contact" style={{paddingRight: '10%'}}>
          Contact
        </StyledLink>       
    </Nav>
  </HeaderWrapper>
  );
}

// const Spacer = styled.div` 
//   width: 10vw

// `

const HeaderWrapper = styled.div`
  margin: 0; 
  background-image: linear-gradient(#102c8c, #102c8c, #0e246e);  
`

const Nav = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  list-style: none;
  margin: 0; 
  background-image: linear-gradient(#102c8c, #102c8c, #0e246e);   
  @media all and (max-width: 800px) {
    justify-content: space-around;
  }
  @media all and (max-width: 600px) {
      flex-flow: column wrap;
      padding: 0;
  }
`
const StyledHeader = styled.a`
  height: 100%;
  padding: 1rem;
  padding-left: 10%;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 600;
  display: block;
  float: left;
  color: white;
  &:hover {
    opacity: 0.5;
    text-decoration: none;
    color: white;
  }
  @media all and (max-width: 800px) {
    display: none; 
  }
`
const StyledLink = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;

  &:hover {
    opacity: 0.5;
    text-decoration: none;
    color: white;
  }

  @media all and (max-width: 600px) {
    text-align: center; 
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255,0.3); 
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); 
    &:last-of-type{
      border-bottom: none;
      padding-right: 10px !important;
    }
  }
`