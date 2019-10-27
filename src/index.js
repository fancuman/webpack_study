import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import printMe from "./print";
function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  //add png to the current div
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  var btn = document.createElement("button");
  btn.innerHTML = "click me and check the console output";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
