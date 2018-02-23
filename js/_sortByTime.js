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
module.exports = {};