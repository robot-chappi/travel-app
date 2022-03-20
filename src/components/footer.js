import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faVk, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    
        <div className='footer-gradient'>
            <div className='container'>
                <div className='row footer-shift'>
                    <div className='col-md-8 wrapper-footer'>
                        <ul className='footer-links-one'>
                            <div className='footer-links-pages'>
                                <li  className='footer-link-pg'><FontAwesomeIcon icon={faAnglesRight} className="link-icon" /><Link to="/" className="link-text-pg-footer">Home</Link></li>
                                <li className='footer-link-pg'><FontAwesomeIcon icon={faAnglesRight} className="link-icon" /><Link to="/about/" className="link-text-pg-footer">About</Link></li>
                                <li className='footer-link-pg'><FontAwesomeIcon icon={faAnglesRight} className="link-icon" /><Link to="/news/" className="link-text-pg-footer">News</Link></li>
                            </div>
                        </ul>
                        <ul className='footer-links-one'>
                            <div  className='footer-links-pages'>
                                <li className='footer-link-pg'><FontAwesomeIcon icon={faAnglesRight} className="link-icon" /><Link to="/routes-russia/" className="link-text-pg-footer">Routes</Link></li>
                                <li className='footer-link-pg'><FontAwesomeIcon icon={faAnglesRight} className="link-icon" /><Link to="/travel-buy/" className="link-text-pg-footer">Buy</Link></li>
                            </div>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <div className='footer-info'>
                            <h2>Follow us here :)</h2>
                            <ul className='footer-links-society'>
                                    <li className='footer-link-soc'><a href='https://www.facebook.com/daniel.fedoskov/' rel="noreferrer" target={"_blank"}><FontAwesomeIcon icon={faFacebook} className="link-icon-society" /></a></li>
                                    <li className='footer-link-soc'><a href='https://www.instagram.com/chappic2020/' rel="noreferrer" target={"_blank"}><FontAwesomeIcon icon={faInstagram} className="link-icon-society" /></a></li>
                                    <li className='footer-link-soc'><a href='https://t.me/RobotChappi2020' rel="noreferrer" target={"_blank"}><FontAwesomeIcon icon={faTelegram} className="link-icon-society" /></a></li> 
                                    <li className='footer-link-soc'><a href='https://vk.com/chappic2021' rel="noreferrer" target={"_blank"}><FontAwesomeIcon icon={faVk} className="link-icon-society" /></a></li> 
                            </ul>
                        </div>
                    </div>
                    <div className='wrapper-footer-down'>
                        <div className='footer-info-tech'>
                                Web-site made with Gatsby
                        </div>
                        <div className='footer-info-text'>
                            <h4>TRAVEL © 2022</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)


export default Footer;