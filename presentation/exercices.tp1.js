import React from "react";
import { CodePane, List, ListItem, SlideSet, Heading, Slide } from "spectacle";

export default (
  <SlideSet>
    <Slide bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        &lt; Let's play /&gt;
      </Heading>
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Props checking and passing
      </Heading>
      <CodePane
        textSize={20}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component.props.example")}
      />
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
        Exercice statement
      </Heading>
      <List ordered textColor="primary">
        <ListItem padding="20px 0">Create a cat in the App</ListItem>
        <ListItem padding="20px 0">
          Use propTypes for defining
          <List>
            <ListItem>name</ListItem>
            <ListItem>age</ListItem>
            <ListItem>meows per hour</ListItem>
          </List>
        </ListItem>
        <ListItem padding="20px 0">Create several cats</ListItem>
      </List>
    </Slide>
  </SlideSet>
);
