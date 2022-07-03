import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ICategory } from '../../../type/Category'
import { Breadcrumb } from 'antd';
type Props = {
    categorys: ICategory[];
    onRemoveCate: (id: number) => void
}
const Category_list = (props: Props) => {
  return(
    <div>
<div className="row">
        <div className="col-11"> <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Category</Breadcrumb.Item>
        </Breadcrumb></div>
        <div className="col-1">
          <Link to="/admin/categorys/add">
          <button type="button" className="bg-[#cecccc] rounded hover:text-[#2a4a84] hover:bg-slate-200 p-3">Add</button>
          </Link>
          </div>
      </div>
   
    <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên danh mục</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody> 
          {props.categorys.map((item,index)=>{
            return(
              <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{item.name}</td>
            <td>
            <button className="btn btn-primary mr-1"><Link to={`/admin/categorys/${item.slug}/edit`}>Update</Link></button>
            <button className="btn btn-danger" onClick={()=>props.onRemoveCate(item._id)}>Delete</button>
            </td>
          </tr>
            )
          })}
        </tbody>
      </table>
      </div>
  )
}

export default Category_list