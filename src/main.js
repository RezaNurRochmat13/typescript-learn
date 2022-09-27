"use strict";
exports.__esModule = true;
exports.main = void 0;
var user_1 = require("./user/user");
function main() {
    var user = new user_1["default"]("Reza");
    console.info("INFO: ", user.getName());
    return "Hello TypeScript";
}
exports.main = main;
console.log(main());
