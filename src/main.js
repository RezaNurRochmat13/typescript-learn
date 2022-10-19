"use strict";
exports.__esModule = true;
exports.main = void 0;
var persegi_1 = require("./bangun-datar/persegi");
var user_1 = require("./user/user");
function main() {
    var user = new user_1["default"]("Reza");
    console.info("INFO: ", "Application is running successfully");
    // Bangun Datar 
    var persegiOne = new persegi_1["default"](4);
    console.log(persegiOne.keliling());
    console.log(persegiOne.luas());
    return "Hello TypeScript";
}
exports.main = main;
// Execute main application
main();
