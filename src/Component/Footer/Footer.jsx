import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem  ml-0"></i>ShipUp
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Explore</h6>
                <p>
                  <a href="#!" class="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Our Warehouses
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    News and Media
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Legal</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Terms
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Privacy
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <div className="row icon_center">
                  <div className="col-3 col-md-3 col-sm-3">
                    <a href="#!" class="me-4 text-reset">
                    <FaFacebook />
                    </a>
                  </div>
                  <div className="col-3 col-md-3 col-sm-3">
                    <a href="#!" class="me-4 text-reset">
                      <FaTwitter />
                    </a>
                  </div>
                  <div className="col-3 col-md-3 col-sm-3">
                    <a href="#!" class="me-4 text-reset">
                      <AiFillInstagram />
                    </a>
                  </div>
                  <div className="col-3 col-md-3 col-sm-3">
                    <a href="#!" class="me-4 text-reset">
                      <IoLogoWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
              <div className="footerbottom text-center">
              <div className="horizontalrow"><hr /></div>
              <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem  ml-0"></i>ShipUp.ng
                </h6>
              </div>
             
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
