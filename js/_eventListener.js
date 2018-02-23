"use strict";
let XHRcalls = require("./_XHRcalls.js");
let areaOutput = require("./_output-category");

// Area buttons
let button1 = document.getElementById("1").addEventListener("click", area);
let button2 = document.getElementById("2").addEventListener("click", area);
let button3 = document.getElementById("3").addEventListener("click", area);
let button4 = document.getElementById("4").addEventListener("click", area);

// Time values
let dropdown = document.getElementById("timeOptions").addEventListener("change", times);

function area(event) {
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

function times(event) {
    console.log(event);
    XHRcalls.getTimeData(event).then(
        (resolve) => {
            // Call a function to show my parsed data
                areaOutput.displayTime(resolve);
                console.log("loaded");
        },
        (reject) => {
            console.log("didn't load!");
        }
    );
}