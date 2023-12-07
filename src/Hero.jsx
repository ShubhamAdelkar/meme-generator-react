import React from "react";
import "./Hero.css";
import { useState } from "react";
import memesData from "./memesData";
import seedrandom from "seedrandom";
function Hero() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [memeImage, setMemeImage] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const rng = seedrandom();
    const randomNumber = Math.floor(rng() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className="hero">
      <div className="hero-input">
        <div className="hero-input-text">
          <input type="text" placeholder="top text"></input>
          <input type="text" placeholder="bottom tex"></input>
        </div>
        <button onClick={getMemeImage}>Get new meme image 🖼️</button>
      </div>
      <div className="hero-output">
        <img src={meme.randomImage} alt="" />
      </div>
    </div>
  );
}

export default Hero;
