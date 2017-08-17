"use strict";
function makeStars(x, y) {
    for (var i = 1; i <= x; i++) {
        var str = "";
        for (var j = 0; j < i; j++) {
            str += y.toString()
        }
        console.log(str)
    }
}

while (true){
    var userInput = prompt("Give me a positive integer, please!")
    if (userInput > 0){
        break;
    }
}
// while (true){
//     var repeatCharacter = prompt("Which character?")
//     if (repeatCharacter != ""){
//         break;
//     }
// }


makeStars(userInput, "*");