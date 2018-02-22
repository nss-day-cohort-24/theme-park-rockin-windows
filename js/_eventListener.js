"use strict";
let XHRcalls = require("./_XHRcalls.js");
let areaOutput = require("./_output-category");

let button1 = document.getElementById("1").addEventListener("click", area1);
let button2 = document.getElementById("2").addEventListener("click", area1);
let button3 = document.getElementById("3").addEventListener("click", area1);
let button4 = document.getElementById("4").addEventListener("click", area1);

function area1(event) {
    XHRcalls.getAreaData(event).then(
        (resolve) => {
            // Call a function to show my parsed data
                areaOutput.displayArea(resolve);
        },
        (reject) => {
            console.log("didn't load!");
        }
    );
}

// module.exports = {button1};