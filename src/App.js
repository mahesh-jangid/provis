import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Component/Header/Header";
import { Footer } from "./Component/Footer/Footer";
import img from "./assets/img/hero-img.png";
import Button from "react-bootstrap/esm/Button";
import { IoMdVideocam } from "react-icons/io";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { FaUser, FaEnvelope, FaMapMarker, FaShare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";

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
function App() {
  const [showModal, setShowModal] = useState(false);
  const [videoId, setVideoId] = useState("AwRfvtCpdiQ");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="App">
      <Header />
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center mb-5">
              <div>
                <h1>
                  Quick & Reliable{" "}
                  <span className="text_color">Warehousing</span>
                </h1>
                <h1>
                  <span className="text_color">and Logistics</span> Solution
                </h1>
                <p>
                Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
                <div className="row">
                  <div className="col-md-8 col-sm-12 fullwidth" >
                    <div className="row ml-0">
                      <div className="col-md-4 col-sm-4 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                        <Button type="Join" className="joinbtn">
                          Join Now
                        </Button>
                      </div>
                      <div className="col-md-3 col-sm-4 col-lg-4 d-flex flex-column justify-content-center align-items-center ml-0">
                        <div className="circle d-flex flex-column justify-content-center align-items-center">
                          <IoMdVideocam />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                        <button className="playdemo" onClick={handleShow}>
                          Play Demo
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-none"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={img} class="img-fluid" alt=""></img>
            </div>
          </div>
        </div>
      </section>
      <YouTubeModal
        show={showModal}
        handleClose={handleClose}
        videoId={videoId}
      />

      {/* <!-- End Hero --> */}
      <section id="pricesection">
        <div className="container mb-5 d-flex flex-column justify-content-center align-items-center">
          <div className="container_info d-flex flex-column">
            <div className="row">
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                <div class="form-group has-search">
                <span className="origin inputcommon">Origin</span>

    <span class="fa fa-search form-control-feedback"><MdLocationOn/></span>
    <input type="text" class="form-control" placeholder="Search"/>
  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
              <div class="form-group has-search">
              <span className="origin inputcommon">Destination</span>

                  <span class="fa fa-search form-control-feedback"><MdLocationOn/></span>
                  <input type="text" class="form-control" placeholder="Enter Location"/>
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
              <div class="form-group has-search">
              <span className="origin inputcommon">Weight</span>

                  <span class="fa fa-search form-control-feedback"><MdShoppingBag />
</span>
                  <input type="text" class="form-control" placeholder="Search"/>
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-center mt-4">
              <div class="form-group has-search">
                  
              <Button type="Join" className='ml btn joinbtn'>Check Price</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
