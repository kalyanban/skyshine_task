import React from "react";

import "./index.css"

import { FaHeadset } from "react-icons/fa";
import { MdOutlineLiveHelp } from "react-icons/md"
import { FaCircleCheck } from "react-icons/fa6";

const Scalable = () => {
    return (
        <div className="scalable-section">
            <div className="scalable-intro-section">
                <h6>COMPUTE</h6>
                <h1>SCALABLE VPS</h1>
                <p className="scalable-intro-special-text">Scalable On-Demand-Maintanance Your VPS Potential</p>
                <p className="scalable-intro-text">
                    Scale your hosting instantly to match your growth. Enjoy flexibility, top performance,<br/>
                    and the freedom to adjust resources as your business grows
                </p>
                <ul className="scalable-intro-features-container">
                    <li><span><FaCircleCheck /></span> Effortless Upgrades</li>
                    <li><span><FaCircleCheck /></span> Scale in Seconds</li>
                    <li><span><FaCircleCheck /></span> 99.99% Uptime, Always Reliable</li>
                </ul>
                <button>Start Crafting Your Ideal VPS</button>
            </div>
            <div className="scalable-main-content-section">
                <div className="home-faqs-container">
                    <details>
                        <summary>What makes an SSCloud different from other cloud providers?</summary>
                        <p>
                            SSCloud prioritizes user sovereignty, meaning users fully own and control their data, identity, 
                            and digital assets without relying on a centralized authority.
                        </p>
                        </details>
                        <details>
                            <summary>How do I get started with SSCloud?</summary>
                            <p>
                                Choose a Self-Sovereign Cloud platform like NextCloud, Storj, or Sia, or set up your own decentralized cloud using IPFS or blockchain-based storage.
                            </p>
                        </details>
                        <details>
                            <summary>Is SSCloud's infrastructure secure?</summary>
                            <p>
                                SSCloud prioritizes user sovereignty, meaning users fully own and control their data, identity, 
                                and digital assets without relying on a centralized authority.
                            </p>
                        </details>
                        <details>
                            <summary>Can I scale my resources as my business grows?</summary>
                            <p>
                                SSCloud prioritizes user sovereignty, meaning users fully own and control their data, identity, 
                                and digital assets without relying on a centralized authority.
                            </p>
                        </details>
                        <details>
                            <summary>What type of cloud services do you offer?</summary>
                            <p>
                                SSCloud prioritizes user sovereignty, meaning users fully own and control their data, identity, 
                                and digital assets without relying on a centralized authority.
                            </p>
                        </details>
                        <details>
                            <summary>What is your pricing model?</summary>
                            <p>
                                SSCloud prioritizes user sovereignty, meaning users fully own and control their data, identity, 
                                and digital assets without relying on a centralized authority.
                            </p>
                        </details>
                    </div>
                    <div className="home-support-container">
                        <h3>AI-Powered Help</h3>
                        <p>
                            We're here to assist you! Reach out for any questions or support
                        </p>
                        <div className="home-support-items-container">
                            <div className="home-support-item">
                                <FaHeadset size={65}/>
                                <h4>AI Chat</h4>
                                <p>
                                    Use our AI Chat for quick solution, personalized advice, and instant support
                                </p>
                                <button>Talk to Our AI Expert</button>
                            </div>
                            <div className="home-support-item">
                                <MdOutlineLiveHelp size={65}/>
                                <h4>Get Quote</h4>
                                <p>
                                    Share your requirements, and recieve a personalized quote that fits your goals and budget
                                </p>
                                <button>Let's Build Your Plan</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Scalable