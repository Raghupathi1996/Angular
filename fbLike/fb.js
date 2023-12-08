"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fb = void 0;
var fb = /** @class */ (function () {
    function fb(_likes, _state) {
        this._likes = 0;
        this._state = "off";
    }
    Object.defineProperty(fb.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fb.prototype, "state", {
        get: function () {
            console.log("inside class", this._state);
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    fb.prototype.like = function (POST) {
        if (this._state == "off") {
            POST.postLike();
            this._state = "on";
            this._likes += 1;
        }
        else {
            POST.postUnLike();
            this._state = "off";
            this._likes -= 1;
        }
    };
    return fb;
}());
exports.fb = fb;
