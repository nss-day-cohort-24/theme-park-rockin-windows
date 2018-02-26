"use strict";
let XHRcalls = require("./_XHRcalls.js");
let areaOutput = require("./_output-category");
let POIOutput = require("./_output-POI");
let searchEvent = require("./_search.js");

// Area buttons
let button1 = document.getElementById("1").addEventListener("click", area);
let button2 = document.getElementById("2").addEventListener("click", area);
let button3 = document.getElementById("3").addEventListener("click", area);
let button4 = document.getElementById("4").addEventListener("click", area);

// Search event - executes on click of enter key
let searchInput = document.getElementById("search");
searchInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        console.log("entered!");
        console.log(searchInput.value);
        searchEvent(searchInput.value);
    }
});

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

// module.exports = {button1};

document.querySelector("body").addEventListener("click", clickPOI);

function clickPOI(event){
    if (event.target.className === "POI"){
        console.log("click on hyperlink", event.target.id);
        let old_ID = event.target.id;
        let new_ID = old_ID.slice(3);
        console.log("new id", new_ID);
        XHRcalls.getPOIdesc(new_ID).then(
            (resolve) => {
                // Call a function to show my parsed data
                POIOutput.displayPOI(resolve);
            },
            (reject) => {
                console.log("didn't load!");
            }
        );
    }
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