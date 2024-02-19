import React, { useRef } from "react";
// import { useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import Lenis from "@studio-freight/lenis";

function Home() {
  const ref = useRef();

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <Parallax pages={4} ref={ref} style={{ backgroundColor: "black" }}>
      <ParallaxLayer
        style={{ backgroundImage: "url(images/moon.webp)", backgroundSize: "cover" }}
        speed={1}
        offset={0}
        factor={2}
      ></ParallaxLayer>

      <ParallaxLayer
        style={{ backgroundImage: "url(images/land.webp)", backgroundSize: "cover" }}
        speed={1}
        offset={2}
        factor={4}
      ></ParallaxLayer>

      <ParallaxLayer speed={0.3} sticky={{ start: 0.45, end: 4 }}>
        <img src="images/cat.gif" alt="cat gif" />
      </ParallaxLayer>

      <ParallaxLayer offset={0.3} speed={0.05}>
        <h2 style={{ color: "green" }}>Welcome to my website!</h2>
      </ParallaxLayer>

      <ParallaxLayer offset={3.5} speed={2}>
        <h2 style={{ color: "yellow" }}>Hello Mom!</h2>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;
