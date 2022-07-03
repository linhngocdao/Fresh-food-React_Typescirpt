import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { read } from '../api/Product';
import { IProduct } from '../type/Product'
import { Breadcrumb, Rate } from 'antd';
type Props = {

}
const DetailProduct = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProducts(data)
    }
    getProduct();
  }, [])
  console.log(products);


  return (
    <div>
 <Breadcrumb style={{ margin: '8px 8px' }}>
          <Breadcrumb.Item><Link to="/">Trang chủ</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
          <Breadcrumb.Item>{products.name}</Breadcrumb.Item>
        </Breadcrumb>
<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
 
  <div className="col-auto d-lg-block">
  <img style={{width: '100%', height: 370}} src={products.image} alt="" />
  </div>
  <div className="col p-4 d-flex flex-column position-static">
    {/* <strong className="d-inline-block mb-2 text-primary">World</strong> */}
    <h1 className="mb-0 red">{products.name}</h1>
    <div className="mb-1 pt-3">Giá: {products.price} vnđ</div>
    <b>Chi tiết</b>
    <p className="card-text mb-auto">{products.desc}</p>
    <a href="/cart" ><button type="button" className="bg-[#cecccc] rounded hover:text-[#2a4a84] hover:bg-slate-200 p-3">Mua ngay</button>
</a>
  </div>
</div>
    </div>
  )
}

export default DetailProduct