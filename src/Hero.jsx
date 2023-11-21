import React from "react";
import "./Hero.css";
import { useState } from "react";
import memesData from "./memesData";
import seedrandom from "seedrandom";
function Hero() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const rng = seedrandom();
    const randomNumber = Math.floor(rng() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className="hero">
      <div className="hero-input">
        <div className="hero-input-text">
          <input type="text" placeholder="top text"></input>
          <input type="text" placeholder="bottom tex"></input>
        </div>
        <button onClick={getMemeImage}>Get new meme image</button>
      </div>
      <div className="hero-output">
        <img src={memeImage} alt="" />
      </div>
    </div>
  );
}

export default Hero;
