(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var circleArea = Math.PI*Math.pow(this.radius, 2);
            // TODO: complete this method
            // hint: area = pi * radius^2

            return circleArea ; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding){
                var circleArea2 = Math.round(this.getArea());
            }else {
                circleArea2 = this.getArea();
            }


            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleArea2);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
