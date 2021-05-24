import React from "react";
import {
  CodePane,
  Image,
  List,
  ListItem,
  SlideSet,
  Heading,
  Slide,
} from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = { lifecycle: require("../assets/images/lifecycle.png") };

preloader(images);

export default (
  <SlideSet>
    <Slide bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        &lt; Let's TP7 /&gt;
      </Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Dumb component
      </Heading>
      <CodePane
        textSize={20}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component.dumb.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Dumb component
      </Heading>
      <List textColor="primary">
        <ListItem>Describe how things look</ListItem>
        <ListItem>Only props, no state</ListItem>
        <ListItem>
          <b>Easy to test</b>
        </ListItem>
      </List>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Smart component
      </Heading>
      <CodePane
        textSize={20}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component.smart.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Smart component
      </Heading>
      <List textColor="primary">
        <ListItem>Describe how things work</ListItem>
        <ListItem>Provide data, do fetching</ListItem>
      </List>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Should I smart or dumb
      </Heading>
      <List textColor="primary">
        <ListItem>You need BOTH</ListItem>
        <ListItem>Dumb are UI - reusable</ListItem>
        <ListItem>Keep smart components simple - split</ListItem>
      </List>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Exercice statement
      </Heading>
      <List ordered>
        <ListItem padding="20px 0" textColor="primary">
          Transform Cat into a dumb component
        </ListItem>
        <ListItem padding="20px 0" textColor="primary">
          Check the tests
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
