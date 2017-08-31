"use strict";
(function(){
    var string = "";
    var konamiCodeString = "3838404037393739666513";
    $(document).keyup(function(event){
        console.log(event.keyCode);
    });


    $(document).keyup(function(event){

      string += event.keyCode;

      console.log(string);
        if(string.indexOf("3838404037393739666513") > -1){
          alert("konami code was entered");
            string = ""
        }else if(string != konamiCodeString.substr(0, string.length)){
            string = ""
        }

    })
})();