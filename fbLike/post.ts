export class post {
    public _postLikes: number;
    constructor(_postLikes?: number){
        this._postLikes = 0
    }
    // get postLikes() {
    //     return this._postLikes;
    // }

    get postLikes(){
        return this._postLikes;
    }

    postLike() {
        this._postLikes++;
    }
    postUnLike() {
        this._postLikes--;
    }
}