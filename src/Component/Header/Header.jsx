import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import Button from 'react-bootstrap/esm/Button';
import { MdLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";


export const Header = (props) => {
  return(
    <div className='container main'>
       <Navbar expand="lg" className='mt-4' id="navbarNavDropdown">
    <Container>
      <Navbar.Brand href="#home">Ship<span className='pink'>Up</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown dropdown-slide dropdown-hover">
        
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Company
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <div className='container'>
            <div className='row mt-3'>
              <div className='col-md-6'>
                <h5>Company</h5>
                <div className='row justify-content-center align-items-center mt-3'>
                <div className='col-md-3 d-flex flex-row justify-content-center align-items-center'><MdLocationOn/></div>

<div className='col-md-9 d-flex flex-column justify-content-center'>
  <h6>About Us</h6>
<p className='bodytext'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, aliquid?</p>

</div>
              </div>

              <div className='row justify-content-center align-items-center'>
                <div className='col-md-3 d-flex flex-row justify-content-center align-items-center'><MdLocationOn/></div>

<div className='col-md-9 d-flex flex-column justify-content-center align-items-center'>
<p className='bodytext'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, aliquid?</p>

</div>
              </div>
              <div className='row justify-content-center align-items-center'>
                <div className='col-md-3 d-flex flex-row justify-content-center align-items-center'><MdLocationOn/></div>

<div className='col-md-9 d-flex flex-column justify-content-center align-items-center'>
<p className='bodytext'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, aliquid?</p>

</div>
              </div>
                </div>
               
              <div className='col-md-6'>
                <h5>Newsroom</h5>
                <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" width="270px" height="160px" className='image' alt="" />
                <div className='mt-3'>
                <a href="#">News and awards</a>

                </div>
                <div className='mt-3 learnnmore'><a href="#">Learn More <span className='arrowbtn'><FaArrowRight/></span></a></div>
                
              </div>

            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
         
          {}
          <Nav.Link href="#home">Services</Nav.Link>
          <Nav.Link href="#link">Solutions</Nav.Link>
          <Nav.Link href="#link">Industries</Nav.Link>
          <Nav.Link href="#link">Insights</Nav.Link>
          <Nav.Link href="#link">News and Media</Nav.Link>
        
        </Nav>
       
        <Button variant="outline-info" className='requestbtn btn'>Request Quote</Button>{"    "}{" "}
        <Button type="Join" className='ml btn joinbtn'>Join Now</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
    </div>
   )
  }
