document.getElementById("myButton").onclick = function() {


    const myCheckBox = document.getElementById("myCheckBox")
    const visaBtn = document.getElementById("visaBtn")
    const mastercardBtn = document.getElementById("mastercardBtn")
    const paypalBtn = document.getElementById("paypalBtn")




    if (visaBtn.checked){
        console.log("You are paying with a visa")
    }
    else if (mastercardBtn.checked){
        console.log("You are paying with a mastercard")
    }
    else if (paypalBtn.checked){
        console.log("You are paying with a PayPal")
    }
    else {
        console.log("You are you not selecting a payment")
    }
}