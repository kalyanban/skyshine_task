import React from "react"
import {useNavigate, useLocation} from "react-router-dom"

import "./index.css"

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <header>
            <div className="header-section">
                <nav className="nav">
                    <div className="lg-nav">
                        <img src="https://res.cloudinary.com/dwdspbybh/image/upload/v1740473826/logo_fykvz2.png" alt="logo" className="logo" />
                        <ul className="nav-items-container-lg">
                            <li className="nav-list-item">
                                <button className="nav-button" onClick={()=>navigate("/")}>Home</button>
                            </li>
                            <li className="nav-list-item">
                                <button className="nav-button" onClick={()=>navigate("/scalable")}>Scalable</button>
                            </li>
                            <li className="nav-list-item">
                                <button className="nav-button" onClick={()=>navigate("/powercloud")}>Power Cloud</button>
                            </li>
                            <li className="nav-list-item">
                                <button className="nav-button">Partner</button>
                            </li>
                        </ul>
                        <div className="header-button-container">
                            <button className="login-button">Login</button>
                            <button className="signup-button">Sign Up</button>
                        </div>
                    </div>
                    <ul className="nav-items-container-sm">
                        <li>
                            <button className={`nav-button ${location.pathname==="/" ? "active":""}`} onClick={()=>navigate("/")}>Home</button>
                        </li>
                        <li>
                            <button className={`nav-button ${location.pathname==="/scalable" ? "active":""}`} onClick={()=>navigate("/scalable")}>Scalable</button>
                        </li>
                        <li>
                            <button className={`nav-button ${location.pathname==="/powercloud" ? "active":""}`} onClick={()=>navigate("/powercloud")}>Power Cloud</button>
                        </li>
                        <li>
                            <button className="nav-button">Partner</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header