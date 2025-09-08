// Default themes
import red from "./red.js";
import blue from "./blue.js";
import gray from "./gray.js";
import brown from "./brown.js";
import green from "./green.js";
import yellow from "./yellow.js";

// Custom themes
const customThemes = [
  {
    custom: true,
    name: "lego",
    main: "255, 205, 0",
    background: "255, 255, 255",
  },
  {
    custom: true,
    name: "salling-group",
    main: "255, 205, 0",
    background: "255, 255, 255",
  },
];

export default [red, blue, gray, brown, green, yellow, ...customThemes];
