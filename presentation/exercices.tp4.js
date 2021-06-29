import React from "react";
import { CodePane, List, ListItem, SlideSet, Heading, Slide } from "spectacle";

export default (
  <SlideSet>
    <Slide bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        &lt; Let's TP4 /&gt;
      </Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Conditionnal rendering
      </Heading>
      <CodePane
        textSize={18}
        transition={[]}
        lang="jsx"
        source={require("raw-loader!../assets/code/component.conditional.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Uncontrolled input
      </Heading>
      <CodePane
        textSize={18}
        transition={[]}
        lang="jsx"
        source={require("raw-loader!../assets/code/input.uncontrolled.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Controlled input
      </Heading>
      <CodePane
        textSize={18}
        transition={[]}
        lang="jsx"
        source={require("raw-loader!../assets/code/input.controlled.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Exercice statement
      </Heading>
      <List ordered>
        <ListItem padding="20px 0" textColor="primary">
          Create a form to add a new cat in the array
        </ListItem>
        <ListItem padding="20px 0" textColor="primary">
          Disable "add" button if required fields are not filled
        </ListItem>
        <ListItem padding="20px 0" textColor="primary">
          Display a message if cats array is empty
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
