"use strict";
exports.__esModule = true;
var Persegi = /** @class */ (function () {
    function Persegi(sisi) {
        this.sisi = 0;
        this.sisi = sisi;
    }
    Persegi.prototype.luas = function () {
        return this.sisi * this.sisi;
    };
    Persegi.prototype.keliling = function () {
        return 4 * this.sisi;
    };
    return Persegi;
}());
exports["default"] = Persegi;
