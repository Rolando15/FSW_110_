function myForm(); {
let x = document.getElementsByClassName(value)[2];
var defaultVal = x.defaultValue;
var currentVal = x.value;

if (defaultVal == currentVal) {
  document.getElementById(x).innerHTML = "Current value is : "
  + x.defaultValue + " and " + x.value
  + "Change the number of number field to see the difference!";
} 
}
myForm();

  // function myAddition(numm1, numm2){
//     return  Number(numm1) + Number(numm2);
    
// }





// function mySubtraction(numm1, numm2){
//     return Number(numm1) - Number(numm2);

// }








// document.getElementById("myNumber").addEventListener("click", function(){
//     var firstnum = document.getElementById("firstNumber").value
//      var secondnum = document.getElementById("my2ndNumber").value
//     document.getElementById("add").textContent = "The result is " + myAddition (firstnum, secondnum)
 
//  });



//  document.getElementById("subtractButton").addEventListener("click", function(){
//     var thirdnum =  document.getElementById("thirdNumber").value
//     var fourthnum = document.getElementById("fourthNumber").value
//    document.getElementById("subtract").textContent = "The result is " + mySubtraction (thirdnum, fourthnum)

// });
 