"use strict";

function findIndexWhereSumIs9(array){
    for (var i = 0; i < array.length; i++){
        if ((array[i][0]) + (array[i][1]) == 9){
            return i
        }

    }
    return -1
}

var findNine = [[2, 3], [6, 9], [4, 5], [2, 3]];
var doesNotAddUpToNine = [[3, 4], [10, 4], [8, 3], [13, -10]];
var didItWork = findIndexWhereSumIs9(findNine);
var didItWorkTheSecondTime = findIndexWhereSumIs9(doesNotAddUpToNine);
console.log(didItWork);
console.log(didItWorkTheSecondTime);

function sumEmUp(array){

    for (var i = 0 ; i < array.length; i++){
        var innerArrayTotal = 0;
        for(var j= 0; j< array[i].length; j++){
            innerArrayTotal += array[i][j]
        }
        array[i] = innerArrayTotal
    }
    return array
}

var testArray = [[1], [1, 2, 3], [5, 5, 5], [1, 1, 1, 1, 1]];
var secondTestArray = [[2, 5, 7], [20], [9, 2, 5, 1], [30, 17, 9, 3, 7]];

function twelveToTwentyFour(string){
    if (string.indexOf("p")>=0){
        string = string.substring(0, string.indexOf("p"));
        var stringArray = string.split(":");
        console.log(stringArray)
        stringArray[0] = parseInt(stringArray[0]) + 12;
        console.log(stringArray);
        string = stringArray.join(":");
    }else {
        string = string.substring(0, string.indexOf("a"));
    }
    console.log(string);
    return string;
}

var stupidString = "12:30pm";
var stupidArray = stupidString.split(":");
console.log(stupidArray)