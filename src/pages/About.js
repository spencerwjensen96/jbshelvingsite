import React from 'react'
//import styled from 'styled-components'

import Jumbotron from '../compnents/Jumbotron'

import frontVideo from '../assets/images/HannahsPhotos/chopsaw1.jpg'

export default function About(props) { 

    return (
        <div>
            <h1>
                About Page
            </h1>
            <Jumbotron 
                frontImage={frontVideo} 
                mainLogo={""} 
                headerText="About"
                subheaderText=""/>
        </div>
    )
}
