"use strict";

while (true){
    var userInput = prompt("Give me a positive integer, please!")
    if (userInput > 0){
        break;
    }
}

for (var i = 1; i <= userInput; i++){
    var str = "";
    for (var j = 0; j < i; j++){
        str += "*"
    }
    console.log(str)
}