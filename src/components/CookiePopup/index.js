import { useState } from "react";
import "./index.css";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    showPopup && (
      <div className="cookie-popup">
        <p className="cookie-text">
          To give you the best experience on our website, we use cookies to remember your preferences and improve our services. By continuing to use our site, you're agreed to our use of cookies.
        </p>
        <div className="cookie-buttons">
          <button className="reject-btn" onClick={() => setShowPopup(false)}>
            Reject All Cookies
          </button>
          <button className="accept-btn" onClick={() => setShowPopup(false)}>
            Accept All Cookies
          </button>
          <button className="close-btn" onClick={() => setShowPopup(false)}>
            ×
          </button>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
