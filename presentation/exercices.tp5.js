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

const images = {
  jest: require("../assets/images/jest.png"),
  enzyme: require("../assets/images/jestenzyme.jpg"),
};

preloader(images);

export default (
  <SlideSet>
    <Slide bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        &lt; Let's TP5 /&gt;
      </Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Image src={images.jest} width="200px" />
      <List>
        <ListItem padding="10px 0" textColor="primary">
          Javascript testing framework by Facebook
        </ListItem>
        <ListItem padding="10px 0" textColor="primary">
          Based on Jasmine (matchers, spies, mocks...)
        </ListItem>
        <ListItem padding="10px 0" textColor="primary">
          Lightning fast
        </ListItem>
        <ListItem padding="10px 0" textColor="primary">
          Snapshot testing
        </ListItem>
        <ListItem padding="10px 0" textColor="primary">
          Coverage reports
        </ListItem>
      </List>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Image src={images.enzyme} />
      <List>
        <ListItem padding="10px 0" textColor="primary">
          Officially recommanded by create-react-app
        </ListItem>
        <ListItem padding="10px 0" textColor="primary">
          Provides utilities to test React components (find, shallow, mount...)
        </ListItem>
      </List>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Test the component's state
      </Heading>
      <CodePane
        textSize={18}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component.testing.state.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Behaviour testing
      </Heading>
      <CodePane
        textSize={18}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component.testing.behaviour.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Exercice statement
      </Heading>
      <List ordered>
        <ListItem padding="20px 0" textColor="primary">
          Test all the things ! (Cats and CatForm)
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
