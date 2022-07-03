import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getcate } from '../api/Category';
import { ICategory } from '../type/Category'
import { IProduct } from '../type/Product';
import {read} from "../api/Product"
type Props ={

}
const DetailCate = (post:Props) => {
  
    const [category,setCategory] = useState<ICategory[]>([]);
    const {slug} = useParams();
    useEffect(()=>{
        const getCategory = async ()=>{
            const {data: {products}}= await getcate(slug);
            setCategory(products)
        }
        getCategory();
    },[slug])
    console.log(slug);
  return (
    <div className="row">
          {category.map((item, index) => {
            return (
              <div className="col">
                <div className="owl-item" style={{ width: 283 }}>
                  <div className="col-md-12 col-sm-12 col-xs-12  box-blogs pt-4">
                  <Link to={`/producst/detail/${item._id}`}>

                                          <div className="card" style={{ width: "18rem" }}>
                        <div className="img-blogs w-[286px] h-[280px]">
                          <img
                            style={{ width: '100%' }}
                            src={item.image}
                            className="img-item-product"
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="price-well text-danger fs-4">
                            Giá: {item.price} đ
                          </p>
                          {/* <p className="card-text">{item.desc}</p> */}

                          <div className="show-list">
                            <a
                              href="javascript:void(0)"
                              className="btn btn-primary"
                              item-id={32}
                              product-id={32}
                              status-store={0}
                            >
                              Mua hàng
                            </a>
                          </div>
                        </div>
                      </div>
                  </Link>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
  )
}

export default DetailCate