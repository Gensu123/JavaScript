let input = document.getElementById("input");
let button = document.getElementById("button");
let length = document.getElementById("length");
let Volume = document.getElementById("Volume")
let Mass = document.getElementById("Mass")


button.addEventListener("click", function(){
    let inputValue = input.value; // get the value of the input
    if(!isNaN(inputValue)){  // check if input is a number
        let ans1 = (inputValue * 3.28084).toFixed(3);
        let ans2 = (inputValue * 0.3048).toFixed(3);
        let ans3 = (inputValue * 0.264172).toFixed(3);
        let ans4 = (inputValue * 3.78541).toFixed(3);
        let ans5 = (inputValue * 2.20462).toFixed(3);
        let ans6 = (inputValue * 0.453592).toFixed(3);
        

       length.innerHTML = `${inputValue} meters = ${ans1} feet | ${inputValue} feet = ${ans2} meters`;
       Volume.innerHTML = `${inputValue} liters = ${ans3} gallons | ${inputValue} gallons = ${ans4} liters`;
       Mass.innerHTML = `${inputValue} kilos = ${ans1} pounds | ${inputValue} pounds = ${ans2} kilos`; // update the text in the <p> element
    } else {
        length.innerHTML = "Please enter a valid number";
    }
});