import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './footer.css';
import footerlogo from '../../images/footerlogo.png';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        {/* className = "img-fluid" utilisation pour que la résolution de l'image ne se détériore pas sur les appareils mobiles ou lorsque nous réduisons l'écran.. */}
        <div className='footer-logo'>
          <NavLink to="/">
            <img src={footerlogo} className="img-fluid" alt='Kasa' />
          </NavLink>
        </div>
        <p className='footer-text'>
          ⓒ  {new Date(Date.now()).getFullYear()} Kasa. All rights reserved.
          
        </p>
      </div>
    )
  }
}

export default Footer;
