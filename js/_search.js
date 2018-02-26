"use strict";
let POIOutput = require("./_output-POI");
let XHRFunctions = require("./_XHRcalls.js");
let getPOIData = XHRFunctions.getPOIData;
var displayOutput = document.getElementById("display-output");

// take the input value from the event listener
// declare function to get POI data
// loop data through .search() function to check for matches to input
// if it doesn't match, index becomes -1
// if there is a match put a border around POI


let searchEvent = (inputValue) => {
    let ids = [];
    let searchNames = [];
    getPOIData().then((data) => {
        for (var i = 0; i < data.length; i++) {
            let name = data[i].name.toLowerCase();
            let searchIndex = name.search(inputValue.toLowerCase());
                if (searchIndex !== -1) {
                    let dataID = data[i].id; // target POI
                    ids.push(dataID);
                    searchNames.push(data[i].name);  
                    console.log(data[i].area_id);               
                }      
        }
       displaySearchResults(searchNames);
    });   
};

// create a function that displays the search results in the dom
let displaySearchResults = (searchNames) => {
    displayOutput.innerHTML = '';
    for (var i = 0; i < searchNames.length; i++) {
        displayOutput.innerHTML += `<a href="#"><h2>${searchNames[i]}</h2></a>`;

    } 
};



module.exports = searchEvent;