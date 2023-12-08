import { post } from "./post"
export class fb {
    private _likes: number;
    private _state: string;
    constructor(_likes?: number, _state?: string){
        this._likes = 0
        this._state = "off"
    }
    get likes(){
        return this._likes;
    }
    get state(){
        console.log("inside class", this._state)
        return this._state;
    }
    like(POST:post){
        if(this._state == "off"){
            POST.postLike()
            this._state = "on"
            this._likes += 1
        } else {
            POST.postUnLike()
            this._state = "off"
            this._likes -= 1
        }
    }
}