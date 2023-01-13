let pointsGuest = 0;
let guestPoints = 0;

document.getElementById("reset").onclick = function() {
  pointsGuest = 0;
  document.getElementById("homePoints").innerHTML = pointsGuest;
  guestPoints = 0;
  document.getElementById("guestPoints").innerHTML = guestPoints;
}

document.getElementById("onePoints").onclick = function(){
    pointsGuest += 1; 
    document.getElementById("homePoints").innerHTML = pointsGuest;
}
document.getElementById("twoPoints").onclick = function(){
    pointsGuest += 2; 
    document.getElementById("homePoints").innerHTML = pointsGuest;
}
document.getElementById("threePoints").onclick = function(){
    pointsGuest += 3; 
    document.getElementById("homePoints").innerHTML = pointsGuest;
}

document.getElementById("onePoints2").onclick = function(){
    guestPoints += 1; 
    document.getElementById("guestPoints").innerHTML = guestPoints;
}
document.getElementById("twoPoints2").onclick = function(){
    guestPoints += 2; 
    document.getElementById("guestPoints").innerHTML = guestPoints;
}
document.getElementById("threePoints2").onclick = function(){
    guestPoints += 3; 
    document.getElementById("guestPoints").innerHTML = guestPoints;
}

