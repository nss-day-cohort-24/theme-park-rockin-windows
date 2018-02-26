"use strict";
let moment = require('../lib/node_modules/moment/');
let XHRcalls = require('../js/_XHRcalls.js');
///// Instructions
// if they click 10  then insert 1 into let i

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
let callData = XHRcalls.getTimeData().then(
    (resolve) => {
        console.log('resolved:', resolve);
        sortByTime(resolve);
    }
);

let sortByTime = (listOfAttractions) => {
    console.log('list of attractions', listOfAttractions[3]);

    let attractionItem0 = listOfAttractions[3]; // output the object with the id of 4/ne Emporium
    console.log('attraction item 3:', attractionItem0);

    let attractionIDValue = listOfAttractions[3].id; // outputs 4;
    console.log('attraction 4 id number:', attractionIDValue);

    let attractionTimeValues = listOfAttractions[3].times; // outputs ["9:00", "11:00"];
    console.log('attraction 4 Time Values:', attractionTimeValues);

    let attractionsWithTimes = []; 
    // console.log('attractionsWithTimes:', attractionsWithTimes);
    // we have an object - we can loop through the attraction array to check each item(object) for a key called times
    let checkForTimes = (A) => { //declare a fat arrow function with pareter A to pass in arrays
        for (let i = 0; i < A.length; i++) {
            // console.log(A[i]); //outputs to console the current item-object
            // if the attractionItem has the key "times" then return the value of the id of that object item into the empty array attractionsWithTimes
            for (let prop in A[i]) {
                // console.log('current prop:', prop);
                if (prop === "times"){
                    attractionsWithTimes.push(A[i].id);
                }
            }
        }
    };

    checkForTimes(listOfAttractions);
    console.log('full attractionsWithTimes:', attractionsWithTimes);

    // final result should be 
    // let attractionsWithTimes = [1, 2, 4];

    //search attractionsArray for items with id properties stored in the attractionsWithTimes array
    //for each matching item, check the times property for any times that are not already stored in the attractionTimes array - if they are not, store them

    let attractionTimes = [];
    console.log('empty attractionTimes array:', attractionTimes);

    //taking the id from the attractionsWithTimes items and comparing to the id of the attractions array
    // console.log('attractionsWithTime item 0:', attractionsWithTimes[0]);
    // console.log('list of attractions, attractions[0].id:', listOfAttractions[0].id);

    let fillAttractionTimes = (A) => { 
        
        for(let i = 0; i < attractionsWithTimes.length; i++) {
            // console.log('outside IF: index number is ' + i + '. What is the id of that index? ' + attractionsWithTimes[i]);
            
            for (let j = 0; j < A.length; j++) {

                // console.log('which object are we:', A[j].id);

                if (attractionsWithTimes[i] === A[j].id) {
                    // console.log('attractionsWithTimes: ' + attractionsWithTimes[i] + '. Array Id: ' + A[j].id);
                    let timesArray = A[j].times; //store the items times in a local array
                    // console.log('the id is ' + A[j].id + ' What times do I have? ', timesArray);
                    // check the times property for any times that are not already stored in the attractionTimes array - if they are not, store them
                    
                    for(let k = 0; k < timesArray.length; k++) {

                        if ( attractionTimes.includes(timesArray[k]) === false) {
                            // console.log("time to add:", timesArray[k]);
                            attractionTimes.push(timesArray[k]);
                        }
                    }

                }
            }
        }
    };
    fillAttractionTimes(listOfAttractions);

    console.log('full attractionTimes array:', attractionTimes);
    // // final result shouhld be 
    // let attractionTimes = ["8:00AM", "10:00AM", "11:40AM", "9:00AM", "11:00AM"];

    //parse our attractionTimes array into military time
    console.log(moment().minute());

    let attractionTimesMilitary = [];

    let convertTimeToMilitary = (A, B) => {
        for (let i = 0; i<A.length; i++){

            let newTime = moment(A[i], "hh:mmaa").format("HH:mm");

            // console.log("military time to add", newTime);

            B.push(newTime);
        }
    };

    // for (let i = 0; i<attractionTimes.length; i++){

    //     let newTime = moment(attractionTimes[i], "hh:mmaa").format("HH:mm");

    //     // console.log("military time to add", newTime);

    //     attractionTimesMilitary.push(newTime);
    // }

    convertTimeToMilitary(attractionTimes, attractionTimesMilitary);

    console.log('parsed attractionTimesMilitary array: ', attractionTimesMilitary);
    // // final result: attractionTimesMilitary = ["08:00", "10:00", "11:40", "09:00", "11:00"];

    //take off mm of military times
    let ABTkeys = [];

    let convertToHoursOnly = (A) => {
        for (let i=0; i < A.length; i++) {
            // console.log('time to convert:', A[i]);
            //take first item in array
            //take the mm off the item
            let convertedTime = A[i].slice(0, 2);

            // console.log('time converted:', convertedTime);

            //if the item does not match any other items in the array 
            for(let k = 0; k < A.length; k++) {

                if ( ABTkeys.includes(convertedTime) === false) {
                    // console.log("time to add:", timesArray[k]);
                    ABTkeys.push(convertedTime);
                    // console.log('ABTkeys: ', ABTkeys);
                }
            //return item to new array called ABTkeys
            }   
        }
    };

    convertToHoursOnly(attractionTimesMilitary);


    // define properties and values of sortedAttractionsByTime object
    let sortedAttractionsByTime = {};

    let convertItemsToKeys = (A) => { //parameter A is an array we want to convert to keys
        console.log('converted hours', A);
        for (let i = 0; i < A.length; i++){
            let key = A[i]; //set variable key to current item in ABTkeys array
            // console.log('current key is:', key);
            sortedAttractionsByTime[key] = []; //set the key equal to an empty array
            // console.log('current key value is:', sortedAttractionsByTime[key]);
        }
    };

    convertItemsToKeys(ABTkeys);

    console.log('value of item 0 in sABT obj:', sortedAttractionsByTime[10]); // returns an empty array; to push to array => array.push('content') => sortedAttractionsByTime[10].push('attraction id')

    console.log('sort:', sortedAttractionsByTime); 
    //find all ids whose times property contains that hour

    for (let i = 0; i < attractionsWithTimes.length ; i++) {
        let itemID = attractionsWithTimes[i]; //returns the id of the attraction
        console.log('item ID is:', itemID);
        
        for(let j = 0; j < listOfAttractions.length; j++) { //loops through the list of attractions 
            let currentAttractionsItem = listOfAttractions[j]; // sets the current attractions as a value of this variable
            // console.log('current Attractions item: ', currentAttractionsItem);
            if (itemID === currentAttractionsItem.id) { //if the itemID and id of the current attractions match
                console.log('they match');
                let timesOfItem = currentAttractionsItem.times; //then return the times of that current attraction
                // console.log('Array of times for this item are: '+ timesOfItem);
                
                //convert times to military in preparation to compare
                let militaryTimesOfItem = [];
                convertTimeToMilitary(timesOfItem, militaryTimesOfItem); //convert the current attraction times to military times
                console.log('militaryTimesOfItem:', militaryTimesOfItem);

                for (let k = 0; k < militaryTimesOfItem.length; k++ ) { //loop through the converted times
                let compareItem = militaryTimesOfItem[k]; //k
                // console.log('comparison item', compareItem);
                
                for(let l = 0; l < ABTkeys.length; l++) {//then loop through the keys
                    let compareKey = ABTkeys[l]; // l
                    // console.log('ABT key 0:', compareKey);

                    if (compareItem.slice(0,2) === compareKey) { //if the converted time matches a key 
                        //push the itemID to the sortedAttractionsByTime.0800
                        // console.log("key " + compareKey + " to return itemID to:" + sortedAttractionsByTime[compareKey]);
                        // console.log("id to push to key: ", itemID);
                        sortedAttractionsByTime[compareKey].push(itemID); //then push the id of the attraction to that key
                        console.log(sortedAttractionsByTime);
                        } else {
                        console.log('comparison failed');
                    }
                }    
            }
        }
    }
    }

    //  //final result: 
    //  let sortedAttractionsByTime = {
    //      "08:00" : [1],
    //      "09:00" : [4],
    //      "10:00" : [1, 2],
    //      "11:00" : [4],
    //      "11:40" : [2]
    //  }; 

    // // //comparing userSelection to the attractionTimes
};

module.exports = {};
