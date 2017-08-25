'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;
var zeroAppeared = 0;
var oneAppeared = 0;
var twoAppeared = 0;
var threeAppeared = 0;
var fourAppeared = 0;
var fiveAppeared = 0;

while (i <= 100) {
    luckyNumber = Math.floor(Math.random()* 6);
    switch (luckyNumber){
        case 0:
            zeroAppeared++;
            break;
        case 1:
            oneAppeared++;
            break;
        case 2:
            twoAppeared++;
            break;
        case 3:
            threeAppeared++;
            break;
        case 4:
            fourAppeared++;
            break;
        case 5:
            fiveAppeared++;
            break;
    }
    i++
    // What do I need here?
}
console.log("0 appeared " + zeroAppeared + " times");
console.log("1 appeared " + oneAppeared + " times");
console.log("2 appeared " + twoAppeared + " times");
console.log("3 appeared " + threeAppeared + " times");
console.log("4 appeared " + fourAppeared + " times");
console.log("5 appeared " + fiveAppeared + " times");
console.log(zeroAppeared + oneAppeared + twoAppeared + threeAppeared + fourAppeared + fiveAppeared);
// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100