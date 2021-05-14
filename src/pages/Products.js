import React from 'react'
import styled from 'styled-components'

import Jumbotron from "../compnents/Jumbotron";
import ProductCard from '../compnents/ProductCard'
import Button from '../compnents/Button'
import Footer from '../compnents/Footer'

import frontImage from '../assets/images/HannahsPhotos/tools1.jpg'

import garageShelving from '../assets/images/GarageShelves/GarageShelving1.jpg'
import angleSupports from '../assets/images/AngleSupports/AngleShelves7.jpg'
import workbench from '../assets/images/Workbenches/Workbench1.jpg'

import basementShelving from '../assets/images/BasementShelves/BasementShelving25.jpg'
import closetShelving from '../assets/images/ClosetShelves/ClosetShelves3.jpg'
import bookshelves from '../assets/images/Bookshelves/Bookshelves1.jpg'

import lockersMudrooms from '../assets/images/LockersMudrooms/Lockers1.jpg'
import otherProjects from '../assets/images/OtherProjects/Trailer.jpg'
import kitchenWise from '../assets/images/KitchenWise/KitchenWise1.jpg'

import workers from '../assets/images/HannahsPhotos/megan.jpg'

export default function Products(props) { 

    return (
        <Wrapper>
            <Jumbotron
                frontImage={frontImage} 
                mainLogo={""} 
                headerText="Products Gallery"
                subheaderText="With our wide variety, anything is possible!"/>
            <Content>
                <Row>
                    <Header>Here are some ideas to get you thinking about what would work best for you!</Header>
                </Row>
                <Row style={{paddingBottom: 0}}>
                    <Banner>Garage Shelving</Banner>
                </Row>
                <Row >
                    <ProductCard
                        image={garageShelving}
                        title="Garage Shelving"
                        description="Our garage shelving is our highest selling product!"
                        buttonText="Discover more ideas"
                        to="/products/garage-shelving"
                        ></ProductCard>

                    <ProductCard
                        image={angleSupports}
                        title="Angle Supports"
                        description="Get your garage organized without compromising walking space."
                        buttonText="Discover more ideas"
                        to="/products/angle-supports"
                        ></ProductCard>
                    <ProductCard
                        image={workbench}
                        title="Workbenches"
                        description="Complete your garage with a space where you can sit down and work."
                        buttonText="Discover more ideas"
                        to="/products/workbenches"
                        ></ProductCard>
                </Row>
                <Row style={{paddingBottom: 0}}>
                    <Banner>Indoor Shelving</Banner>
                </Row>
                <Row >
                    <ProductCard
                        image={basementShelving}
                        title="Basement Shelving"
                        description="Get your garage organized without compromising walking space."
                        buttonText="Discover more ideas"
                        to="/products/basement-shelving"
                        ></ProductCard>
                    <ProductCard
                        image={closetShelving}
                        title="Closets and Pantries"
                        description="One of our highest demanded products."
                        buttonText="Discover more ideas"
                        to="/products/closets-pantries"
                        ></ProductCard>
                    <ProductCard
                        image={bookshelves}
                        title="Bookshelves"
                        description="Make any room in your home feel sophisticated with custom bookshelves."
                        buttonText="Discover more ideas"
                        to="/products/bookshelves"
                        ></ProductCard>
                </Row>
                <Row style={{paddingBottom: 0}}>
                    <Banner>Other Projects</Banner>
                </Row>
                <Row >
                    <ProductCard
                        image={lockersMudrooms}
                        title="Lockers and Mudrooms"
                        description="Family friendly organization that can turn your garage into the favorite room in the house."
                        buttonText="Discover more ideas"
                        to="/products/lockers-mudrooms"
                        ></ProductCard>

                    <ProductCard
                        image={otherProjects}
                        title="Other Projects"
                        description="There is no limits. If you need shelves anywhere, gives us a call."
                        buttonText="Discover more ideas"
                        to="/products/other-projects"
                        ></ProductCard>
                    <ProductCard
                        image={kitchenWise}
                        title="Kitchen Solutions"
                        description={["We are pleased to be partnered with ", 
                                        <i>KitchenWise of Salt Lake</i>,  
                                        "! We now offer organization solutions for your kitchen!"]}
                        buttonText="Discover more ideas"
                        to="kitchenwise"
                        ></ProductCard>
                </Row>
                <Row>
                    <Col size={1} margin={'2rem'}>
                        <img width="100%" src={workers} alt="workers" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}></img>
                    </Col>
                    <Col size={1} margin={'2rem'}>
                    <ContactCard width="100%">
                            <CardHeader>Contact Us</CardHeader>
                            <address>
                                <strong>Wayne Jensen</strong>
                                <br></br>
                            </address>
                            <address>
                                <strong title="Phone">Call or Text: </strong>
                                (801)-223-9173
                                <br></br>
                                <strong title="Email">Email: </strong>
                                <a href="mailto:wayne@jbshelving.com?subject=Communication from Website
                                        &body=I%20would%20like%20to%20request%20a%20FREE%20bid.%0D%0A%0D%0A
                                        
                                        Name:%0D%0A
                                        Address:%0D%0A
                                        Phone number:">
                                        wayne@jbshelving.com</a>
                                <br></br>
                                
                            </address>
                            <Button text="Contact us for a FREE bid" to="/contact"/>
                          </ContactCard>
                    </Col>
                </Row>
            </Content>
            <Footer/>
        </Wrapper>
    )
}

const ContactCard = styled.div`
background-color: white;
line-height:2;
font-size: 120%;
border-radius: 5px;
height: 100%;
margin: 0rem 1.5rem 0rem 1.5rem;
vertical-align: center;
text-align: center;
`
const CardHeader = styled.h2`
padding: 1rem;
border-bottom: 1px solid black;
`

const Banner = styled.h2`
    width: 100%;
    text-align: center;
    color: white;
    background-image: linear-gradient( 45deg, #0e246e, #102c8c, #102c8c, #102c8c, #0e246e);  
    padding: 0.5rem;
    border-radius: 0.5rem;
`

const Header = styled.h1`
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;
`

const Wrapper = styled.div`
    position: relative;
    padding-bottom: 2.5rem;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 3rem;
    justify-content: center;
    @media all and (max-width: 950px) {

        flex-flow: column wrap;
        padding: 0;
    }
`

const Col = styled.div`
    flex: ${(props) => props.size};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    justify-content: center;
`

const Content = styled.div`
    min-height: 100vh;
    position: relative;
    margin: 5vh 10vw 0px 10vw;

    display: flex;
    flex-flow: row wrap;
    align-items: stretch;

    line-height: 1.5;
`