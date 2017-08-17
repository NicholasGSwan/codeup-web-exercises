"use strict";
var numberToSkip;

while (true) {
    numberToSkip = prompt("Please enter an odd number between 1 and 50.");
    if (parseInt(numberToSkip) < 0) {
        console.log("That's not between 1 and 50!");
    }else if(parseInt(numberToSkip) > 50){
        console.log("That's not between 1 and 50!");
    }else if (numberToSkip % 2 === 0){
        console.log("That's not odd, that's even!");
    }else if (isNaN(numberToSkip)){
        console.log("That's not even a number!");
    }else {
        break
    }
}
console.log("The number to skip is: " + numberToSkip)
for (var i = 1; i < 50; i++){
   if (i % 2 === 1){
       if (parseInt(numberToSkip) === i){
           console.log("Yikes! Skipping the number " + i);
           continue;
       }else{/*does nothing*/}
       console.log("Here is an odd number: " + i);
   }

}