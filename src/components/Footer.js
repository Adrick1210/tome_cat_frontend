import { useState } from "react";

function Footer() {

  function handleClick() {
    window.location.href = "/about";
  }
    return (
      <div>
        <button onClick={handleClick}>
          About the Devs
        </button>
        Footer
      </div>
    )
  }
  
  export default Footer;