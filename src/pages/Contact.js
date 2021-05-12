import React from 'react'
import styled from 'styled-components'

import Jumbotron from '../compnents/Jumbotron'
import Button from '../compnents/Button'
import Footer from '../compnents/Footer'

//photos
import frontImage from '../assets/images/HannahsPhotos/wood1copy.jpg'
import mainLogo from '../assets/images/icons/Logo.png'


export default function Contact(props) { 

    return (
        <Wrapper>
            <Jumbotron 
            frontImage={frontImage} 
            mainLogo={mainLogo} 
            headerText=""
            subheaderText=""/>

            <Content>
                <Row>
                    <Col size={2} margin={'2rem'}>
                        <CardHeader><b>Custom Quality Shelving You Can Afford</b></CardHeader>
                        <CardContent>We will come give you a FREE, NO OBLIGATION estimate for your customized storage project!! 
                            We can help you whether you already know exactly what you want or whether you need ideas for your storage space. 
                            Text or call today!
                            <br></br>
                            <br></br>
                            JB Shelving customers constantly comment on our excellent efficiency and non-invasive process from bidding 
                            to building. We rarely take more than 48 hours from first contact to personalized estimate.
                            <br></br>
                            <br></br>
                            We target Utah Valley and surrounding areas. However, if you live outside of those areas and want an estimate 
                            we can arrange a bid over the phone or facetime.
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
                                <abbr title="Phone">Phone: </abbr>
                                (801)-223-9173
                                <br></br>
                                <abbr title="Email">Email: </abbr>
                                <a href="mailto:wayne@jbshelving.com">wayne@jbshelving.com</a>
                                <br></br>
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
    font-size: 1.2rem;
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
    margin: 5vh 5vw 0px 5vw;

    display: flex;
    flex-flow: row wrap;
    align-items: stretch;

    line-height: 1.5;
`