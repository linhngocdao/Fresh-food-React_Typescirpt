import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';


type Props = {}

function Slider({}: Props) {
  return (
    

 

<div id="banner">
  <div className="box-left">
    <h2>
      <span>THỨC ĂN</span>
      <br />
      <span>THƯỢNG HẠNG</span>
    </h2>
    <p>Chuyên cung cấp các món ăn đảm bảo dinh dưỡng
      hợp vệ sinh đến người dùng,phục vụ người dùng 1 cái
      hoàn hảo nhất</p>
    <button>Mua ngay</button>
  </div>
  <div className="box-right">
  <img
              src='https://res.cloudinary.com/assignment22/image/upload/v1656781505/Ass-reactjs/img_2_jjxvhq.png'
              alt=''
            />
                <img
              src='https://res.cloudinary.com/assignment22/image/upload/v1656781506/Ass-reactjs/img_3_cndm1r.png'
              alt=''
            />
                <img
              src='https://res.cloudinary.com/assignment22/image/upload/v1656781505/Ass-reactjs/img_1_l1aks5.png'
              alt=''
            />
  </div>

</div>

  )
}

export default Slider