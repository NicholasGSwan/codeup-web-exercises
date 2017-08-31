"use strict";
(function(){
// $("#superneatparagraph").css("background-color", "yellow")
// $(".codeup").css("border", "1px solid red")
//     $("li").css("font-size", "20px");
//     $("h1, p, li").css("background-color", "yellow");
//     alert($("h1").html());

//    variables here
var headerSelector = $("h1");
var paragraphSelector = $("p");
var listItemSelector = $("li");

//events here
headerSelector.click(changeBackgroundToRed);
paragraphSelector.dblclick(makeTextBigger);
listItemSelector.hover(makeTextRed, changeTextBack);

// functions here
function changeBackgroundToRed(){
  $(this).css("background-color", "red");
};
function makeTextBigger(){
    $(this).css("font-size", "18px")
}
function makeTextRed(){
    $(this).css("color", "red")
}
function changeTextBack(){
    $(this).css("color", "black")
}

})();