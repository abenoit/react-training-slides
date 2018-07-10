import React from "react";
import { SlideSet, Heading, Image, Slide, Text } from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  eslint: require("../assets/images/eslint.jpg"),
  prettier: require("../assets/images/prettier.png"),
  meme: require("../assets/images/eslintorprettier.jpg"),
  babel: require("../assets/images/babel.png"),
  webpack: require("../assets/images/webpack.png")
};

preloader(images);

export default (
  <SlideSet>
    <Slide bgColor="primary">
      <Heading size={4}>Tooling</Heading>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Image src={images.eslint} />
      <Text padding="20px 0">
        <b>Style and best practice</b>, based on a provided by third-part
        (Airbnb).
      </Text>
      <Text padding="20px 0">
        Usually used to ensure <b>code quality</b>
      </Text>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Image src={images.prettier} />
      <Text padding="20px 0">
        Ensure your codebase has a consistent <b>style</b>
      </Text>
      <Text padding="20px 0">
        Can be run in your editor on-save, in a pre-commit hook, or in CI
        environments
      </Text>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Image src={images.meme} />
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={4}>Do both !</Heading>
      <Text padding="20px 0">
        <b>ESLint</b> : code quality according to Airbnb code style base
      </Text>
      <Text padding="20px 0">
        <b>Prettier</b> : code style
      </Text>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Image src={images.babel} />
      <Text padding="20px 0">Javascript compiler</Text>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Image src={images.webpack} />
      <Text padding="20px 0">Bundles all your resources</Text>
    </Slide>

    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={4} textColor="secondary">
        Devtools
      </Heading>
      <Text padding="20px 0">https://github.com/facebook/react-devtools</Text>
      <Text padding="20px 0">
        Inspect React component hierarchy, including props and state.
      </Text>
    </Slide>
  </SlideSet>
);
