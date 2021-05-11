import React from 'react'
import styled from 'styled-components'

import JumbotronVideo from '../compnents/JumbotronVideo'
import Footer from '../compnents/Footer'

import video from '../assets/images/Videos/shelving.mp4'
import imgJensenBros from '../assets/images/Family/OGShelversCropped.jpg'
import wayne from '../assets/images/Family/Wayne.jpg'
import family from '../assets/images/Family/crew2019Cropped.jpg'

export default function About(props) { 

    return (
        <AboutWrapper>
            <JumbotronVideo 
                src={video} 
                mainLogo={""} 
                headerText="About Us"
                subheaderText=""/>
            <Row>
                <Header>Meet the Original Shelving Crew</Header>
            </Row>
            <ImageWrapper>
                <Image src={imgJensenBros}/>
            </ImageWrapper>
            <Content>
                <Row>
                    <Col size={2} margin={'4rem 0 0 0'}>
                        <p>Jensen Brother Shelving started with humble roots in Provo when Dave, Wayne and Joe Jensen 
                            studied at BYU to become school teachers. They developed skills in construction from their youth, 
                            working alongside their father who was a general contractor. They quickly recognized the significant 
                            need for storage solutions and that most contractors are not interested in "small" jobs. So they 
                            specialized in custom garage and basement shelving, and have since built shelves in thousands of homes 
                            along the Wasatch Front.</p>
                        <br></br>
                        
                    </Col>
                </Row>
                <Row>
                    <Col size={3}>
                        <p>
                            Dave is now a financial advisor; Joe is a high school principal; and Wayne continues as the owner of JB Shelving. 
                            JB Shelving is proud of its roots and continues to work in the tradition of family. Now our full-time crew is 
                            composed of over 10 members of the Jensen family. Keeping the company in the family has allowed us to maintain 
                            the unmatched quality of our product and customer service.
                        </p>
                    </Col>
                    <Col size={1}>
                        <ImageWrapper>
                            <SmallImage src={wayne} width="75%"></SmallImage>
                        </ImageWrapper>
                    </Col>
                </Row>
            </Content>
            <Row>
                <Header>Meet the New Shelving Crew</Header>
            </Row>
            <ImageWrapper>
                <Image src={family}/>
            </ImageWrapper>
            <br></br>
            <Footer/>
            <h3 style={{marginTop: '-2rem'}}>Follow Us on Facebook and Instagram!</h3>
        </AboutWrapper>
    )
}

const Header = styled.h1` 
    padding: 2rem;
    margin-top: 2rem;
    width: 100%;
`

const AboutWrapper = styled.div`
    position: relative;
    padding-bottom: 2.5rem;
    text-align: center;
`
const Content = styled.div`
    min-height: 100vh;
    position: relative;
    padding-bottom: 2.5rem; 
    margin: 0px 10vw 0px 10vw;

    display: flex;
    flex-flow: row wrap;
    align-items: stretch;

    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.8;
    text-align: justify;
    @media all and (max-width: 600px) {
        margin: 0px 2vw 0px 2vw;
    }
    @media all and (max-width: 1250px) {
        font-size: 1.1rem;
        margin: 0px 5vw 0px 5vw;
    }
    
`

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media all and (max-width: 1100px) {
        flex-flow: column wrap;
        padding: 0;
    }
`

const Col = styled.div`
    flex: ${(props) => props.size};
    margin: ${(props) => props.margin};
    margin-top: ${(props) => props.marginTop};
`
const ImageWrapper = styled.div`
    text-align: center;
`

const Image = styled.img`
    object-fit: cover;
    
    width: 100vw;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const SmallImage = styled.img`
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`