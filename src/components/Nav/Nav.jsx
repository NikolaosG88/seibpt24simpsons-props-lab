import './Nav.css'
import React from 'react';
import MenuItem from '../MenuItem/MenuItem'; // Correct path

export default function Nav({uperMenuData, lowerMenuData}) {
    return(
        <nav className="nav-bar">
            <div className="upper-nav">
                <div className="logo-nav"></div>
                <div className="right-upper-nav-wrapper">
                    <div className="link-socialmedia">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div>
                        <p>CALL US! <strong>555-8707</strong></p>
                    </div>
                    <div className="right-upper-nav">
                        <ul className="cover-contact-about">
                        {/* Render MenuItem for each item in uperMenuData */}
              {uperMenuData.map((y) => (
                <MenuItem 
                key={y.id} 
                label={y.label} 
                submenu={y.submenu} 
                />
                       ))}
                       </ul>
                        <button className="btn-donate">DONATE</button>
                    </div>
                </div>
            </div>
            <div className="lower-nav">
                <ul className="lower-nav-ul">
                     {/* Render lower menu items */}
                     {lowerMenuData.map((z) => (
                     <MenuItem 
                     key={z.id}
                     label={z.label}
                     submenu={z.submenu}
                     />
          ))}
                    
                    <i className="fa fa-search"></i>
                </ul>
            </div>
        </nav>
    );
}