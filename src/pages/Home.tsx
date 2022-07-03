import React, { useEffect, useState } from "react";
import { list } from "../api/Product";
import { IProduct } from "../type/Product";
import { Breadcrumb, Rate } from "antd";
import { Link } from "react-router-dom";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
type Props = {};
const Home = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div>
      <div className="album py-2 ">
        <Breadcrumb style={{ margin: "8px 8px" }}>
          <Breadcrumb.Item>
            <Link to="/admin/dashboard">Home</Link>
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="row">
          {products.map((item, index) => {
            return (
              <div className="col">
                <div className="owl-item" style={{ width: 283 }}>
                  <div className="col-md-12 col-sm-12 col-xs-12  box-blogs pt-[40px] pb-5 ml-[30px] ">
                    <Link
                      className="text-decoration-none"
                      to={`/producst/detail/${item._id}`}
                    >
                      <div className="card pt-4" style={{ width: "18rem" }}>
                        <div className="img-blogs ml-[35px]">
                          <img
                            style={{ width: 233 }}
                            src={item.image}
                            className="img-item-product"
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title font-semibold text-[18px] ml-[76px]">{item.name}</h5>
                          <p className="price-well text-danger ml-[70px] ">
                            Giá: {item.price} đ
                          </p>
                          {/* <p className="card-text">{item.desc}</p> */}

                          <div className="show-list pt-[12px] ml-[76px]">
                            <a
                              href="javascript:void(0)"
                              className="btn btn-outline-info"
                              item-id={32}
                              product-id={32}
                              status-store={0}
                            >
                              Mua ngay
                            </a>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
