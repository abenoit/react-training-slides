import React from "react";
import {
  Appear,
  CodePane,
  SlideSet,
  Image,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
} from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  busbud: require("../assets/images/companies/logo-busbud.png"),
  lectra: require("../assets/images/companies/logo-lectra.jpg"),
  ubisoft: require("../assets/images/companies/logo-ubisoft.png"),
  atinternet: require("../assets/images/companies/logo-atinternet.png"),
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
  componentsEverywhere: require("../assets/images/componentsEverywhere.jpg"),
  todolist: require("../assets/images/todolist.jpg"),
  todolistcomponents: require("../assets/images/componentstodolist.png"),
  globalflow: require("../assets/images/flow.png"),
  flow: require("../assets/images/event-flow/event-flow0.png"),
  flow1: require("../assets/images/event-flow/event-flow1.png"),
  flow2: require("../assets/images/event-flow/event-flow2.png"),
  flow3: require("../assets/images/event-flow/event-flow3.png"),
  dataflow: require("../assets/images/props.png"),
  state: require("../assets/images/props+state.png"),
};

preloader(images);

const peronalItemStyle = {
  display: "flex",
  alignItems: "center",
  margin: "24px 0",
};

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
        made with 💙 by Amélie
      </Text>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={2} caps lineHeight={1} textColor="tertiary">
        Agenda
      </Heading>
      <List>
        <ListItem>Self presentation</ListItem>
        <ListItem>What is React?</ListItem>
        <ListItem>Why React?</ListItem>
        <ListItem>Let's practice!</ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Why am I here
      </Heading>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Appear>
          <div color="secondary" style={peronalItemStyle}>
            <Text>🚌 Working with React at</Text>
            <Image
              src={images.busbud}
              width="200px"
              style={{ padding: 0, margin: 0, marginLeft: 16 }}
            />
          </div>
        </Appear>

        <Appear>
          <div color="secondary" style={peronalItemStyle}>
            <Text>🎮 Worked with React Native at</Text>
            <Image
              src={images.ubisoft}
              width="200px"
              style={{ padding: 0, margin: 0, marginLeft: 16 }}
            />
          </div>
        </Appear>

        <Appear>
          <div color="secondary" style={peronalItemStyle}>
            <Text>👗 Worked with React at</Text>
            <Image
              src={images.lectra}
              width="200px"
              style={{ padding: 0, margin: 0, marginLeft: 16 }}
            />
          </div>
        </Appear>

        <Appear>
          <div color="secondary" style={peronalItemStyle}>
            <Text>📊 Worked with AngularJS at</Text>
            <Image
              src={images.atinternet}
              width="200px"
              style={{ padding: 0, margin: 0, marginLeft: 16 }}
            />
          </div>
        </Appear>

        <Appear>
          <Text textColor="tertiary">
            Organizer of React & React Native Bordeaux Meetups
          </Text>
        </Appear>
      </div>
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
      <List textColor="primary">
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
        textSize={24}
        lang="javascript"
        highlightRanges={[[1], [2]]}
        source={require("raw-loader!../assets/code/old.data.example")}
      />
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Events management
      </Heading>
      <CodePane
        textSize={24}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/old.events.example")}
      />
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="primary" caps>
        Libraries were born to compensate
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
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        ⚠️ DISCLAIMER ⚠️
      </Heading>
      <Heading size={3} fit lineHeight={1} textColor="secondary">
        ReactJS is written and used in / with ... Javascript
      </Heading>
      <Heading caps size={6} textColor="tertiary">
        You <u>HAVE TO</u> learn JS to use it well.
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
      <Image src={images.todolist} width="800px" />
    </Slide>

    <Slide bgColor="primary">
      <Image src={images.todolistcomponents} width="800px" />
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
      <Heading size={4}>JSX</Heading>
      <CodePane
        margin="10px 0"
        textSize={25}
        transition={[]}
        lang="jsx"
        source="const element = <h1>Hello world!</h1>;"
      />

      <CodePane
        textSize={25}
        transition={[]}
        lang="jsx"
        source={`const element = (<div>
          <h1>Hello!</h1>
          <h2>Good to see you here.</h2>
        </div>);`}
      />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Injecting values</Heading>
      <CodePane
        textSize={25}
        transition={[]}
        lang="jsx"
        source="const date = <p>It is {new Date().toLocaleTimeString()}</p>;"
      />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Class component (legacy)</Heading>
      <CodePane
        textSize={25}
        transition={[]}
        lang="jsx"
        source={require("raw-loader!../assets/code/component-legacy.example")}
      />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Functional component</Heading>
      <CodePane
        textSize={25}
        transition={[]}
        lang="jsx"
        source={require("raw-loader!../assets/code/component.example")}
      />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={6}>A normal component with props</Heading>
      <CodePane
        textSize={20}
        transition={[]}
        lang="jsx"
        source={require("raw-loader!../assets/code/component2.example")}
      />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Composition of components </Heading>
      <CodePane
        textSize={22}
        transition={[]}
        lang="jsx"
        source={require("raw-loader!../assets/code/componentComposition.example")}
      />
    </Slide>

    <Slide bgColor="tertiary">
      <Heading textColor="primary" size={2}>
        Data & data flow
      </Heading>
    </Slide>

    <Slide bgColor="tertiary">
      <Heading textColor="primary" size={4}>
        Data can be...
      </Heading>
      <List textColor="primary">
        <ListItem>A string</ListItem>
        <ListItem>A number</ListItem>
        <ListItem>An object</ListItem>
        <ListItem>A function</ListItem>
        <ListItem>pretty much anything</ListItem>
      </List>
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4} caps>
        Data flow
      </Heading>
      <Image src={images.globalflow} />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4} caps>
        Data flow - Props
      </Heading>
      <Image src={images.dataflow} />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4} caps>
        Data flow - Props and state
      </Heading>
      <Image src={images.state} />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Events go up </Heading>
      <Image src={images.flow1} />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Events go up </Heading>
      <Image src={images.flow2} />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Events go up </Heading>
      <Image src={images.flow3} />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4}>Event flow</Heading>
      <CodePane
        textSize={22}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/event-flow.example")}
      />
    </Slide>

    <Slide bgColor="tertiary">
      <Heading textColor="primary" size={4}>
        How to start a project - useful first resources
      </Heading>
      <List>
        <ListItem textColor="primary">
          ReactJs official website (docs, tuto...)
        </ListItem>
        <ListItem textColor="primary">
          <b>create-react-app</b> is a boilerplate powered by React team
        </ListItem>
        <ListItem textColor="primary">
          <b>component libraries</b> (Paper, Material-ui)...
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
