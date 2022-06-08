document.getElementById("submit").addEventListener("click", function(e){
  e.preventDefault();
  
  var first = document.getElementById("fname").value;
    var last = document.getElementById("lname").value;
    let fav = document.querySelector("input[type='radio'][name=fav]:checked").value;
    document.getElementById("result").textContent =  "Your name is: " +  first +' ' + last + " favorite color: " + fav;


    alert("The form was submitted");
})



