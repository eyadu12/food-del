import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'  id="footer">

        <div className='footer-content'>

            <div className="left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, corporis quibusdam! Rem autem temporibus earum reprehenderit, at natus est vitae vero mollitia, molestiae exercitationem in odio? Nisi illum sit delectus.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="center">

                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>


            </div>

            

            <div className="right">

                <h2>Get in touch</h2>
                <ul>
                    <li>+1-212-456-3122</li>
                    <li>contact@tomato.com</li>
                </ul>

                <hr />
                <p className="footer-copyright">Copyright Lorem ipsum dolor sit amet.</p>

            </div>

            

        </div>
      
    </div>
  )
}
import './Footer.css'
import { assets } from '../../assets/assets'
export default Footer
