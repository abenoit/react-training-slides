import React from "react";
import { CodePane, List, ListItem, SlideSet, Heading, Slide } from "spectacle";

export default (
  <SlideSet>
    <Slide bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        &lt; Let's TP3 /&gt;
      </Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        State
      </Heading>
      <CodePane
        textSize={18}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component.state.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Exercice statement
      </Heading>
      <List ordered>
        <ListItem padding="20px 0" textColor="primary">
          Create a <b>meow counter</b> using Cat's state
        </ListItem>
        <ListItem padding="20px 0" textColor="primary">
          Increment meow counter each time the "Meow" button is clicked
        </ListItem>
        <ListItem padding="20px 0" textColor="primary">
          Counter stops incrementing when meows reaches maxMeows
        </ListItem>
        <ListItem padding="20px 0" textColor="primary">
          BONUS: set a special color if maximum meows is reached
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
