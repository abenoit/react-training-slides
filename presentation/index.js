import React, { Component } from "react";
import Introduction from "./introduction";
import BasicExercices from "./exercices.basic";
import Tools from "./tools";

import createTheme from "spectacle/lib/themes/default";
import { Deck } from "spectacle";

require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {Introduction}
        {BasicExercices}
        {Tools}
      </Deck>
    );
  }
}
