import React, { useEffect } from "react";
import gsap from "gsap";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import IntroOverlay from "./components/IntroOverlay/IntroOverlay";

function App() {
  useEffect(() => {
    // animation timeline
    const tl = gsap.timeline();

    tl
    .from(".Banner__line", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      opacity: 0,
      stagger: {
        amount: 0.3
      }
    })
    .to(".IntroOverlay__top .IntroOverlay__col", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4
      }
    })
    .to(".IntroOverlay__bottom .IntroOverlay__col", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -.8,
      stagger: {
        amount: 0.4
      }
    })
    .to(".IntroOverlay", 0, {
      css: { display: "none" }
    })
    .from(".Card__img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2.75,
      stagger: {
        amount: 0.4
      }
    })
  }, [])

  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
      <Cards />
    </div>
  );
}

export default App;
