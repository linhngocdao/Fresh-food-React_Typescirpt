import Product from "../components/Product";
import { IProduct } from "../type/Product";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./Instance";
const {token,user}= isAuthenticate()
export const list = ()=>{
    const url = "/products";
    return instance.get(url);
}
export const remove = (id:number)=>{
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const add = (product:IProduct)=>{
    // const url =`/products/${user._id}`;
    const url =`/products`;
    return instance.post(url,product)
    // return instance.post(url,product,{
    //     headers:{
    //         "Authorization":`Bearer ${token}`
    //     }
    // })
}
export const read = (id:string|undefined)=>{
    const url = `/products/${id}`;
    return instance.get(url)
}
export const update = (product:IProduct)=>{
    const url = `/products/${product._id}`;
    return instance.put(url,product);
}