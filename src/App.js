import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import IntroOverlay from "./components/IntroOverlay/IntroOverlay";
import Navigation from "./components/Navigation/Navigation";

import { overlay } from "./animations";

function App() {
  useEffect(() => {
    overlay();
  }, [])

  return (
    <div className="App">
      <IntroOverlay />
      <Navigation />
      <Header />
      <div className="App__content">
        <Banner />
        <Cards />
      </div>
    </div>
  );
}

export default App;
