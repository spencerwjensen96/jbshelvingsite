import React from 'react';
import styled from "styled-components"

export default function Jumbotron(props) {
    const Image = styled.div`
    height: 100px;
    background-color: blue;
    
    `
    return(
        <div>
            <Image src={props.imagePath} alt={props.altText}></Image>
            <img src="../images/StockPhotos/FinalPano.jpg"/>
        </div>
    )
}
