import React from "react";

import "./index.css"

import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <div className="footer-top-section">
                    <img src="https://res.cloudinary.com/dwdspbybh/image/upload/v1740473826/logo_fykvz2.png" alt="logo" className="footer-logo" />
                    <div className="footer-all-links-container">
                        <ul className="footer-links-container">
                            <li className="footer-links-list-item">Home</li>
                            <li className="footer-links-list-item">Services</li>
                            <li className="footer-links-list-item">Blog</li>
                            <li className="footer-links-list-item">Career</li>
                            <li className="footer-links-list-item">Blog</li>
                        </ul>
                        <ul className="footer-links-container">
                            <li className="footer-links-list-item">Company</li>
                            <li className="footer-links-list-item">About Us</li>
                            <li className="footer-links-list-item">Our Values</li>
                            <li className="footer-links-list-item">Our Affiliates</li>
                            <li className="footer-links-list-item">Contact Us</li>
                        </ul>
                        <ul className="footer-links-container">
                            <li className="footer-links-list-item">Resources</li>
                            <li className="footer-links-list-item">Terms of Service</li>
                            <li className="footer-links-list-item">Privacy Policy</li>
                            <li className="footer-links-list-item">FAQs</li>
                            <li className="footer-links-list-item">Cookie Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom-section">
                    <ul className="social-media-icons-container">
                        <li><BsLinkedin /></li>
                        <li><BsTwitterX /></li>
                        <li><BsInstagram /></li>
                        <li><BsFacebook /></li>
                        <li><BsYoutube /></li>
                    </ul>
                    <div className="join-us-container">
                        <h3>Join our newsletter</h3>
                        <p>Keep up to date with everything Reflect</p>
                        <form>
                            <input type="email" className="footer-input" placeholder="Enter your mail" />
                            <button type="submit" className="subscribe-button">Subscribe</button>
                        </form>
                    </div>
                    <p className="copyright"><span><AiOutlineCopyrightCircle/> </span>2024 OneCloud. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer