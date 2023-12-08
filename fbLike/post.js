"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
var post = /** @class */ (function () {
    function post(_postLikes) {
        this._postLikes = 0;
    }
    Object.defineProperty(post.prototype, "postLikes", {
        // get postLikes() {
        //     return this._postLikes;
        // }
        get: function () {
            return this._postLikes;
        },
        enumerable: false,
        configurable: true
    });
    post.prototype.postLike = function () {
        this._postLikes++;
    };
    post.prototype.postUnLike = function () {
        this._postLikes--;
    };
    return post;
}());
exports.post = post;
