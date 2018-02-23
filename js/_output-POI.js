"use strict";

var displayOutput = document.getElementById("display-output");
var descClass = document.getElementsByClassName("clrDesc");

let displayPOI = (inputPOI) => {
    for(let i = 0; i < descClass.length; i++){
        descClass[i].innerHTML = "";
    }

    console.log(descClass);
    console.log("INPUT", inputPOI);

    let arrayInput = Object.values(inputPOI);
    console.log("array", arrayInput);

    // var elememtIdName = "desc" + inputPOI.id;
    // console.log("element", elememtIdName);

    var descOutput = document.getElementById(`desc${arrayInput[0].id}`);
    console.log("desc", arrayInput[0].description);

    descOutput.innerHTML = `${arrayInput[0].description}`;
};

module.exports = {displayPOI, displayOutput};