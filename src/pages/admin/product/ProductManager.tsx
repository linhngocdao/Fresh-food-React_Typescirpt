import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IProduct } from '../../../type/Product'
import { Breadcrumb } from 'antd';


type Props = {
  products: IProduct[];
  onRemove: (id: number) => void
}
const ProductManager = (props: Props) => {
  return (
    <div>
      <div className="row">
        <div className="col-11"> <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb></div>
        <div className="col-1">
          <Link to="/admin/products/add">
          <button type="button"  className="bg-[#cecccc] rounded hover:text-[#2a4a84] hover:bg-slate-200 p-3">Add</button>
          </Link>
          </div>
      </div>

      <div>

      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên Sản Phẩm</th>
            <th scope="col">Giá Tiền</th>
            <th scope="col">Chi Tiết Sản Phẩm</th>
            <th scope="col">Ảnh </th>
            <th scope="col">Id Sản Phẩm</th>
            <th scope="col">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="w-[210px]">{item.name}</td>
                <td className="w-[110px]">{item.price}</td>
                <td>{item.desc}</td>
                <td>
                  <img src={item.image} alt="" width={200} />
                </td>
                {/* <td>{item.description}</td> */}
                <td>{item.category}
                  getone()

                </td>
                <td className="flex">
                  <button className=" btn btn-primary mr-1"><Link to={`/admin/products/${item._id}/edit`}>Update</Link></button>
                  <button className="btn btn-danger" onClick={() => props.onRemove(item._id)}>Delete</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default ProductManager