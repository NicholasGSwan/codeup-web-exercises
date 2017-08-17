"use strict";

var userNumber;



while (isNaN(userNumber) || userNumber > 10 || userNumber < 1){

    userNumber = prompt("Give a number between 1 and 10, please!");
    if (isNaN(userNumber)){
        alert("That's not a number!");
    }else if (userNumber < 1 || userNumber > 10){
        alert("That's not between 1 and 10!");
    }else {
        alert("Thanks! That will do!")
        console.log("A good value has been given.")
    }
    userNumber = Number(userNumber);
    // num = parseInt(userNumber);
    console.log("The number chosen is " + userNumber);
}

for (var multiplier = 1; multiplier <= 10; multiplier++){
    console.log(userNumber + "x" + multiplier + "=" + userNumber*multiplier)
}


for (var numberOfRandom = 0; numberOfRandom < 10; numberOfRandom++){
    var randomNumbers = Math.floor(Math.random() * 180) + 20;
    var oddOrEven = (randomNumbers % 2 === 0) ? "even" : "odd";
    console.log(randomNumbers + " is " + oddOrEven);
}

for (var i = 0; i <= 10; i++){
    // console.log(i);
    var str = '';

    for (var j = 0; i > j; j++ ){

        str += i;
        if (i === 10){

            str = str.replace(/1/g , "");

        }


    }
    console.log(str)
}






for (var downByFive = 100; downByFive > 0; downByFive -= 5){
    console.log(downByFive)
}


