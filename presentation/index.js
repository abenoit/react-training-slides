import React, { Component } from "react";
import Introduction from "./introduction";
import Tp1Excercices from "./exercices.tp1";
import Tp2Exercices from "./exercices.tp2";
import Tp3Exercices from "./exercices.tp3";
import Tp4Exercices from "./exercices.tp4";
import Tp5Exercices from "./exercices.tp5";
import Tp6Exercices from "./exercices.tp6";
import Tp7Exercices from "./exercices.tp7";
import Tp8Exercices from "./exercices.tp8";
import Conclusion from "./conclusion";
import Tools from "./tools";
import ES6 from "./es6";

import createTheme from "spectacle/lib/themes/default";
import { Deck } from "spectacle";

require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        {Introduction}
        {Tp1Excercices}
        {Tools}
        {ES6}
        {Tp2Exercices}
        {Tp3Exercices}
        {Tp4Exercices}
        {Tp5Exercices}
        {Tp6Exercices}
        {Tp7Exercices}
        {Tp8Exercices}
        {Conclusion}
      </Deck>
    );
  }
}
