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
  },
  {
    custom: true,
    name: "salling-group",
  },
  {
    custom: true,
    name: "oxygen",
  },
  {
    custom: true,
    name: "cernel-ai",
  },
  {
    custom: true,
    name: "novicell",
  },
  {
    custom: true,
    name: "finobo",
  },
  {
    custom: true,
    name: "onecode"
  },
  {
    custom: true,
    name: "netcompany"
  }
];

export default [red, blue, gray, brown, green, yellow, ...customThemes];
