"use strict";

var displayOutput = document.getElementById("display-output");
let displayArea = (displayInput)  => {
    displayOutput.innerHTML = "";
    if (displayInput["0"].area_id == "1") {
    displayOutput.innerHTML += `<h1>Main Street U.S.A</h1>`;
    console.log("It works");
    }
    console.log("output");
    for (let item in displayInput) {
        let areaPOI = displayInput[item];
        displayOutput.innerHTML += `<a href="#"><h2>${areaPOI.name}</h2></a>`;
    }
};

module.exports = {displayArea, displayOutput};