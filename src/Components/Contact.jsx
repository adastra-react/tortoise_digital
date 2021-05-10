import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Contact.css';
import Particles from 'react-particles-js';
import InstagramIcon from '../Assets/174834-social-media-logos/svg/029-instagram.svg';
import LinkedInIcon from '../Assets/174834-social-media-logos/svg/027-linkedin.svg';
import TwitterIcon from '../Assets/174834-social-media-logos/svg/008-twitter.svg';


function Contact() {
    return (
        <div className="contact">
            <Header/>
            <div className="contact-container">
                <div className="contact-text-cont">
                {/* <p className="contact-p-text">contact us</p> */}
                    <div className="contact-lg-text-cont">
                    <h1 className="contact-info-text">Send Us a Message.</h1>
                    <p className="contact-para">We are looking forward to helping you and your business achieve all its digital marketing goals. Feel free to contact us, and we will get back to you with any and all information that you need.</p>
                    </div>
                </div>
                <Particles
                id="particle-cont-contact"
                 params={{
                    "particles": {
                        "number": {
                            "value": 70,
                            "density": {
                                "enable": true,
                                "value_area": 2000.4120608655228
                            }
                        },
                        "color": {
                            "value": "#f3ec78"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 2,
                                "color": "#af4261"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "images":
                                {
                                  "src": "./react-logo.png",
                                  "width": 100,
                                  "height": 100,
                                  "opacity": 1
                                }
                            
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 10,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 10,
                            "color": "#af4261",
                            "opacity": 0.1,
                            "width": 0.9
                        },
                        "move": {
                            "enable": true,
                            "speed": 3,
                            "direction": "down",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": true,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "window",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "bubble"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 100,
                                "duration": 0.4,
                                "opacity": 1
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}
                 />
            </div>
            <div className="contact-block-bar">
                <div className="contact-block-bar-cont">
                    <div className="contact-bar-div">
                        <div className="contact-bar-card-cont">
                            <div className="contact-card">
                                <h2 className="card-contact-info-cont-heading">Find us</h2>
                                <div className="card-contact-info-cont">
                                    <p className="card-contact-info-cont-txt">14 Church Hill, Flanker, Saint James.</p>
                                    <p className="card-contact-info-cont-txt">Montego Bay, Jamaica</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-bar-card-cont">
                            <div className="contact-card">
                                <h2 className="card-contact-info-cont-heading">Contact us</h2>
                                <div className="card-contact-info-cont">
                                    <p className="card-contact-info-cont-txt">Send us an email:<a className='contact-bar-link' href = "mailto: tortoisedigitalmedia@gmail.com"> tortoisedigitalmedia@gmail.com</a> </p>
                                    <p className="card-contact-info-cont-txt">Give us a  call: <a  className='contact-bar-link' href="tel:123-456-7890">(876)894-6529</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-bar-card-cont">
                            <div className="contact-card">
                                <h2 className="card-contact-info-cont-heading">Follow us</h2>
                                <div className="card-social-info-cont">
                                    <a href="#"> <img className="contact-social-icon" src={InstagramIcon} /> </a>
                                    {/* <a href="#"> <img className="contact-social-icon" src={LinkedInIcon} /> </a>
                                    <a href="#"> <img className="contact-social-icon" src={TwitterIcon} /> </a> */}
                                </div>
                            </div>
                        </div>
                        <div className="contact-bar-card-cont">
                            <div className="contact-card">
                                <h2 className="card-contact-info-cont-heading">Work time</h2>
                                <div className="card-contact-info-cont">
                                    <p className="card-contact-info-cont-txt">Mon - Fri:</p>
                                    <p className="card-contact-info-cont-txt">9am - 6pm</p>
                                    <p className="card-contact-info-cont-txt">Sat:</p>
                                    <p className="card-contact-info-cont-txt">10am - 6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-container">
                    {/* <div style={{ height: '100%', width: '100%' }}>
                    <div class="mapouter">
                    <div class="gmap_canvas"> */}
                    <iframe width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=14%20Church%20Hill,%20Flanker,%20Saint%20James.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

                    </iframe>
                    {/* <a href="https://fmovies2.org">fmovies</a>
                    <br>
                    <a href="https://www.embedgooglemap.net">embedding google maps</a>
                    </div>
                </div>
                </div>
                </div> */}
            </div>
                <Footer/>
        </div>
    )
}

export default Contact
