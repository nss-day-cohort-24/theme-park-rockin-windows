"use strict";
let areaOutput = require("./_output-category");

// Grab Area Data by key
let getAreaData = (event) => {
    // Area data in variable 
    console.log(event.target.id);
    return new Promise((resolve, reject) => {

        var areaData = `https://rockin-windows.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${event.target.id}`;
        console.log(areaData);
    
   // Create request
        let request = new XMLHttpRequest();

        request.onload = function() {
             if (request.status === 200) {
                 let data = JSON.parse(request.responseText);
                    resolve(data);       
                } 
        };
        request.open("GET", areaData);
        request.send();
    });
};
 
let getTimeData = () => {
    return new Promise((resolve, reject) => {
    // Area data in variable
    var timeData = 'https://rockin-windows.firebaseio.com/attractions.json'; 
    // Create request
    let request = new XMLHttpRequest();

    request.onload = function() {
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);
            console.log(data);
            resolve(data);       
        } 
    };
    request.open("GET", timeData);
    request.send();
    });
};
getTimeData();

let getPOIData = () => {
    return new Promise((resolve, reject) => {
    // Area data in variable
    var POIData = 'https://rockin-windows.firebaseio.com/attractions.json'; 
   // Create request
   let request = new XMLHttpRequest();

    request.onload = function() {
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);       
        } 
    };
    request.open("GET", POIData);
    request.send();
    });
};

let getPOIdesc = (new_ID) => {
    // Area data in variable 
    return new Promise((resolve, reject) => {

        var POIdesc = `https://rockin-windows.firebaseio.com/attractions.json?orderBy="id"&equalTo=${new_ID}`;
        console.log(POIdesc);
    
   // Create request
        let request = new XMLHttpRequest();

        request.onload = function() {
             if (request.status === 200) {
                 let data = JSON.parse(request.responseText);
                    resolve(data);       
                } 
        };
        request.open("GET", POIdesc);
        request.send();
    });
};

// let AttData;
// let getAttType = () => {
//     // Area data in variable 
//     // return new Promise((resolve, reject) => {

//         var AttType = `https://rockin-windows.firebaseio.com/attraction_types.json`;
//         console.log(AttType);
        
//     // Create request
//         let request = new XMLHttpRequest();

//         request.onload = function() {
//                 if (request.status === 200) {
//                 AttData = JSON.parse(request.responseText);
//                     console.log("LoadedAtt", AttData);
//                     // resolve(AttData);
//                 } 
//         };
//         request.open("GET", AttType);
//         request.send();
//     // });
// };

module.exports = {getAreaData, getTimeData, getPOIData, getPOIdesc};
