import React from "react";
import { List, ListItem, SlideSet, Heading, Slide, Link } from "spectacle";

export default (
  <SlideSet>
    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={1} textColor="primary" caps>
        Going further with React
      </Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Storybook
      </Heading>
      <List textColor="primary">
        <ListItem padding="20px 0">
          Development environment for UI components
        </ListItem>
        <ListItem padding="20px 0">
          Develop components in a isolated environment
        </ListItem>
        <ListItem padding="20px 0">Living documentation</ListItem>
      </List>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Redux / MobX
      </Heading>
      <List textColor="primary">
        <ListItem padding="20px 0">State container for JS apps</ListItem>
        <ListItem padding="20px 0">
          <Link href="https://redux.js.org/introduction/core-concepts">
            Core concepts
          </Link>
        </ListItem>
      </List>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Language
      </Heading>
      <List textColor="primary">
        <ListItem padding="20px 0">Typescript</ListItem>
        <ListItem padding="20px 0">ReScript</ListItem>
      </List>
    </Slide>

    <Slide bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Resources
      </Heading>
      <List textColor="primary">
        <ListItem padding="20px 0">ReactJS Official website</ListItem>
        <ListItem padding="20px 0">
          <Link href="https://github.com/enaqx/awesome-react">
            Awesome list
          </Link>
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
