import React from "react";
import { CodePane, SlideSet, Heading, Slide } from "spectacle";

export default (
  <SlideSet>
    <Slide bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        &lt; Let's play /&gt;
      </Heading>
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Instructions
      </Heading>
      <CodePane
        textSize={25}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/instructions")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Project's structure
      </Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        TODO : exercice statement
      </Heading>
    </Slide>
  </SlideSet>
);
