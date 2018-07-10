import React from "react";
import { CodePane, List, ListItem, SlideSet, Heading, Slide } from "spectacle";

export default (
  <SlideSet>
    <Slide bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Little (re)minder of ES6 useful features
      </Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Let & Const
      </Heading>
      <List textColor="primary">
        <ListItem padding="20px 0">
          <strike>var</strike>
        </ListItem>
        <ListItem padding="20px 0">
          <b>let</b>: variable
        </ListItem>
        <ListItem padding="20px 0">
          <b>const</b>: constant - immutable
        </ListItem>
      </List>
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Arrow function
      </Heading>
      <CodePane
        textSize={20}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/arrow.es6.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Spread operators
      </Heading>
      <CodePane
        textSize={25}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/spread.es6.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Fetch
      </Heading>
      <CodePane
        textSize={25}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/fetch.es6.example")}
      />
    </Slide>
  </SlideSet>
);
