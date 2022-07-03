import React, { useState } from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import { Table,Space,Button, Breadcrumb } from 'antd';
type CategoryAddProps={
    name:string
    onAddcate:(categorys:TypeInputs)=>void;
}
type TypeInputs={
    name:string,
  slug:string,
}
const Category_add = (props:CategoryAddProps) => {
  //use state
const [products, setProducts] = useState(1);

const {register,handleSubmit,formState:{errors}} = useForm<TypeInputs>();
const navigate = useNavigate();
const onSubmit:SubmitHandler<TypeInputs>=data=>{
    props.onAddcate(data);
    //usestate
    setProducts(0);
   
    navigate("/admin/categorys");
}
  return (
    <div>
       <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/admin/categorys">Categorys</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Add</Breadcrumb.Item>
        </Breadcrumb>
<form onSubmit={handleSubmit(onSubmit)}>
  <div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Tên Danh Mục</label>
    <input type="text" className="form-control" placeholder='Nhap ten...' {...register('name')} />
  </div>
  <button type="submit" className="bg-[#cecccc] rounded hover:text-[#2a4a84] hover:bg-slate-200 p-3">Submit</button>
</div>
</form>
    </div>
  )
}

export default Category_add