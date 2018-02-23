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
let listofAttractions = {
"attractions": [
    {
        "id": 1,
        "name": "Walt Disney World Railroad",
        "description": "Listen to the clamor of the engine, the chug of the wheels and the call of the whistle as you travel aboard the Walt Disney World Railroad. Offering convenient stops at Frontierland, Fantasyland and Main Street, U.S.A., it's the perfect way to preview the magic at Magic Kingdom park and take in the picturesque scenery.",
        "times" : ["8:00AM", "10:00PM"],
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

// // let attractionItem0 = attractions[3] // output the object with the id of 4/name Emporium

// // let attractionIDValue = attractions[i].id // outputs 4;
// // let attractionTimeValues = attractions[i].times // outputs ["9:00AM", "11:00AM"];

// we have an object - we can loop through "attractionItems" to check each item(object) for a key called times

// if the item object has the key "times" then return the value of the id of that object item

// //create function that sort through the attraction object
// //then output only those ids that have a time property into an array

// //we loop through the array of attractions items and find those that have they key of "times"
// //then we return the id of that object

// // get the attractions that have the property of times

// let attractionsWithTimes = [1, 2, 4]; //attraction[id]
// attractionsWithTime[3] = 4;

// //loop through the array to get the attraction id
// //then we call the times property of the object containing the id
// attractionsWithTime[3];



// let attractionsByTime = {};
// // store times as key in object called attractionsByTime


// // then store any ids with corresponding times in am array as a value of that time property

// /////sort the attractions by exact time; example time is 9:40 and attraction a and b ore open

// let attractionsByTime = {
//     "8:00AM" : [1],
//     "9:00AM" : [4],
//     "10:00AM" : [1, 2],
//     "11:00AM" : [4],
//     "11:40AM" : [2]
// }; 

// //comparing userSelection to the attractionTimes






module.exports = {};

// let dropdown = document.getElementById("timeOptions").addEventListener("select", );

// function getIndexNumber (userSelection) { //declared a function call getIndexNumber and passing in the usersSelection
//     let selectedTime = userSelection;

// }
    


// let i = eventListener


//time is associated with array number
//insert array number into the variable below





// let displayTime = (displayInput) => { //declaring a variable called displayTime and setting the parameter to displayInput (which is passing in an Object)
//     displayOutput.innerHTML = ""; //the innerHTML of the variable displayOutput is set to an empty string
//     let arrayofTimes = Object.values(displayInput); //declared a variable called arrayOfTimes which is set to the Object.values of the displayInput
// };

// for (let i = 0; i = optionsArray.length; i++){
//     let selectedTime = document.getElementById("timeOptions").options[i].innerText;
//     switch (true) {
//         case (getSelectedTime === "10 AM"):
//             return i;
//             break;
//         case (getSelectedTime === "11 AM"):
//             return i;
//             break;
//         case (getSelectedTime === "12 PM"):
//             return i;
//             break;  
//         case (getSelectedTime === "1 PM"):
//             return i;
//             break;  
//         case (getSelectedTime === "2 PM"):
//             return i;
//             break;  
//         case (getSelectedTime === "3 PM"):
//             return i;
//             break;  
//         case (getSelectedTime === "4 PM"):
//             return i;
//             break;  
//         case (getSelectedTime === "5 PM"):
//             return i;
//             break;  
//         case (getSelectedTime === "6 PM"):
//             return i;
//             break;  
//         case (getSelectedTime === "7 PM"):
//             return i;
//             break;  
//         case (getSelectedTime === "8 PM"):
//             return i;
//             break;  
//         }
// }
// 
