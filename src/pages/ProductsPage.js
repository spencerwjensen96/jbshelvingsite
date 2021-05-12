import React from 'react'
import styled from 'styled-components'

export default function ProductsPage(props) { 

    function handleOpen(){
        alert("clicked")
    }

    return (
        <>
            <h1 style={{margin: '5vh 5vw 0 5vw',textAlign: 'left', float: 'left'}}>Photo Gallery</h1>
            <h1 style={{margin: '5vh 5vw 0 5vw',textAlign: 'right', float: 'right'}}><Anchor href="/products">Back ></Anchor></h1>
            <div style={{clear: 'both'}}></div>
        
        <Wrapper>
            
            {props.photos.map(photo => {
                var img = new Image()
                img.src = photo
                var photoOrientation;
                if(img.naturalHeight > img.naturalWidth){
                    //portrait
                    photoOrientation = 'width'

                }
                else if (img.naturalHeight < img.naturalWidth){
                    //landscape
                    photoOrientation = 'height'
                }
                else{
                    //square
                    photoOrientation = 'width'
                }
                return(
                    <PictureWrapper key={photo} onClick={handleOpen}>
                        <Picture key={photo} src={photo} alt={photo} orient={photoOrientation}></Picture>
                    </PictureWrapper>
                )
            })}
        </Wrapper>
        </>
    )
}

const Anchor = styled.a`
    color: black;

    &:hover{
        opacity: 0.9;
        text-decoration: none;
        color: black;
    }
`

const Picture = styled.img`
    display: block;
    max-${props => props.orient}: 100%;
    ${props => props.orient}: 100%;
    margin-left: auto;
    margin-right: auto;
`

const PictureWrapper = styled.li`
    background-color: lightgrey;
    border: 1px solid black;
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