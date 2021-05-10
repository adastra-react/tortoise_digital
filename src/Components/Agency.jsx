import React from 'react';
import Header from './Header';
import './Agency.css';
import Footer from '../Components/Footer';
import Particles from 'react-particles-js';

function Agency() {
    return (
        <div className="agency">
            <Header/>
            <div className="agency-container">
                <h1 className="agency-container-main-text">Short Story About Our Agency</h1> 
               
                <p className="landing-section-sub-text">
                As a byproduct of the onslaught of the Covid-19 pandemic, Tortoise Digital Media CEO, Kevin Watson, identified the struggle that businesses now faced - sales revenue had plummeted and many had to eventually close their doors. 
                <br/>
                <br/>
                Upon further analysis though, a detrimental pattern was discovered, and a solution unearthed - most businesses have focused their efforts into developing their brick and mortar location/s, and had completely neglected their online presence. The solution? More emphasis needed to be placed on not just creating, but effectively managing their digital presence. 
                <br/>
                <br/>
                From that thought, Tortoise Digital Media was given life and has been offering its services since, aiding businesses in capitalizing on the plethora of benefits presented to them.
                </p> 
            </div>
            <Particles
                id="particle-cont"
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
                 {/* <div className="picture-section">
                    <div className="picture-section-container">
                        
                    </div>
                 </div> */}
                 <div className="">

                 </div>
                 <Footer/>
        </div>
    )
}

export default Agency;