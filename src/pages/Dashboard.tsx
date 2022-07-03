import React from "react";
import { Carousel } from "antd";
type Props = {};
const Dashboard = (props: Props) => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3
            style={{
              height: "360px",
              color: "#fff",
              lineHeight: "160px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            <img
              src="https://res.cloudinary.com/assignment22/image/upload/v1648870009/Ass-reactjs/slider/slider_2_xsw2ee.webp"
              alt="First slide"
            />
          </h3>
        </div>
        <div>
          <h3
            style={{
              height: "360px",
              color: "#fff",
              lineHeight: "160px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            {" "}
            <img
              src="https://res.cloudinary.com/assignment22/image/upload/v1648870006/Ass-reactjs/slider/slider_1_pbrpgg.webp"
              alt="First slide"
            />
          </h3>
        </div>
        <div>
          <h3
            style={{
              height: "360px",
              color: "#fff",
              lineHeight: "160px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            {" "}
            <img
              src="https://res.cloudinary.com/assignment22/image/upload/v1648870006/Ass-reactjs/slider/slider_4_pf22mm.webp"
              alt="First slide"
            />
          </h3>
        </div>
        <div>
          <h3
            style={{
              height: "360px",
              color: "#fff",
              lineHeight: "160px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            {" "}
            <img
              src="https://res.cloudinary.com/assignment22/image/upload/v1648870005/Ass-reactjs/slider/slider_3_mrjmwk.webp"
              alt="First slide"
            />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Dashboard;
