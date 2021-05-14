import React, { useState } from 'react'
import styled from 'styled-components'

export default function ProductsPage(props) { 

    const [galleryView, setGalleryView] = useState(false);
    const [activePicture, setActivePicture] = useState('');

    function checkOrientation(photo){
        var img = new Image()
        img.src = photo
        if(img.naturalHeight > img.naturalWidth){
            //portrait
            return 'width'

        }
        else if (img.naturalHeight < img.naturalWidth){
            //landscape
            return 'height'
        }
        else{
            //square
            return 'height'
        }
        
    }

    return (
        <div id="wrapper">
            {/* <h1 style={{margin: '5vh 5vw 0 5vw',textAlign: 'left', float: 'left'}}>Photo Gallery</h1>
            <h1 style={{margin: '5vh 5vw 0 5vw',textAlign: 'right', float: 'right'}}><Anchor href="/products">Back ></Anchor></h1>
            <div style={{clear: 'both'}}></div> */}
        {galleryView ? 
        <GalleryViewWrapper onClick={() => setGalleryView(false)}>
            <Exit style={{margin: '5vh 5vw 0 5vw',textAlign: 'right', float: 'right'}} >
                X</Exit>
            <Wrapper>
                <ActivePicture src={activePicture} orient={checkOrientation(activePicture)} alt={activePicture}></ActivePicture>
            </Wrapper>
        </GalleryViewWrapper>
        :
        <>
        <h1 style={{margin: '5vh 5vw 0 5vw',textAlign: 'left', float: 'left'}}>Photo Gallery</h1>
            <h1 style={{margin: '5vh 5vw 0 5vw',textAlign: 'right', float: 'right'}}><Anchor href="/products">Back ></Anchor></h1>
            <div style={{clear: 'both'}}></div>
        <Wrapper>
            {props.photos.map(photo => {
                return(
                    <PictureWrapper key={photo}>
                        
                        <Picture key={photo} src={photo} alt={photo} orient={checkOrientation(photo)} onClick={() => {setGalleryView(true); setActivePicture(photo)}}></Picture>
                    </PictureWrapper>
                )
            })}
        </Wrapper>
        </>
        }
        </div>
    )
}

const Exit = styled.h1`

    margin: '5vh 5vw 0 5vw';
    text-align: 'right';
    float: 'right';

    &:hover{
        cursor: pointer;
    }
`

const GalleryViewWrapper = styled.div`
    height: 100vh;
    margin: 0 5vw 5vh 5vw;
    text-align: center;
    overflow: hidden;
`

const Anchor = styled.a`
    color: black;
    z-index: 1;
    &:hover{
        opacity: 0.9;
        text-decoration: none;
        color: black;
    }
`

const ActivePicture = styled.img`
    display: block;

    margin: 10vh auto 5vh auto ;
    border: 1px solid black;
    
   // max-${props => props.orient}: 100%;
    //${props => props.orient}: 100%;
    height: 90vh;
`

const Picture = styled.img`
    display: block;
   
    max-${props => props.orient}: 100%;
    ${props => props.orient}: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
`

const PictureWrapper = styled.li`
    background-color: white;
    //border: 1px solid black;
    width: 250px;
    height: 250px;
    margin: 10px;
    overflow: hidden;
    
    &:hover{
        opacity:0.9;
    }
    
`

const Wrapper = styled.ul`
    padding: 0;
    margin: 5vh 5vw 0 5vw;
    list-style: none;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center; 
    @media all and (max-width: 800px) {
        margin: 0;
    }
`