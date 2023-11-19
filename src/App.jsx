import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
