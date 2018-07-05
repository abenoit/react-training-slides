import React from "react";
import {
  SlideSet,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

export default (
  <SlideSet>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        ReactJS
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        A journey into reactJS library
      </Text>
      <Text margin="10px 0 0" textColor="quarternary" size={0.5} bold>
        with <i className="material-icons">favorite_border</i> by Amélie
      </Text>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Text margin="10px 0 0" textColor="secondary" bold>
        Hello
      </Text>
      <Text margin="10px 0 0" textColor="tertiary" size={1} bold />
    </Slide>
  </SlideSet>
);
