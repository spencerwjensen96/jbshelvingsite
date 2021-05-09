import Jumbotron from '../compnents/Jumbotron'


export default function Home(props) { 

    return (
        <div>
            <h1>
                Home Page
            </h1>
            <Jumbotron 
                imagePath="../images/StockPhotos/FinalPano.jpg"
                altText="Home Page Jumbotron"
            ></Jumbotron>
        </div>
    )
}