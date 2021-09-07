// import React,{useState} from 'react';
import './App.css';
import "./App.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel';
import MainContent from './components/mainContent';
import Mobile from "./Mobile";
import Music from "./Headphone";
import Shoes from "./Shoes";
import Mens from "./Men";
import Womens from "./Women";
import Appliences from "./Appliences";
import Footer from "./components/Footer";
import About from "./components/About";
const App = () => {

  //   const [menuData,setMenuData]  = useState(product_card);


  // const filterItem = (category)=> {
  //   const updatedList = product_card.filter((item) => {
  // return item.category === category;

  // });
  // setMenuData(updatedList);
  // };

  return (
    <>
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark" expand="lg" fixed="top" >
            <Container>
              <Navbar.Brand as={Link} to={"/MainContent"}>Sd-shop</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                  <Nav.Link as={Link} to={"/MainContent"}>Home</Nav.Link>
               
                  <NavDropdown title="Items" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/mobile"}>Mobile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Music"}>Headphone/Earphone/Speaker</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Shoes"} >Shoes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Mens"}>Men,s Wear</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Womens"}>Women,s Wear</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Appliences"}>Appliences</NavDropdown.Item>
               
                  </NavDropdown>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>


         



          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="first"
                src="https://storiesflistgv2.azureedge.net/stories/2017/09/mehengaai_mainbanner.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>1</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="second "
                src="https://storiesflistgv2.azureedge.net/stories/2017/09/iphone8_mainbanner2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>2</h3>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="third"
                src="https://savinghop.in/wp-content/uploads/2016/08/Shoes-Offers.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>3</h3>
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         
  
         

        </div>
      
       
        <Switch>
          <Route path="/Mobile">
            <Mobile />
          </Route>
          <Route path="/MainContent">
          <MainContent />
          </Route>

          <Route path="/Music">
          <Music />
          </Route>


          <Route path="/Shoes">
          <Shoes />
          </Route>



          <Route path="/Mens">
          <Mens />
          </Route>



          <Route path="/Womens">
          <Womens />
          </Route>


          <Route path="/Appliences">
          <Appliences />
          </Route>


        </Switch>
        </Router>
        <About />
        <Footer />
     
    </>

  );
}


export default App;





