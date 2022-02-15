(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,


        getArea: function () {
           var areaOfCircle = Math.PI * Math.pow(circle.radius, 2)
            // TODO: complete this method
            // hint: area = pi * radius^2

            return areaOfCircle; // TODO: return the proper value
        },
//what does it mean, if doRounding is true??
        logInfo: function (doRounding) {
            // TODO: complete this method.
            // Math.round(this.getArea()) --- round the area
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

if(doRounding == false) {           console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }else (console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea())))
    },}

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();