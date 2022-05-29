function showCoords(event){
    document.body.getElementsByClassName("red-box")[0].addEventListener("onMouseOver");
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    showCoords(event);
  console.log(coords);

    }