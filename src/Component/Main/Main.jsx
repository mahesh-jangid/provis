import React, { useState } from 'react';
import { IoMdVideocam } from "react-icons/io";
import { MdLocationOn, MdShoppingBag } from "react-icons/md";
import img from "../../assets/img/hero-img.png";
import { Button, Modal, Container } from "react-bootstrap";
import "../../App.css";


/**
* @author
* @function Main
**/
const YouTubeModal = ({ show, handleClose, videoId }) => {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>YouTube Video</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 0, height: "300px" }}>
          <div className="container">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="YouTube Video"
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
                style={{ width: "100%", height: "300px" }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
export const Main = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [videoId, setVideoId] = useState("AwRfvtCpdiQ");
    const [isDemoButtonClicked, setDemoButtonClicked] = useState(false);
  
    const handleShow = () => {
      setShowModal(true);
      setDemoButtonClicked(true);
    };
  
    const handleClose = () => {
      setShowModal(false);
      setDemoButtonClicked(false);
    };
  return(
<>
<section id="hero">
        <div className="container ml-3">
          <div className="row">
            <div className="col-lg-6 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center mb-5 ml-4">
              <div>
                <h1>
                  Quick & Reliable <span className="text_color">Warehousing</span>
                </h1>
                <h1>
                  <span className="text_color">and Logistics</span> Solution
                </h1>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="row">
                  <div className="col-md-8 col-sm-12 fullwidth">
                    <div className="row ml-0 justify-content-start">
                      <div className="col-md-4 col-sm-4 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                        <Button className="joinbtn btn-lg btn-sm">Join Now</Button>
                      </div>
                      <div className="col-md-3 col-sm-4 col-lg-4 d-flex flex-column justify-content-center align-items-center ml-0">
                        <div className="circle d-flex flex-column justify-content-center align-items-center">
                          <IoMdVideocam />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 col-lg-4 d-flex  flex-column justify-content-center align-items-center">
                        <Button
                          className={`playdemo btn-lg btn-sm ${isDemoButtonClicked ? "hidden" : ""}`}
                          onClick={handleShow}
                        >
                          Play Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-none"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <YouTubeModal show={showModal} handleClose={handleClose} videoId={videoId} />
      <section id="pricesection">
        <Container className="mb-5 d-flex flex-column justify-content-center align-items-center">
          <div className="container_info d-flex flex-column">
            <div className="row">
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                <div class="form-group has-search">
                  <span className="origin inputcommon">Origin</span>
                  <span class="fa fa-search form-control-feedback">
                    <MdLocationOn />
                  </span>
                  <input type="text" class="form-control" placeholder="Search" />
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                <div class="form-group has-search">
                  <span className="origin inputcommon">Destination</span>
                  <span class="fa fa-search form-control-feedback">
                    <MdLocationOn />
                  </span>
                  <input type="text" class="form-control" placeholder="Enter Location" />
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                <div class="form-group has-search">
                  <span className="origin inputcommon">Weight</span>
                  <span class="fa fa-search form-control-feedback">
                    <MdShoppingBag />
                  </span>
                  <input type="text" class="form-control" placeholder="Search" />
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-center mt-4">
                <Button className="btn pricebtn btn-lg btn-sm">Check Price</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
</>
   )
  }
