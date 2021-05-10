import React from 'react'
import './Home.css'
import Particles from 'react-particles-js';
import Header from '../Components/Header'; 
function Home() {
    return (
        <div className='home'>
            <Header/>
        
            <div className='landing-section'>
                    <h1 className="landing-section-title">Digital Marketing <br/> agency</h1> 
                    <div><p className="landing-section-sub-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, voluptas?</p></div>   
            </div>
            <Particles
                className="particle-cont"
                 params={{
                    "particles": {
                        "number": {
                            "value": 90,
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
            <div className="featured-projects-cont">
                <div className="f-p-cont">
                    <h1 className='f-p-title'>Featured <strong>projects</strong></h1>
                    <h4 className='f-p-sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, exercitationem!</h4>
                </div>
                <div className="projects-cont">
                    <div className="top-display">
                        <div className="showcase-1 showcase-1-top">
                            <div className="showcase-cont-large">
                                <div className="category-cont">
                                    <p className="category-txt">User Interface</p>
                                    <h3 className="showcase-title">iPhone X mockup - 3D model</h3>
                                </div>
                                <div className="detail-link-cont">
                                    <a className="showcase-link" href="#">details</a>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-2 showcase-2-top">
                            <div className="showcase-cont">

                            </div>
                        </div>
                    </div>
                    <div className="bottom-display">
                        <div className="showcase-2 showcase-2-bottom">
                            <div className="showcase-cont">

                            </div>
                        </div>
                        <div className="showcase-1 showcase-1-bottom">
                            <div className="showcase-cont-large">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
