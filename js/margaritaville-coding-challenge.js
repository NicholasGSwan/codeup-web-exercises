"use strict";
//number 1
function findTheSign(a, b, c){
    var whatSign = a * b * c
    if (whatSign < 0){
        return "-"
    }else {
        return "+"
    }
}
// tests for finding the sign
// console.log(findTheSign(4, 5, 9))
//
// console.log(findTheSign(-4, 5, 9))
//
// console.log(findTheSign(-4, 5, -9))
//
// console.log(findTheSign(4, 2, 0))



var testArray = [4, 0, 2];

// Number 2
// please enter an array
function sortTheArray(array) {
    while (array[0] < array[1] || array[1] < array[2] || array[0] < array[2]) {
        if (array[0] < array[2]) {
            var poppedNumber = array.pop();
            array.unshift(poppedNumber);
            console.log(array);
        } else if (array[0]< array[1]){
            var shiftedNumber = array.shift();
            array.push(shiftedNumber);
            console.log(array)
        } else if (array[1]< array[2]){
            poppedNumber = array.pop();
            var poppedNumber2 = array.pop();
            array.push(poppedNumber);
            array.push(poppedNumber2);
        }
    }
    return array
}


//number 3

function convertTheDegrees(number){
    var farenheit = confirm("Is this Fahrenheit (convert to celsius)? Click cancel to convert from celsius to fahrenheit");
        if (farenheit){
        number = (number - 32)/1.8

    }else {
            number = (number*1.8)+32
        }
    return number
}


// number 4

function isOneFifty (a, b){
    if (a === 50 || b=== 50 || a + b === 50){
        return true
    }else {
        return false
    }
}

// number 5
function addingPy(string){
    if (string.substring(0,2) === "Py"){
        return string;
    }else {
        string = string.toLowerCase();
        string = "Py" + string;
        return string;
    }
}