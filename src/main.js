"use strict";
exports.__esModule = true;
exports.main = void 0;
var persegi_1 = require("./bangun-datar/persegi");
var persegi_panjang_1 = require("./bangun-datar/persegi_panjang");
function main() {
    // Bangun Datar 
    var persegiOne = new persegi_1["default"](4);
    console.log("Keliling Persegi :", persegiOne.keliling());
    console.log("Luas Persegi :", persegiOne.luas());
    var persegiPanjangOne = new persegi_panjang_1["default"](10, 23);
    console.log("Keliling Persegi Panjang :", persegiPanjangOne.keliling());
    console.log("Luas Persegi Panjang :", persegiPanjangOne.luas());
    console.info("INFO: ", "Application is running successfully");
}
exports.main = main;
// Execute main application
main();
