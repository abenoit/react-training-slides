import React from "react";
import {
  CodePane,
  SlideSet,
  Image,
  Heading,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  handlabars: require("../assets/images/handlebars.png"),
  twig: require("../assets/images/twig.jpg"),
  mustache: require("../assets/images/mustache.jpg"),
  jquery: require("../assets/images/jquery.jpg"),
  angularjs: require("../assets/images/angularjs.png"),
  backbone: require("../assets/images/backbone.png"),
  react: require("../assets/images/react.png"),
  knockout: require("../assets/images/knockout.png"),
  meteor: require("../assets/images/meteor.png")
};

preloader(images);

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
        made with <i className="material-icons">favorite_border</i> by Amélie
      </Text>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What I am going to talk about
      </Heading>
      <List>
        <ListItem>What is React ?</ListItem>
        <ListItem>Why React ?</ListItem>
        <ListItem>Let's practice !</ListItem>
      </List>
    </Slide>

    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Remember, 5 years ago...
      </Heading>
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Some stuff were pain in the a**
      </Heading>
      <List>
        <ListItem padding="10px 0">Re-using some piece of code</ListItem>
        <ListItem padding="10px 0">
          HTML pages were big and hard to maintain
        </ListItem>
        <ListItem padding="10px 0">
          The full page had to be refreshed (or hardly managed in JS)
        </ListItem>
        <ListItem padding="10px 0">
          Very static, making a website dynamic was expensive
        </ListItem>
      </List>
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Bind data to HTML
      </Heading>
      <CodePane
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/old.data.example")}
      />
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Events management
      </Heading>
      <CodePane
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/old.events.example")}
      />
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Libraries were here to help
      </Heading>
      <div style={{ display: "flex" }}>
        <Image src={images.jquery} width="150px" height="150px" />
        <Image src={images.twig} width="170px" height="150px" />
        <Image src={images.mustache} width="170px" height="150px" />
        <Image src={images.handlabars} width="150px" height="150px" />
      </div>
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        2010 : first front frameworks
      </Heading>
      <Image src={images.angularjs} width="300px" />
      <Image src={images.backbone} height="100px" />
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        2010 to 2013 : other frameworks
      </Heading>
      <div style={{ display: "flex", height: "200px" }}>
        <Image src={images.knockout} />
        <Image src={images.meteor} />
      </div>
      <Image src={images.react} height="250px" />
    </Slide>

    <Slide bgColor="primary">
      <Image src={images.react} height="250px" />
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What is React ?
      </Heading>
    </Slide>

    <Slide bgColor="primary">
      <Text margin="10px 0 0" textColor="tertiary" size={1}>
        Open Source Javascript library.
      </Text>
      <Text margin="10px 0 0" textColor="tertiary" size={1}>
        Designed by Facebook.
      </Text>
      <Text margin="10px 0 0" textColor="tertiary" size={1} padding="20px 0">
        <i className="material-icons">open_in_new</i> First version released in
        2013
      </Text>
      <Text
        margin="10px 0 0"
        textColor="secondary"
        padding="50px 0 0 0"
        size={1}
      >
        <i className="material-icons">timer</i> providing the best possible
        rendering performance
      </Text>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Why React ?
      </Heading>
      <List>
        <ListItem>DOM Operation quite expensive --> Virtual DOM</ListItem>
        <ListItem>Only the concerned area is refreshed when necessary</ListItem>
        <ListItem>Used by Facebook - tried and tested !</ListItem>
        <ListItem>Easy and useful for DOM interactions</ListItem>
        <ListItem>Each component brings its own functionnal behaviour</ListItem>
      </List>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary">
      <Text margin="10px 0 0" textColor="primary" size={0.5} fit bold>
        How can it be so fast ?
      </Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary">
      <Text margin="10px 0 0" textColor="primary" size={0.5} fit bold>
        React uses the virtual DOM
      </Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary">
      <Text margin="10px 0 0" textColor="secondary" size={0.5} fit bold>
        Why React ?
      </Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary">
      <Text margin="10px 0 0" textColor="secondary" size={0.5} fit bold>
        Is just
      </Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="primary">
      <Text margin="10px 0 0" textColor="secondary" size={0.5} fit bold>
        Components vs Templates
      </Text>
    </Slide>
  </SlideSet>
);
