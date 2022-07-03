import Category from "../pages/Category";
import { ICategory } from "../type/Category";
import instance from "./Instance";
export const listCate =()=>{
    const url = "/categorys";
    return instance.get(url);
}
export const addcate =(category:ICategory)=>{
    const url = "/categorys";
    return instance.post(url,category);
}
export const removeCate = (id:number)=>{
    const url = `/categorys/${id}`;
    return instance.delete(url)
}
export const getcate =(_id:string|undefined)=>{
    const url = `/categorys/${_id}`;
    return instance.get(url)
    ;
}
export const get =(slug:string|undefined)=>{
    const url = `/categorys/${slug}`;
    return instance.get(url)
    ;
}
export const updatecate = (Category:ICategory)=>{
    const url = `/categorys/${Category._id}`;
    return instance.put(url,Category)
}