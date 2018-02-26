"use strict";

let XHRcalls = require("./_XHRcalls.js");
var displayOutput = document.getElementById("display-output");
////// display area 

let displayArea = (displayInput)  => {
    displayOutput.innerHTML = "";
    let arrayOfAttractions = Object.values(displayInput);
    console.log(arrayOfAttractions);
    console.log("FOCUS", arrayOfAttractions[0].id);
    console.log("displayInput", arrayOfAttractions[0]);
    if (arrayOfAttractions[0].area_id == 1) {
        console.log("button 1");
        displayOutput.innerHTML += `<h1>Main Street U.S.A</h1>`;
    } else if (arrayOfAttractions[0].area_id == 2) {
        console.log("button 2");
        displayOutput.innerHTML += `<h1>Adventureland</h1>`;   
    } else if (arrayOfAttractions[0].area_id == 3) {
        console.log("button 3");
        displayOutput.innerHTML += `<h1>Frontierland</h1>`;
    } else if (arrayOfAttractions[0].area_id == 4) {
        console.log("button 4");
        displayOutput.innerHTML += `<h1>Liberty Square</h1>`;
    }

    for (let item in arrayOfAttractions) {
        let areaPOI = arrayOfAttractions[item];
        console.log("areaPOI", areaPOI);
        displayOutput.innerHTML += `<a href="#"><h2 class="POI" id="POI${areaPOI.id}">${areaPOI.name}</h2></a><p class="clrDesc" id="desc${areaPOI.id}"></p>`;
    } 
};

// Get times into an array
let displayTime = (displayInput) => {
    displayOutput.innerHTML = "";
    let arrayofTimes = Object.values(displayInput);
};


module.exports = {displayArea, displayOutput};
