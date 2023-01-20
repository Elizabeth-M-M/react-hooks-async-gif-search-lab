import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer/>
    </div>
  );
}

export default App;
// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=0cK05ZV1NYwbd4ii50tG5vwBJ2bHBQVd&rating=g
