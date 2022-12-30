//Window prompt

let username
document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("Name").innerHTML = "Hello " + username;
}