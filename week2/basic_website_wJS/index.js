

const head = document.createElement("h1");
const node1 = document.createTextNode("This is an H1");
head.appendChild(node1);
document.body.appendChild(head);


const para = document.createElement("P");
const node = document.createTextNode("This is a paragraph.");
para.appendChild(node);
document.body.appendChild(para);

// const ref = document.createElement("a")
// const node2 = document.createTextNode ("https://www.w3schools.com/jsref/prop_anchor_href.asp");
// ref.appendChild(node2);
// document.body.appendChild(ref)

const node4 = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.createElement("myList").appendChild(node4);
document.body.appendChild("myList");