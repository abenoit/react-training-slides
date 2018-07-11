import React from "react";
import { List, ListItem, SlideSet, Heading, Slide } from "spectacle";

export default (
  <SlideSet>
    <Slide bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        &lt; Let's TP3 /&gt;
      </Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Exercice statement - Testing !
      </Heading>
      <List ordered textColor="primary">
        <ListItem padding="20px 0">
          Add a color and style the cat's name according its color
        </ListItem>
        <ListItem padding="20px 0">
          Create an array of cats and display them using a map function
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
