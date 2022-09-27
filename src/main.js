"use strict";
exports.__esModule = true;
exports.main = void 0;
var reza_1 = require("./user/reza");
var user_1 = require("./user/user");
function main() {
    var user = new user_1["default"]("Reza");
    var reza = new reza_1["default"]("Reja");
    console.info("INFO: ", user.getName());
    console.info("INFO: ", reza.getName());
    return "Hello TypeScript";
}
exports.main = main;
console.log(main());
