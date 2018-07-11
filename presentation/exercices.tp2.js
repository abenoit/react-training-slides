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
    <Slide bgColor="primary">
      <Heading size={4} textColor="secondary" caps>
        &lt; Let's TP2 /&gt;
      </Heading>
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4} textColor="secondary" caps>
        Style your components
      </Heading>
      <Text padding="20px 0">1. Attribute className</Text>
      <CodePane
        textSize={25}
        transition={[]}
        lang="javascript"
        source="render() {
          return <div className=&quot;myComponentClass&quot;/>
        }"
      />
      <Text padding="20px 0">2. Attribute style</Text>
      <CodePane
        textSize={25}
        transition={[]}
        lang="javascript"
        source="render() {
          return <div style={{fontSize: &quot;1.5em&quot;}}/>
        }"
      />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4} textColor="secondary" caps>
        Loop inside template
      </Heading>
      <Text padding="20px 0">Use JS function map</Text>
      <CodePane
        textSize={25}
        transition={[]}
        lang="javascript"
        source="render() {
          return this.props.cats.map(cat => <span>{cat.name}</span>)
        }"
      />
    </Slide>

    <Slide bgColor="primary">
      <Heading size={4} textColor="secondary" caps>
        Bind events
      </Heading>
      <CodePane
        textSize={25}
        transition={[]}
        lang="javascript"
        source={require("raw-loader!../assets/code/component.event.example")}
      />
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={3} textColor="secondary">
        Exercice statement
      </Heading>
      <List ordered textColor="secondary">
        <ListItem padding="20px 0">
          Add a color and style the cat's name according its color
        </ListItem>
        <ListItem padding="20px 0">
          Create an array of cats and display them using a map function
        </ListItem>
        <ListItem padding="20px 0">Add a button for the cat to meow</ListItem>
      </List>
    </Slide>
  </SlideSet>
);
