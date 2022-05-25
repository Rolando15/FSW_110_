/* Your task is to display to the user the key and key code they press.
Example of output: You've pressed the "a" key. It's key code is 65.
Wes Bos made this https://keycode.info/ for us to use as an example. */


var output = document.getElementById("output");

document.body.addEventListener("keypress", function(event) {

    console.log(event)
    
 output.textContent = "You pressed the " + event.key + " key, " + "key code: " + event.keyCode
  }
);

