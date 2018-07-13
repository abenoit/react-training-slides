import React from "react";
import {
  CodePane,
  List,
  ListItem,
  SlideSet,
  Heading,
  Slide,
  Text
} from "spectacle";

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
      <Text textColor="primary">
        <i>this</i> is not linked to the arrow function
      </Text>
      <CodePane
        textSize={20}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/arrow.es6.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Destructuring
      </Heading>
      <CodePane
        textSize={25}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/destructuring.es6.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Spread operator
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
        Fetch, async, await
      </Heading>
      <CodePane
        textSize={25}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/fetch.es6.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Import / Export
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
