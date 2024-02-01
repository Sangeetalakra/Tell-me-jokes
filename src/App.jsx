import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [joke, setJoke] = useState("");
  const [secondJoke, setSecondJoke] = useState("");

  function handleClick() {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.type === "single") {
          return (setJoke(data.joke),setSecondJoke(""))
        } else {
          return(setJoke(data.delivery),
           setSecondJoke(data.setup))
        }
      });
  }
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="container">
      <h1>See some jokes</h1> 
      <p>{joke}</p>
      <p>{secondJoke}</p>
      <button onClick={handleClick}>Next Jokes</button>
    </div>
  );
}

export default App;
