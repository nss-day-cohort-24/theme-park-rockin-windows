"use strict";

var displayOutput = document.getElementById("display-output");
let displayArea = (displayInput)  => {
    displayOutput.innerHTML = "";
    if (displayInput["0"].area_id == "1") {
    displayOutput.innerHTML += `<h1>Main Street U.S.A</h1>`;
    console.log("It works");
    }
    console.log("output");
};

module.exports = {displayArea, displayOutput};