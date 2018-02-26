"use strict";
let POIOutput = require("./_output-POI");
let XHRFunctions = require("./_XHRcalls.js");
let getPOIData = XHRFunctions.getPOIData;
var displayOutput = document.getElementById("display-output");

// take the input value from the event listener
// declare function to get POI data
// loop data through .search() function to check for matches to input
// if it doesn't match, index becomes -1

let searchEvent = (inputValue) => {
    let ids = [];
    let searchNames = [];
    let areaIds = [];
    getPOIData().then((data) => {
        for (var i = 0; i < data.length; i++) {
            let name = data[i].name.toLowerCase();
            let searchIndex = name.search(inputValue.toLowerCase());
                if (searchIndex !== -1) {
                    let dataID = data[i].id; 
                    ids.push(dataID); // push POI ids to an array
                    let areaID = data[i].area_id;
                    areaIds.push(areaID); // push area Ids to array
                    console.log(areaIds);
                    // pushes names to an array to display with function displaySearchResults 
                    searchNames.push(data[i].name);               
                }      
        }
       displaySearchResults(searchNames);
       highlightAreas(areaIds);
    });   
};


// create a function that displays the search results in the dom
let displaySearchResults = (searchNames) => {
    displayOutput.innerHTML = '';
    for (var i = 0; i < searchNames.length; i++) {
        displayOutput.innerHTML += `<a href="#"><h2>${searchNames[i]}</h2></a>`;

    } 
};

// highlight area when POI is comes up in search results
let highlightAreas = (areaIds) => {
    clearCards();
    for (var i = 0; i < areaIds.length; i++) {
        if (areaIds[i] === 1) {
            let area1 = document.getElementsByClassName("area-1");
            styleClassesRed(area1);
            } 
            if (areaIds[i] === 2) {
                let area2 = document.getElementsByClassName("area-2");
                styleClassesGreen(area2);
            } if (areaIds[i] === 3) {
                let area3 = document.getElementsByClassName("area-3");
                styleClassesRed(area3);
            } if (areaIds[i] === 4) {
                let area4 = document.getElementsByClassName("area-4");
                styleClassesGreen(area4);  
            } if (areaIds[i] === 5) {
                let area5 = document.getElementsByClassName("area-5");
                styleClassesGreen(area5);
            } if (areaIds[i] === 6) {
                let area6 = document.getElementsByClassName("area-6");
                styleClassesRed(area6);
            } if (areaIds[i] === 7) {
                let area7 = document.getElementsByClassName("area-7");
                styleClassesGreen(area7);
            } if (areaIds === 8) {
                let area8 = document.getElementsByClassName("area-8");
                styleClassesRed(area8);
            }   
    }
};
// loops through array of area classes and gives them background color
let styleClassesRed = (classArray) => {
    for (var j = 0; j < classArray.length; j++) {
        classArray[j].style.backgroundColor = "rgba(136, 47, 29, .7)";   
    }
};

let styleClassesGreen = (classArray) => {
    for (var j = 0; j < classArray.length; j++) {
        classArray[j].style.backgroundColor = "rgba(1, 87, 52, .7)";   
    }
};
// clears card class of styles
let clearCards = () => {
    let card = document.getElementsByClassName("card");
    for (var k = 0; k < card.length; k++) {
        card[k].style.backgroundColor = "";
    }
};
// clears search input field
let clearSearchInput = () => {
    input.reset();
};

// clear button event listeners
let clearButton = document.getElementById("clearSearch");
let input = document.getElementById("search");

clearButton.addEventListener("click", clearCards);
input.addEventListener("click", clearSearchInput);

module.exports = searchEvent;