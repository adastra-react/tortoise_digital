import React, { useState } from 'react'
import './Home.css';
import WebIcon from '../Assets/Images/infobox1.png'
import Particles from 'react-particles-js';
import Header from '../Components/Header';
import Footer from '../Components/Footer'; 
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Home() {

    const [showInner, setShowInner] = useState(false)



    return (
        <div className='home'>
            <Header/>
            <div className='landing-section'>
                    <h1 className="landing-section-title">Digital Marketing <br/> Agency</h1> 
                    <div>
                        <p className="landing-section-sub-text">"In today's ever shifting digital and technological age, those who are unable to pivot and adjust will be left behind." - Kevin Watson, CEO

                        <br/>
                        <br/>

At Tortoise, we aim to aid businesses and individuals in making the transition to the digital space as seamless as possible, in order to capitalize on the plethora of benefits available through having an online presence.

{/* Comprising of a team of extraordinarily talented and certified individuals, our services encompass Social Media Management and Promotion, Graphic Design, and Website and App Development. Paired with our enthusiasm for our craft, we believe that our team is ideally suited to aid your business in all its digital marketing needs. */}
</p>
                    </div>   
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
            <div className="featured-projects-cont">
                <div className="f-p-cont">
                    <h1 className='f-p-title'>Featured <strong>Projects</strong></h1>
                    <h4 className='f-p-sub-title'>Below is an insight into a few of the most prized projects created by our team thus far.</h4>
                </div>
                <div className="projects-cont">
                    <div className="top-display">
                        <motion.div
                        whileHover={{ scale: 0.99 }}
                        whileTap={{ scale: 0.9 }}
                         className="showcase-1 showcase-1-top">
                            <div className="showcase-cont-large">
                                {/* "category-cont" */}
                                {/* <div className="category-cont">
                                    <p className="category-txt">User Interface</p>
                                    <h3 className="showcase-title">iPhone X mockup - 3D model</h3>
                                </div>
                                <div className="detail-link-cont">
                                    <a className="showcase-link" href="#">details</a>
                                </div> */}
                                <a className="featured_projects_link" target="_blank" href="https://endangeredpanda.netlify.app/">

                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 0.99 }}
                          whileTap={{ scale: 0.9 }}
                         className="showcase-2 showcase-2-top">
                        <div className="showcase-cont-large">
                                {/* "category-cont" */}
                                {/* <div className="category-cont">
                                    <p className="category-txt">User Interface</p>
                                    <h3 className="showcase-title">iPhone X mockup - 3D model</h3>
                                </div>
                                <div className="detail-link-cont">
                                    <a className="showcase-link" href="#">details</a>
                                </div> */}
                                     <a className="featured_projects_link" target="_blank" href="https://cometja.netlify.app/">

                                     </a>
                            </div>
                        </motion.div>
                    </div>
                    <div className="bottom-display">
                        <motion.div
                          whileHover={{ scale: 0.99 }}
                          whileTap={{ scale: 0.9 }}
                         className="showcase-2 showcase-2-bottom">
                        <div className="showcase-cont-large">
                                {/* "category-cont" */}
                                {/* <div className="category-cont">
                                    <p className="category-txt">User Interface</p>
                                    <h3 className="showcase-title">iPhone X mockup - 3D model</h3>
                                </div>
                                <div className="detail-link-cont">
                                    <a className="showcase-link" href="#">details</a>
                                </div> */}
                                     <a className="featured_projects_link" target="_blank" href="https://coastsideresturantjerkhut.wordpress.com/">

                                     </a>
                            </div>
                        </motion.div>
                        {/* <div className="showcase-1 showcase-1-bottom">
                        <div className="showcase-cont-large">
                               
                                <div className="category-cont">
                                    <p className="category-txt">User Interface</p>
                                    <h3 className="showcase-title">iPhone X mockup - 3D model</h3>
                                </div>
                                <div className="detail-link-cont">
                                    <a className="showcase-link" href="#">details</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="services-card-cont">
                <div className="service-bar">
                    <div className="card-cont">
                        <div className="card">
                            <div className="img-cont">
                                <img src={WebIcon} alt=""/>
                            </div>
                            <div className="card-title">
                                <h2>Social Media Management & Promotion</h2>
                            </div>
                            <div className="card-desc">
                                 <p>Having a social media presence is paramount in this day and age. Interested in increasing interactions with your customers and audience? Let Tortoise guide you in navigating the ins and outs of the various social media platforms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-cont">
                        <div className="card">
                            <div className="img-cont">
                                <img src={WebIcon} alt=""/>
                            </div>
                            <div className="card-title">
                                <h2>Graphic Design</h2>
                            </div>
                            <div className="card-desc">
                                 <p>Your brand is a direct representation of who you are as an individual and as a business. At Tortoise, we understand the significance one's brand image, and have worked tirelessly to ensure that that of our clients' are exemplary. Contact us today to have all your logos, posters, labels, and other grahic related materials done to your specification.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-cont">
                        <div className="card">
                            <div className="img-cont">
                                <img src={WebIcon} alt=""/>
                            </div>
                            <div className="card-title">
                                <h2>Web app Creation</h2>
                            </div>
                            <div className="card-desc">
                                 <p> If you don't have a website for your business, you are, in essence, invisible. From simple landing pages, to fully functioning e-commerce platforms - and everything in between - allow Tortoise to create your business's website today. Contact us today to receive a free quote for a completely customized website, or peruse through our Website Development & Maintenance packages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="spacer-1">

            </div>
            
            <div className="contact-banner">
                <div className="inner-container">
                    <div className="cont-banner-txt">
                        <h2>Interested in any of the above listed services?</h2>
                        <p>Click to the button below to see out contact information.</p>
                    </div>
                    <Link to="/contact">
                        <button className="contact-us-btn" >Contact us!</button>
                    </Link>
                </div>
            </div>
            <div className="spacer-1">
                    
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
