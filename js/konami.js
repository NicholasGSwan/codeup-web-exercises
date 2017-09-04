"use strict";
(function(){
    var string = "";
    var konamiCodeString = "3838404037393739666513";
    var gokuPowerUpSound = new Audio("sounds/goku_power_up.mp3")
    $(document).keyup(function(event){
        console.log(event.keyCode);
    });


    $(document).keyup(function(event){

      string += event.keyCode;

      console.log(string);
        if(string == konamiCodeString){
            // gokuPowerUpSound.play();
          alert("His power level! It's over 9000! IMPOSSIBLE!");
          $("body").css("background-image", "url('img/supersaiyan.jpg')");
          gokuPowerUpSound.play();
            string = ""
        }else if(string != konamiCodeString.substr(0, string.length)){
            string = ""
        }

    })
})();