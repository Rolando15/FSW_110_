
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

document.getElementById("multiplyButton").addEventListener("click", function(){
    var fifthnum =  document.getElementById("fifthNumber").value
    var sixthnum = document.getElementById("sixthNumber").value
   document.getElementById("multiply").textContent = "The result is " + myMultiplication (fifthnum, sixthnum)

});

document.getElementById("divideButton").addEventListener("click", function(){
    var seventhnum =  document.getElementById("seventhNumber").value
    var eighthnum = document.getElementById("eighthNumber").value
   document.getElementById("divide").textContent = "The result is " + myDivision (seventhnum, eighthnum)

});


document.getElementById("multiplyButton").addEventListener("click", myMultiplication);

document.getElementById("divideButton").addEventListener("click", myDivision);

