import React, { useEffect, useState } from 'react'
import { useForm ,SubmitHandler} from 'react-hook-form'
import { useNavigate, useParams,Link } from "react-router-dom"
import { get } from '../../../api/Category'
import { ICategory } from '../../../type/Category'
import { Table,Space,Button, Breadcrumb } from 'antd';
type Category_editProps={
    onUpdateCate:(categorys:ICategory)=>void;
}
type TypeInputs = {
    name:string
    slug:string

}

const Category_edit = (props:Category_editProps) => {

     
    const {register,handleSubmit,formState:{errors},reset}=useForm<TypeInputs>();  
    const navigate =  useNavigate();
    const {slug} = useParams();

    useEffect(()=>{
        const getCategory = async()=>{
            const {data} =await get(slug);        
            reset(data.category);
      
        }
        getCategory();
    },[])
    const onSubmit:SubmitHandler<TypeInputs>=data=>{
        props.onUpdateCate(data)
        navigate("/admin/categorys")

    }
    return (
    <div>
         <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/admin/categorys">Categorys</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Edit</Breadcrumb.Item>
        </Breadcrumb>
<form onSubmit={handleSubmit(onSubmit)}>
  <div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" placeholder='Nhap ten...' {...register('name')} />
  </div>
  <button type="submit"  className="bg-[#cecccc] rounded hover:text-[#2a4a84] hover:bg-slate-200 p-3">Submit</button>
</div>
</form>
    </div>
  )
}

export default Category_edit