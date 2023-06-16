import React from 'react'
import './footer.css'

const Footer = () => {
    
  return (
    <div>
      <div className="bazzu">
            <footer>
                <div className="content" >
                  <div className="top">
                    <div className="logo-details">
                     
                      <span className="logo_name">footer</span>
                    </div>
                    <div className="media-icons">
                      <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                      <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                      <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                      <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                      
                    </div>
                  </div>
                  <div className="link-boxes">
                    <ul className="fox">
                      <li className="link_name">Company</li>
                      <li><a href="/">Home</a></li>
                      <li><a href="">Contact us</a></li>
                      <li><a href="">About us</a></li>
                      <li><a href="">Get started</a></li>
                    </ul>
                    <ul className="fox">
                      <li className="link_name">Services</li>
                      <li><a href="#">App design</a></li>
                      <li><a href="#">Web design</a></li>
                      <li><a href="#">Logo design</a></li>
                      <li><a href="#">Banner design</a></li>
                    </ul>
                    <ul className="fox">
                      <li className="link_name">Account</li>
                      <li><a href="#">Profile</a></li>
                      <li><a href="#">My account</a></li>
                      <li><a href="#">Prefrences</a></li>
                      <li><a href="#">Purchase</a></li>
                    </ul>
                   
                    <ul className="fox input-box">
                      <li className="link_name">Subscribe</li>
                      <li><input type="text" placeholder="Enter your email"/></li>
                      <li><input type="button" value="Subscribe"/></li>
                    </ul>
                  </div>
                </div>
                <div className="bottom-details">
                  <div className="bottom_text">
                    <span className="copyright_text">Copyright © 2023 <a href="#">VoWHELM.</a>All rights reserved</span>
                    <span className="policy_terms">
                      <a href="#">Privacy policy</a>
                      <a href="#">Terms & condition</a>
                    </span>
                  </div>
                </div>
              </footer>
        </div>
    </div>
    
  )
}

export default Footer
