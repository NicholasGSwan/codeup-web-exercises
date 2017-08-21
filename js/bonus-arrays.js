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
