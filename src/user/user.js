"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name) {
        this.name = "";
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    return User;
}());
exports["default"] = User;
