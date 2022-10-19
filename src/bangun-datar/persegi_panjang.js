"use strict";
exports.__esModule = true;
var PersegiPanjang = /** @class */ (function () {
    function PersegiPanjang(panjang, lebar) {
        this.panjang = 0;
        this.lebar = 0;
        this.panjang = panjang;
        this.lebar = lebar;
    }
    PersegiPanjang.prototype.luas = function () {
        return 2 * (this.panjang + this.lebar);
    };
    PersegiPanjang.prototype.keliling = function () {
        return this.panjang * this.lebar;
    };
    return PersegiPanjang;
}());
exports["default"] = PersegiPanjang;
