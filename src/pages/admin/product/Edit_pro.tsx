import React, { useEffect, useState } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form';
import {useNavigate,useParams,Link} from 'react-router-dom';
import { read } from '../../../api/Product';
import { IProduct } from '../../../type/Product';
import {Breadcrumb } from 'antd';
type Edit_proProps={
    onUpdate:(product:IProduct)=>void;
};
type TypeInputs={
    name:string,
    price:number,
    desc: string,
    image:string,
}
const Edit_pro = (props:Edit_proProps) => {
const {register,handleSubmit,formState:{errors},reset}=useForm<TypeInputs>();
const navigate = useNavigate();
const {id}=useParams();
const [products, setProducts] = useState();
useEffect(()=>{
    const getProduct = async ()=>{
        const {data} = await read(id);
        reset(data);
        setProducts(data);
    }
    getProduct();
},[])
const onSubmit:SubmitHandler<TypeInputs>= data=>{
    // console.log(data)
    props.onUpdate(data);
    navigate("/admin/products")
}
  return (
    <div>
        <div>
 <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link to='/admin/products'>Product</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Edit</Breadcrumb.Item>
  </Breadcrumb>
  </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" {...register('name')} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
          <input type="number" className="form-control" {...register('price')} />
        </div>
        {products && (
                  <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Ảnh Sản phẩm</label>
                  <input type="file" className="form-control" {...register('image')} />
                  <img width="200px" src={products.image} alt="" />
                </div>
        )}
        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
        <div className="mb-3">
          
          <textarea cols={153} rows={10} className="bg-slate-200  rounded"{...register('desc')}/>
        </div>           
            <button className="btn btn-primary">Update</button>
        </form>
    </div>
  )
}

export default Edit_pro