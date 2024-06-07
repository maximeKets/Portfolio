import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Développeur Web",
                    "Futur Développeur IA / Data analyst",
                    "EPSI Montpellier Bachelor Développeur IA ",
                ],
                autoStart: true,
                loop: true,
                typeSpeed: 200,
                deleteSpeed: 100,

            }}
        />
    );
}

export default Type;
