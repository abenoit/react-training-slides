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
    <Slide bgColor="primary">
      <Heading size={4} textColor="secondary" caps>
        &lt; Let's TP6 /&gt;
      </Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={4} textColor="secondary" caps>
        Class component
      </Heading>
      <CodePane
        textSize={18}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/class-component.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={4} textColor="secondary" caps>
        Component Lifecycle : Mounting
      </Heading>
      <List>
        <ListItem padding="10px 0" textColor="secondary">
          constructor()
        </ListItem>
        <ListItem padding="10px 0" textColor="secondary">
          render()
        </ListItem>
        <ListItem padding="10px 0" textColor="secondary">
          componentDidMount()
        </ListItem>
      </List>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={4} textColor="secondary" caps>
        Component Lifecycle : Updating
      </Heading>
      <List>
        <ListItem padding="10px 0" textColor="secondary">
          shouldComponentUpdate()
        </ListItem>
        <ListItem padding="10px 0" textColor="secondary">
          render()
        </ListItem>
        <ListItem padding="10px 0" textColor="secondary">
          componentDidUpdate()
        </ListItem>
      </List>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={4} textColor="secondary" caps>
        Component Lifecycle : Unmounting
      </Heading>
      <List>
        <ListItem padding="10px 0" textColor="secondary">
          componentWillUnmount()
        </ListItem>
      </List>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={4} textColor="secondary" caps>
        Lifecycle
      </Heading>
      <Image src={images.lifecycle} />
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={3} textColor="secondary">
        Lifecycle with hooks
      </Heading>
      <CodePane
        textSize={18}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component-hooks.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={3} textColor="secondary">
        Fetch data
      </Heading>
      <Heading size={6} textColor="secondary">
        Class components
      </Heading>
      <CodePane
        textSize={18}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component.fetch.class-component.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={3} textColor="secondary">
        Fetch data
      </Heading>
      <Heading size={6} textColor="secondary">
        Functional components
      </Heading>
      <CodePane
        textSize={18}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component.fetch.functional-component.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={3} textColor="secondary">
        Exercice statement
      </Heading>
      <List ordered>
        <ListItem padding="20px 0" textColor="secondary">
          Fetch data from the file cat.json
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
