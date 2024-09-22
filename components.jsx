import React from "react";

export default function components(){
  return React.createElement(
    "div", //type
    { className: "card bg-neutral shadow-xl" }, //props
    "hello", //children
    "world",
    React.createElement("span", null, "yes")
  );
}