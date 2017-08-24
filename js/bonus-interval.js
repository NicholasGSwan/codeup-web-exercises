"use strict";
var interval = 45000;


function whyDoesntThisWork (){
    var stillHere = confirm("You've been idle, are you still there?");
    if (stillHere == false){
        window.location="http://www.google.com"
    }
}
setInterval(whyDoesntThisWork, interval);

