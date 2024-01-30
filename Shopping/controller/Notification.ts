import {checkLength} from '../utils/conditions'
export class Notification {
    private _number: number;
    private _email: string;
    private _message: string;

    constructor(_number:number, _email:string, _message:string){
        this._number = _number;
        this._email = _email;
        this._message = _message;
    }

    public sms(_number:number, _message:string){
        if (_number == null || isNaN(_number) || checkLength(_number)!=10) throw new Error("Invalid number");
        console.log(`Sending sms ${_message} to ${_number}`)
    }

    public email(_email:string, _message:string){
        let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+(\.\w{2,3})+$/;
        if (!regExp.test(_email)) throw new Error("Invalid email address")
        console.log(`Sending email ${_message} to ${_email}`);
    }
}