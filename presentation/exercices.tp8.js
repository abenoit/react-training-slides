import React from "react";
import { CodePane, List, ListItem, SlideSet, Heading, Slide } from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = { lifecycle: require("../assets/images/lifecycle.png") };

preloader(images);

export default (
  <SlideSet>
    <Slide bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        &lt; Let's TP8 /&gt;
      </Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        API Context
      </Heading>
      <List textColor="primary">
        <ListItem>Share data that are "global"</ListItem>
        <ListItem>
          <i>i.e. i18n, theme, authenticated user</i>
        </ListItem>
      </List>
      <CodePane
        textSize={20}
        transition={[]}
        lang="javascript"
        source="const MyContext = React.createContext(defaultValue);"
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Provider
      </Heading>
      <CodePane
        textSize={20}
        transition={[]}
        lang="javascript"
        source="<MyContext.Provider value={/* some value */}>"
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Consumer
      </Heading>
      <Heading size={6} textColor="primary">
        High order component
      </Heading>
      <CodePane
        textSize={20}
        transition={[]}
        lang="javascript"
        source="<MyContext.Consumer>
          {value => /* render something based on the context value */}
        </MyContext.Consumer>"
      />
      <Heading size={6} textColor="primary">
        Hook
      </Heading>
      <CodePane
        textSize={20}
        transition={[]}
        lang="javascript"
        source="const context = useContext(myContext);
          console.log(context.value);"
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={3} textColor="primary">
        Exercice statement
      </Heading>
      <List ordered>
        <ListItem padding="20px 0" textColor="primary">
          Create a context containing a theme
        </ListItem>
        <ListItem padding="20px 0" textColor="primary">
          Check the tests
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
