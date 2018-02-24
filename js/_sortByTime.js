"use strict";
///// Instructions
// if they click 10 AM then insert 1 into let i

// then we compare i to string and if true
// then we return i

// we need call all the attractions with times (only)
// then put into an array
// then output array to output area

//user selects a time
let timeDropdown = document.getElementById("timeOptions"); 
console.log("Current Time:", timeDropdown.value);

function getTime () {
    console.log('inside getTime:', timeDropdown.value);
}
let userSelection = timeDropdown.addEventListener("change", getTime);
console.log('user selection', userSelection);




// full list of attraction
let listOfAttractions = {
"attractions": [
    {
        "id": 1,
        "name": "Walt Disney World Railroad",
        "description": "Listen to the clamor of the engine, the chug of the wheels and the call of the whistle as you travel aboard the Walt Disney World Railroad. Offering convenient stops at Frontierland, Fantasyland and Main Street, U.S.A., it's the perfect way to preview the magic at Magic Kingdom park and take in the picturesque scenery.",
        "times" : ["8:00AM", "10:00AM"],
        "type_id": 1,
        "area_id": 1
    },
    {
        "id": 2,
        "name": "Main Street Vehicles",
        "description": "Catch a nostalgic ride to Cinderella Castle or Town Square aboard a vintage vehicle. Board a classic horse-drawn car, omnibus, jitney or fire engine and sit back as you are ushered from one end of Main Street, U.S.A. to the other. Along the way, behold a bevy of 2- and 3-story-high, Victorian-themed shops and restaurants from a time and place long since passed.",
        "times" : ["10:00AM", "11:40AM"],
        "type_id": 1,
        "area_id": 1
    },
    {
        "id": 3,
        "name": "Harmony Barber Shop",
        "description": "Whether it’s your first haircut or your hundredth, the friendly and experienced barbers at Harmony Barber Shop on Main Street, U.S.A. will entertain you while making sure you look amazing. You may even be treated to the musical talents of the Dapper Dans, Disney’s very own barbershop quartet! And there’s a special My First Haircut  package for children that includes commemorative Mickey Ears and a certificate.",
        "type_id": 4,
        "area_id": 1
    },
    {
        "id": 4,
        "name": "Emporium",
        "description": "The largest gift and souvenir shop in Magic Kingdom park, the Emporium offers apparel, plush toys, pins, candy and more. ",
        "times" : ["9:00AM", "11:00AM"],
        "type_id": 4,
        "area_id": 1
    }
]
};

let attractionItem0 = listOfAttractions.attractions[3]; // output the object with the id of 4/name Emporium
console.log('attraction item 3:', attractionItem0);

let attractionIDValue = listOfAttractions.attractions[3].id; // outputs 4;
let attractionTimeValues = listOfAttractions.attractions[3].times; // outputs ["9:00AM", "11:00AM"];
let attractionsWithTimes = []; 
console.log('attractionsWithTimes:', attractionsWithTimes);
// we have an object - we can loop through the attraction array to check each item(object) for a key called times
let checkForTimes = (A) => { //declare a fat arrow function with parameter A to pass in arrays
    for (let i = 0; i < A.length; i++) {
        console.log(A[i]); //outputs to console the current item-object
        // if the attractionItem has the key "times" then return the value of the id of that object item into the empty array attractionsWithTimes
        for (let prop in A[i]) {
            console.log('current prop:', prop);
            if (prop === "times"){
                attractionsWithTimes.push(A[i].id);
            }
        }
    }
};

checkForTimes(listOfAttractions.attractions);
console.log('full attractionsWithTimes:', attractionsWithTimes);




// // final result should be 
// let attractionsWithTimes = [1, 2, 4];

// //search attractionsArray for items with id properties stored in the attractionsWithTimes array
// //for each matching item, check the times property for any times that are not already stored in the attractionTimes array - if they are not, store them

// let attractionTimes = [];
// // final result shouhld be 
// let attractionTimes = ["8:00AM", "10:00AM", "11:40AM", "9:00AM", "11:00AM"];
// let attractionsByTime = {};
// // create function that take the attractionTimes item values and make them into the attractionsByTime keys

// // Process:
// attractionsByTime."8:00AM" //undefined
// attractionsByTime."10:00AM" //undefine 

// // Result:
// attractionsByTime = {
//     "8:00AM" : undefined,
//     "9:00AM" : undefined,
//     "10:00AM" : undefined,
//     "11:00AM" : undefined,
//     "11:40AM" : undefined
// };

// // create a function that loops through the attractionsByTime object, 
// //comparing the keys to the "times" array items in each of the attractionsWithTimes array
// //if the key matches an item in the "times" array
// //then store the id as a value of that key

//  //final result: 
//  let attractionsByTime = {
//      "8:00AM" : [1],
//      "9:00AM" : [4],
//      "10:00AM" : [1, 2],
//      "11:00AM" : [4],
//      "11:40AM" : [2]
//  }; 

// // //comparing userSelection to the attractionTimes

module.exports = {};