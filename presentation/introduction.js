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
  meteor: require("../assets/images/meteor.png"),
  facebook: require("../assets/images/facebook.png"),
  separationOfConcernsMeme: require("../assets/images/separationConcerns.jpg"),
  separationOfConcerns: require("../assets/images/separationOfConcerns.png"),
  componentsEverywhere: require("../assets/images/componentsEverywhere.jpg")
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
      <Heading caps size={6} textColor="tertiary">
        (and why it's awesome)
      </Heading>
    </Slide>

    <Slide bgColor="primary">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Text textColor="tertiary" size={1} style={{ width: "33%" }}>
          <b>Open Source</b> Javascript library.
        </Text>
        <Image src={images.facebook} style={{ width: "33%" }} />
        <Text textColor="tertiary" style={{ width: "33%" }}>
          First released in <b>2013</b>
        </Text>
      </div>
    </Slide>

    <Slide bgColor="primary">
      <Text textColor="secondary">
        Aim: providing the best possible rendering performance
      </Text>
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4} textColor="tertiary">
        Virtual DOM
      </Heading>
      <List>
        <ListItem padding="20px 0">A copy of the real DOM</ListItem>
        <ListItem padding="20px 0">Changes impacts the Virtual DOM</ListItem>
        <ListItem padding="20px 0">Snapshots checking</ListItem>
        <ListItem padding="20px 0">Only the concerned DOM is changed</ListItem>
      </List>
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4} textColor="tertiary">
        Component based
      </Heading>
      <Image src={images.componentsEverywhere} padding="50px 0" />
    </Slide>

    <Slide bgColor="primary">
      <Text textColor="secondary">
        TODO: example of an interface with a template of all components in it
      </Text>
    </Slide>

    <Slide bgColor="primary">
      <Image src={images.separationOfConcernsMeme} width="800px" />
    </Slide>

    <Slide bgColor="primary">
      <Image src={images.separationOfConcerns} width="800px" />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Each component is</Heading>
      <List>
        <ListItem>Composable</ListItem>
        <ListItem>Reusable</ListItem>
        <ListItem>Testable</ListItem>
        <ListItem>Maintenable</ListItem>
      </List>
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>A normal component</Heading>
      <CodePane
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component.example")}
      />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>A normal component with props</Heading>
      <CodePane
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component2.example")}
      />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Composition of components </Heading>
      <CodePane
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/componentComposition.example")}
      />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Let's play !</Heading>
    </Slide>
  </SlideSet>
);
