import React from 'react';
import './Footer.css';
import Particles from 'react-particles-js';
import InstagramIcon from '../Assets/174834-social-media-logos/svg/029-instagram.svg';
import LinkedInIcon from '../Assets/174834-social-media-logos/svg/027-linkedin.svg';
import TwitterIcon from '../Assets/174834-social-media-logos/svg/008-twitter.svg';
// import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
              <div className="footer-top-info-section">
                 <div>
                     <h2 className="footer-heading">TORTOISE DIGITAL</h2>
                     <p className="footer-sub-heading">"In today's ever shifting digital and technological age, <br/> those who are unable to pivot and adjust will be left behind." - Kevin Watson, CEO</p>
                 </div>
                 <div>
                     <div className="social-cont">
                         <a href="https://instagram.com/tortoisejamaica?igshid=1ua65cbw3tijl"> <img className="social-icon" src={InstagramIcon} /> </a>
                         {/* <a href="#"> <img className="social-icon" src={LinkedInIcon} /> </a>
                         <a href="#"> <img className="social-icon" src={TwitterIcon} /> </a> */}
                     </div>

                 </div>
              </div>
              <div className="footer-bottom-info-section">
                    <p className="contact-link">Send us an email:<a className='email-link' href = "mailto: tortoisedigitalmedia@gmail.com"> tortoisedigitalmedia@gmail.com </a> </p>
                    <p className="contact-link"><a className='email-link' target="_blank" >©️ 2021 Tortoise Digital Media. All rights reserved</a> </p>
                    <p className="contact-link" >Give us a  call: <a  className='email-link' href="tel:(876)894-6529"> (876)894-6529</a></p>
              </div> 
            </div>
            <Particles
                id="particle-footer"
                 params={{
                    "particles": {
                        "number": {
                            "value": 30,
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
                                //   "opacity": 1
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
                            "value": 70,
                            "random": false,
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
                            "speed": .2,
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
        
    )
}

export default Footer;
