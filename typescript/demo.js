"use strict";
function printLabel(fn) {
    console.log(fn.name);
}
var myObj = { size: 10, name: "Size 10 Object" };
printLabel(myObj);
