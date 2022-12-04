import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(tsx?)$": "babel-jest",
    "^.+\\.(s?css|png|jpg|jpeg|svg)?$":
      "<rootDir>/src/_testing/file-path-transform.js",
  },
  transformIgnorePatterns: ["node_modules/(?!swiper|ssr-window|dom7/)"],
};

export default config;
