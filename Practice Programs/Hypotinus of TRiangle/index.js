let a 
let b 
let c 

document.getElementById("submitButton").onclick = function (){

a = document.getElementById("aTextBox").value
a = Number(a)

b = document.getElementById("bTextBox").value
b = Number(b)

a = Math.pow(a,2)
b = Math.pow(b,2)

c = Math.sqrt(a + b)

document.getElementById("cLabel").innerHTML = "Side C: " + c ;


}