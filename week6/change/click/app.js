// make the box disapear when the user clicks it

var x = document.getElementsByClassName("red-box")[0];

function myFunction() {
  x.style.display = "none";
}
 x.addEventListener("click" , myFunction)
 