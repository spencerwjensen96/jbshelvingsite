import React from 'react'
import styled from 'styled-components'

import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from '../compnents/Jumbotron'
import Button from '../compnents/Button'
import ProductCard from '../compnents/ProductCard'
import Footer from '../compnents/Footer'

//photos
import frontImage from '../assets/images/StockPhotos/FinalPano.jpg'
import skillSaw from '../assets/images/HannahsPhotos/skillsaw3copy.jpg'
import furries from '../assets/images/HannahsPhotos/furries3.jpg'
import mainLogo from '../assets/images/icons/Logo.png'
import garageShelving from '../assets/images/GarageShelves/GarageShelving1.jpg'
import basementShelving from '../assets/images/BasementShelves/BasementShelving25.jpg'
import kitchenWise from '../assets/images/KitchenWise/KitchenWise1.jpg'

export default function Home(props) { 

    return (
        <Wrapper>
            <Carousel fade>
                <Carousel.Item>
                    <Jumbotron 
                    frontImage={frontImage} 
                    mainLogo={mainLogo} 
                    headerText=""
                    subheaderText=""/>
                </Carousel.Item>
                <Carousel.Item >
                    <Jumbotron 
                    frontImage={skillSaw} 
                    mainLogo={""} 
                    headerText="Custom to Your Space"
                    subheaderText="Give all your stuff it's own space."/>
                </Carousel.Item>
                <Carousel.Item>
                    <Jumbotron 
                    frontImage={furries} 
                    mainLogo={""} 
                    headerText="Fast, Quality Service"
                    subheaderText="We get the job done in a single day!"/>
                </Carousel.Item>
            </Carousel>
            <Content>
                <Row>
                    <Col size={2} margin={'2rem'}>
                        <CardHeader><b>Custom Quality Shelving You Can Afford</b></CardHeader>
                        <CardContent>JB Shelving specializes in custom shelving to maximize the storage areas of your home.
                        We value organization, and design projects to fit your individual needs giving you the peace of mind found 
                        in a well-organized space. 
            
                        As the only local company specializing in custom storage shelving, we are the most qualified and affordable
                        option for your shelving needs.
                        </CardContent>
                      </Col>
                      <Col size={1} margin={'2rem'}>
                          <ContactCard>
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
                <Row style={{paddingBottom: 0}}>
                    <Banner>Popular Products and Ideas</Banner>
                </Row>
                <Row >

                        <ProductCard
                            image={garageShelving}
                            title="Garage Shelving"
                            key="garage"
                            description="Our garage shelving is our highest selling product!"
                            buttonText="Discover more ideas"
                            to="/products/garage-shelving"
                            ></ProductCard>

                        <ProductCard
                            image={basementShelving}
                            title="Basement Shelving"
                            key="basement"
                            description="We have the experience and tools to securely attach to concrete walls."
                            buttonText="Discover more ideas"
                            to="/products/basement-shelving"
                            ></ProductCard>
                        <ProductCard
                            image={kitchenWise}
                            title="Kitchen Solutions"
                            key="kitchen"
                            description={["We are pleased to be partnered with ", 
                                            <i>KitchenWise of Salt Lake</i>,  
                                            "! We now offer organization solutions for your kitchen!"]}
                            buttonText="Discover more ideas"
                            to="kitchenwise"
                            ></ProductCard>
                </Row>
            </Content>
            <Footer/>
        </Wrapper>
    )
}

 const ContactCard = styled.div`
    background-color: white;
    line-height:2;
    border-radius: 5px;
    height: 100%;
    vertical-align: center;
    text-align: center;
 `
 const CardHeader = styled.h2`
    padding: 1rem;
    border-bottom: 1px solid black;
 `

 const CardContent = styled.p`
    font-size: 1.2rem;
 `

 const Banner = styled.h2`
    width: 100%;
    text-align: center;
    color: white;
    background-image: linear-gradient( 45deg, #0e246e, #102c8c, #102c8c, #102c8c, #0e246e);  
    padding: 0.5rem;
    border-radius: 0.5rem;
 `

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 3rem;
    @media all and (max-width: 950px) {
        flex-flow: column wrap;
        padding: 0;
    }
`

const Col = styled.div`
    flex: ${(props) => props.size};
    margin: ${(props) => props.margin};
`
const Wrapper = styled.div`
    position: relative;
    padding-bottom: 2.5rem
`

const Content = styled.div`
    min-height: 100vh;
    position: relative;
    padding-bottom: 2.5rem; 
    margin: 5vh 10vw 0px 10vw;

    display: flex;
    flex-flow: row wrap;
    align-items: stretch;

    line-height: 1.5;
`