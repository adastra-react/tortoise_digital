import React from 'react';
import './Footer.css';
import InstagramIcon from '../Assets/174834-social-media-logos/svg/036-facebook.svg';
import LinkedInIcon from '../Assets/174834-social-media-logos/svg/027-linkedin.svg';
import TwitterIcon from '../Assets/174834-social-media-logos/svg/008-twitter.svg';
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
                         <a> <img className="social-icon" src={LinkedInIcon} /> </a>
                         <a> <img className="social-icon" src={TwitterIcon} /> </a>
                     </div>

                 </div>
              </div>
              <div className="footer-bottom-info-section">
                    <p>Send us a question <a className='email-link' href = "mailto: abc@example.com"> abc@example.com</a> </p>
              </div> 
            </div>
        </div>
    )
}

export default Footer;
