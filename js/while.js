"use strict";

var whileLessThan = 2;

while (whileLessThan <= 65536){
    console.log(whileLessThan);
    whileLessThan *= 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have to sell " + allCones + " cones! Let's do it!")

do {
    // This is how you get a random number between 1 and 5
    var cones = Math.floor(Math.random() * 5) + 1;
    if (cones > allCones){
        console.log("I can't sell you " + cones + " cones because I only have " + allCones + " cones left.");
    }else if (cones <= allCones){
        console.log(cones + " cones sold!");
        allCones -= cones
    }

}while (allCones > 0);
console.log("I think we're out of cones!");


