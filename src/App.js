import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './compnents/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <siteWrapper>
        <Switch>
          <Route path="/home">
            <Header headerText="Home Page" to="/"></Header>
            <Home />
          </Route>
          <Route path="/about">
            <Header headerText="About Us" to="/about"></Header>
            <About />
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
          <Route path="/">
            <Header headerText="Home Page" to="/"></Header>
            <Home/>
          </Route>
          
        </Switch>
      </siteWrapper>
    </Router>
      
  );
}

const siteWrapper = styled.div`
padding: 0;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
`

export default App;
