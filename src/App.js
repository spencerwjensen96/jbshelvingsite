import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './compnents/Header';
import Footer from './compnents/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductsPage from './pages/ProductsPage'
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

//blue = #102c8c

//TODO
//contact form??
//cursor over picture for names
//connect it to Gatsby and Google analytics
//host

function App() {

  let module = require('./utils/PhotoGalleryImport');
  let garageShelves = module.garageShelves;
  let angleShelves = module.angleShelves;
  let workbenches = module.workbenches;
  let basementShelves = module.basementShelves;
  let closetShelves = module.closetsPantries;
  let bookShelves = module.bookShelves;
  let lockerShelves = module.lockersMudroomShelves;
  let otherProjects = module.otherProjects;

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Header headerText="Home Page" to="/"></Header>
            <Home />
            <Footer/>
          </Route>
          <Route path="/about">
            <Header headerText="About Us" to="/about"></Header>
            <About />
          </Route>
          <Route path="/products/garage-shelving">
            <Header headerText="Products" to="/products"></Header>
            <ProductsPage photos={garageShelves}/>
          </Route>
          <Route path="/products/angle-supports">
            <Header headerText="Products" to="/products"></Header>
            <ProductsPage photos={angleShelves}/>
          </Route>
          <Route path="/products/workbenches">
            <Header headerText="Products" to="/products"></Header>
            <ProductsPage photos={workbenches}/>
          </Route>
          <Route path="/products/basement-shelving">
            <Header headerText="Products" to="/products"></Header>
            <ProductsPage photos={basementShelves}/>
          </Route>
          <Route path="/products/closets-pantries">
            <Header headerText="Products" to="/products"></Header>
            <ProductsPage photos={closetShelves}/>
          </Route>
          <Route path="/products/bookshelves">
            <Header headerText="Products" to="/products"></Header>
            <ProductsPage photos={bookShelves}/>
          </Route>
          <Route path="/products/lockers-mudrooms">
            <Header headerText="Products" to="/products"></Header>
            <ProductsPage photos={lockerShelves}/>
          </Route>
          <Route path="/products/other-projects">
            <Header headerText="Products" to="/products"></Header>
            <ProductsPage photos={otherProjects}/>
          </Route>
          <Route path="/products">
            <Header headerText="Products" to="/products"></Header>
            <Products />
          </Route>
          <Route path="/contact">
            <Header headerText="Contact Us" to="/contact"></Header>
            <Contact />
          </Route>
          <Route path="/not-found">
            <Header headerText="" to="/not-found"></Header>
            <NotFound/>
          </Route>
          <Route path='/kitchenwise' component={() => { 
              window.location.href = 'http://www.kitchenwise.com'; 
              return null;
          }}/>
          <Route path="/">
            <Header headerText="Home Page" to="/"></Header>
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </Router>
      
  );
}

export default App;
