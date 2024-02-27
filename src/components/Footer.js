import { useState } from "react";

function Footer() {

  function handleClick() {
    window.location.href = "/about";
  }
    return (
      <div className="footer">
        <div className="copyright">
          <h3>High-Five Development &copy; 2024</h3>
        </div>
        <div className="about-button">
          <button onClick={handleClick}>
            About the Devs
          </button>
        </div>           
      </div>
    )
  }
  
  export default Footer;