"use strict";
let XHRcalls = require("./_XHRcalls.js");
let areaOutput = require("./_output-category");
let POIOutput = require("./_output-POI");

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