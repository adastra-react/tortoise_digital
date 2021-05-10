import React from 'react';
import './Footer.css';
import InstagramIcon from '../Assets/174834-social-media-logos/svg/036-facebook.svg'
// import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
              <div className="footer-top-info-section">
                 <div>
                     <h2>TORTOISE DIGITAL</h2>
                     <p>jkkj  ekwlkkf dflke jwfkljl lwknflwkflnw lfnwnflnliwnfln qli</p>
                 </div>
                 <div>
                     <div>
                         <a> <img className="social-icon" src={InstagramIcon} /> </a>
                     </div>

                 </div>
              </div>
              <div className="footer-bottom-info-section">

              </div> 
            </div>
        </div>
    )
}

export default Footer;
