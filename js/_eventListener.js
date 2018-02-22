"use strict";
let XHRcalls = require("./_XHRcalls.js");

let button1 = document.getElementById("1").addEventListener("click", area1);
let button2 = document.getElementById("2").addEventListener("click", area2);
let button3 = document.getElementById("3").addEventListener("click", area3);
let button4 = document.getElementById("4").addEventListener("click", area4);

function area1() {
    XHRcalls.getAreaData();
}
function area2() {
    XHRcalls.getAreaData();
}
function area3() {
    XHRcalls.getAreaData();
}
function area4() {
    XHRcalls.getAreaData();
}

module.exports = {button1};