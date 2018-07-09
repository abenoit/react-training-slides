import React from "react";
import {
  CodePane,
  SlideSet,
  Image,
  Heading,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";

export default (
  <SlideSet>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Instructions
      </Heading>
      <CodePane
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/instructions")}
      />
    </Slide>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        TODO : structure presentation of the project + exercice statement
      </Heading>
    </Slide>
  </SlideSet>
);
