document.getElementById("myForm").onsubmit = function() {myFunction()};

function myFunction() {
  ("The form was submitted");
}


document.getElementById("submit").addEventListener("click", function(){
    var first = document.getElementById("fname").value;
     var last = document.getElementById("lname").value;
    var result = document.getElementById("result").innerHTML.textContent = "Your name is: " +  (last, first);
    console.log(result);

}) 