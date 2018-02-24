"use strict";

let XHRcalls = require("./_XHRcalls.js");
let outputCategory = require("./_output-category.js");
let eventListeners = require("./_eventListener.js");
let sortTime = require("./_sortByTime.js");
let moment = require('../lib/node_modules/moment');

console.log('moment js begins');
require('../lib/node_modules/moment/locale/cs');
console.log(moment().hour());
console.log('moment js ends');

let copyrightDate = require("./_copyrightDate.js");

//Outputs current date and time to copyright area
copyrightDate.output();
console.log('main.js loaded');