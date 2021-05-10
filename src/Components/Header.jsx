import React, {useState} from 'react';
import CancleIcon from '../Assets/Cancle-icon/cancel.svg'
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Images/LOGOs.svg';
import { motion } from "framer-motion"

function Header() {

    const [triCircleHover, setTriCircleHover] = useState('sb-dot');
    const [sideBarActive, setSidebarActive] = useState(1200)

    const tryCircleOver = () => {
        setTriCircleHover('sb-dot-active');
        console.log(triCircleHover)
    }
    
    const cancelSideBar = () => {
        setSidebarActive(1200)
    }

    const showSideBar = () => {
        setSidebarActive(0) 
    }

    const tryCircleLeave = () => {
        setTriCircleHover('sb-dot');
    }

    return (
        <div className='header'>
            <div className='band-cont'>
                <Link to="/">
                    <img className="brand-logo" src={Logo} alt=""/>
                </Link>
                <h2 className='brand-title'>Tortoise Digital Media</h2>
            </div>

            <motion.div 
                  whileHover={{ scale: 1.1}}
                  whileTap={{ scale: 0.9 }} 
                  onClick={showSideBar} 
                  onMouseLeave={tryCircleLeave} 
                  onMouseEnter={tryCircleOver} 
                  className="sb-dot-cont"
                  >

                <div className={`${triCircleHover} sb-dot-1`}>
                </div>
                 <div className={`${triCircleHover} sb-dot-2`}>
                </div>
                <div className={`${triCircleHover} sb-dot-3`}>
                </div>
            </motion.div>

            <motion.div
            //  className={`${sideBarActive}`}
             className="sidebar-active"
             animate={{
                x: sideBarActive,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              transition={{ duration: 0.6 }}
            >
                <div className="sidebar-container">
                    <motion.img
                     whileHover={{ scale: 1.1,
                        rotate: 90
                     }}
                     whileTap={{ scale: 0.9 }}
                     onClick={cancelSideBar} className="cancel-icon" src={CancleIcon} alt=""/>
                    <motion.div className="sidebar-link-cont"
                        //  animate={{
                        //     x: sideBarActive,
                        //     y: 0,
                        //     animationDuration: 4,
                        //     scale: 1,
                        //     rotate: 0,
                        //   }}
                    >
                        <Link className="bar-link" to="/">
                            <p className="sidebar-link">Home</p>
                        </Link>
                        <Link className="bar-link" to="/agency">
                            <p className="sidebar-link">Agency</p>
                        </Link>
                        <Link className="bar-link" to="/contact">
                            <p className="sidebar-link">Contact</p>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Header;
