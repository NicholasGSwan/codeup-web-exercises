"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single random
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch(color) {
    case ("red"):
        console.log("Red like hot sauce.");
        break;
    case ("orange"):
        console.log("Orange like... oranges?");
        break;

    case ("yellow"):
        console.log("Yellow like dandelions.");
        break;
    case ("green"):
        console.log("Green as the grass");
        break;
    case ("blue"):
        console.log("Ocean blue, and just as deep.");
        break;
    default:
        console.log("er... I don't know anything about that color...");
        break;
}

    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.

var shopperNames = ['Cameron', 'Ryan', 'George'];
var shopperName = shopperNames[Math.floor(Math.random()*shopperNames.length)];

console.log("Shopper is " + shopperName);

switch (shopperName){
    case "Cameron":
    var itemsSubTotal = 180;
    break;
   case "Ryan":
    itemsSubTotal = 240;
    break;
    case "George":
    itemsSubTotal = 320;
    break;
}

console.log(shopperName + "'s subtotal is $" + itemsSubTotal);

if (itemsSubTotal > 200){
    var itemsGrandTotal = itemsSubTotal-(itemsSubTotal*.1);
    console.log(shopperName + "'s total after discount is $" + itemsGrandTotal);
}else{
    itemsGrandTotal = itemsSubTotal;
    console.log(shopperName + "'s total is $" + itemsGrandTotal + ". They did not get a discount.");
}

var flipACoin = Math.floor(Math.random()* 2);

console.log(flipACoin)


var buyAHouse = (flipACoin) ? console.log("Buy a house, dummy.") : console.log("Buy a car, I guess.")

var luckyNumber = Math.floor(Math.random()* 6);
var subTotal = 60;

switch (luckyNumber){
    case 0:
        var grandTotal = subTotal;
        console.log("Your total is $" + grandTotal);
        break;
    case 1:
        grandTotal = subTotal - (subTotal*.1);
        console.log("Your total is $" + grandTotal);
        break;
    case 2:
        grandTotal = subTotal - (subTotal*.25);
        console.log("Your total is $" + grandTotal);
        break;
    case 3:
        grandTotal = subTotal - (subTotal*.33);
        console.log("Your total is $" + grandTotal);
        break;
    case 4:
        grandTotal = subTotal - (subTotal*.5);
        console.log("Your total is $" + grandTotal);
        break;
    case 5:
        grandTotal = 0;
        console.log("Your order is free!");
        break;
    default:
        console.log("Oh, what? That's weird....");
        break;
}

var pickANumber = confirm ("Would you like to choose a number?");

if (pickANumber === true) {
    var numberPicked = prompt("Pick a number, any number:");
} else {
    alert("Oh, alright, I guess I'll leave you alone");
}
// prompt always returns a string!  if you need to use the number returned in a prompt
// you need to parse it as an integer.

if (isNaN(numberPicked)){
    alert("That's not a number, boy-o");

}else {
    var numberEven = (numberPicked % 2 === 0) ? alert(numberPicked + " is even!") : alert(numberPicked + " is odd!");

    var numberPlusOneHundred = 100 + parseInt(numberPicked);
    alert(numberPicked + " plus 100 equals " + numberPlusOneHundred);
    var numberIsPositive = (parseInt(numberPicked) >= 0) ? "You picked a positive number!" : "you picked a negative number!";
    alert(numberIsPositive);
    console.log(numberIsPositive);
}




