import {Error} from "./Error";

export class Result<T>
{
    errorMessage:string;
    errorMessages:Error[];
    success:boolean;
    data:T;
}