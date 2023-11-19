import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/330px-Trollface_non-free.png"
          alt="meme-face"
        />
        <h2>Meme Generator</h2>
      </div>
      <div className="header-right">
        <p>
          React Project by{" "}
          <a href="https://www.instagram.com/imbachhu/" target="blank_">
            imbachhu
          </a>
        </p>
      </div>
    </div>
  );
}

export default Header;
