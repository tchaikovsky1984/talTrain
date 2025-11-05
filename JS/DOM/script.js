const body = document.body;

const heading = prompt("Enter Heading");

let count = 0;

const h_ele = document.createElement("h1");
const h_text = document.createTextNode(heading);
h_ele.appendChild(h_text);
body.appendChild(h_ele);

body.append("hello", "\nhi");

const div_ele = document.createElement("div");
const h3_ele = document.createElement("h3");
const h3_text = document.createTextNode("Click counter");

h3_ele.appendChild(h3_text);

const but_ele = document.createElement("button");
const but_text = document.createTextNode("Click me!");

let str = "\nCount : " + count;
let count_text = document.createTextNode(str);
let count_ele = document.createElement("span");

count_ele.appendChild(count_text);

but_ele.appendChild(but_text);
but_ele.setAttribute("style", "color:#0000ff; background:#eeee00;");

div_ele.appendChild(h3_ele);
div_ele.appendChild(but_ele);
div_ele.append(count_ele);

but_ele.addEventListener("click", () => {
  count++;
  console.log(count);
  //count_ele.remove();
  str = "\nCount : " + count;
  console.log(str);
  /*count_text = document.createTextNode(str);
  count_ele = document.createElement("span");
  count_ele.appendChild(count_text);
  div_ele.append(count_ele);*/
  count_ele.textContent = str;
});

body.appendChild(div_ele);

alert("Welcome to the page! Did all the stuff.");

