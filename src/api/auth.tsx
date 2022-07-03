import instance from "./Instance";
import {User} from "../type/User"
export const signup =(user:User)=>{
    const url = "/signup";
return instance.post(url,user);
}
export const signin = (user:User)=>{
    const url="/signin";
    return instance.post(url,user);
}