let square = document.createElement('div');
document.body.appendChild(square);

square.style.height = '50px';
square.style.width = '50px';
square.style.backgroundColor = 'white';

document.body.style.backgroundColor = 'orange';
window.addEventListener("load", onLoad);

function onLoad() {
  square.style.backgroundColor = 'black';
}

square.addEventListener('mouseover', mouseOver);
function mouseOver() {
  square.style.backgroundColor = 'green';
}

square.addEventListener('mousedown', mouseDown);
function mouseDown() {
  square.style.backgroundColor = 'yellow';
}

square.addEventListener('mouseup', mouseUp);
function mouseUp() {
  square.style.backgroundColor = 'Blue';
}

square.addEventListener('dblclick', dblClick);
function dblClick() {
  square.style.backgroundColor = 'red';
}

square.addEventListener('wheel', wheel);
function wheel() {
    square.style.backgroundColor = 'purple';
  }
  