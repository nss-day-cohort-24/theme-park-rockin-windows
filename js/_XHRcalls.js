"use strict";

// Grab Area Data by key
let getAreaData = () => {
    // Area data in variable
    var areaData = 'https://rockin-windows.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=1'; 
   // Create request
   let http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("loaded");
            console.log(areaData);
        } 
    };
    http.open("GET", areaData, true);
    http.send();
};
getAreaData();

// Get Attractions - pulls all (those with times and without)
let getTimeData = () => {
    // Area data in variable
    var timeData = 'https://rockin-windows.firebaseio.com/attractions.json'; 
   // Create request
   let http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("loaded");
            console.log(timeData);
        } 
    };
    http.open("GET", timeData, true);
    http.send();
};
getTimeData();


// Get POI (attractions) by key
let getPOIData = () => {
    // Area data in variable
    var POIData = 'https://rockin-windows.firebaseio.com/attractions.json'; 
   // Create request
   let http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("loaded");
            console.log(POIData);
        } 
    };
    http.open("GET", POIData, true);
    http.send();
};
getPOIData();

module.export = {getAreaData, getTimeData, getPOIData};

