"use strict";

var displayOutput = document.getElementById("display-output");
let displayArea = ()  => {
    if (event.target.id === "1") {
    displayOutput += `<h1>Main Street U.S.A</h1>`;
    }
};

module.export = {displayArea,displayOutput};