
function myAddition(numm1, numm2){
    return  Number(numm1) + Number(numm2);
    
}

function mySubtraction(numm1, numm2){
    return Number(numm1) - Number(numm2);

}
function myMultiplication(numm1, numm2){

    return Number(numm1) * Number(numm2);

}
function myDivision(numm1, numm2){
    return Number(numm1) / Number(numm2);

}

document.getElementById("addButton").addEventListener("click", function(){
   var firstnum = document.getElementById("firstNumber").value
    var secondnum = document.getElementById("secondNumber").value
   document.getElementById("add").textContent = "The result is " + myAddition (firstnum, secondnum)

});

document.getElementById("subtractButton").addEventListener("click", function(){
    var thirdnum =  document.getElementById("thirdNumber").value
    var fourthnum = document.getElementById("fourthNumber").value
   document.getElementById("subtract").textContent = "The result is " + mySubtraction (thirdnum, fourthnum)

});
document.getElementById("multiplyButton").addEventListener("click", myMultiplication);
document.getElementById("multiplyButton").addEventListener("click", function(){
    var fifthnum =  document.getElementById("fifthNumber").value
    var sixthnum = document.getElementById("sixthNumber").value
   document.getElementById("multiply").textContent = "The result is " + myMultiplication (fifthnum, sixthnum)

});
document.getElementById("divideButton").addEventListener("click", myDivision);
document.getElementById("divideButton").addEventListener("click", function(){
    var seventhnum =  document.getElementById("seventhNumber").value
    var eighthnum = document.getElementById("eighthNumber").value
   document.getElementById("divide").textContent = "The result is " + myDivision (seventhnum, eighthnum)

});






document.getElementById("addButton").style.backgroundColor = "orange"
document.getElementById("subtractButton").style.backgroundColor = "orange"
document.getElementById("multiplyButton").style.backgroundColor = "orange"
document.getElementById("divideButton").style.backgroundColor = "orange"

document.getElementById("add").style.padding = "25px";
document.getElementById("subtract").style.padding = "25px";
document.getElementById("multiply").style.padding = "25px";
document.getElementById("divide").style.padding = "25px";


document.getElementById("add").style.border = "thick dotted purple";
document.getElementById("subtract").style.border = "thick dotted purple";
document.getElementById("multiply").style.border = "thick dotted purple";
document.getElementById("divide").style.border = "thick dotted purple";


document.getElementById("firstNumber").style.textAlign = "center"
document.getElementById("secondNumber").style.textAlign = "center"
document.getElementById("thirdNumber").style.textAlign = "center"
document.getElementById("fourthNumber").style.textAlign = "center"
document.getElementById("fifthNumber").style.textAlign = "center"
document.getElementById("sixthNumber").style.textAlign = "center"
document.getElementById("seventhNumber").style.textAlign = "center"
document.getElementById("eighthNumber").style.textAlign = "center"


document.getElementById("add").style.margin = "50px 10px 20px 30px";
document.getElementById("subtract").style.margin = "50px 10px 20px 30px";
document.getElementById("multiply").style.margin = "50px 10px 20px 30px";
document.getElementById("divide").style.margin = "50px 10px 20px 30px";

document.body.style.backgroundColor = "lightgreen"
