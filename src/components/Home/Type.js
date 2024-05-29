import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Web",
          "Futur Développeur IA",
          "Futur Data analyst",
          "EPSI Montpellier Bachelor Développeur IA ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,

      }}
    />
  );
}

export default Type;
