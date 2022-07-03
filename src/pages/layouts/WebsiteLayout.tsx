import React from 'react'
import { Outlet } from 'react-router-dom'
import Category from '../Category'

import Header from '../../components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../../components/Slider';
import Footer from '../../components/Footer';

type Props = {}
const WebsiteLayout = (props: Props) => {
  return (
    <div className="warpper">
      <div>
        <header className="mb-[1px] border-bottom">
          <Header />
        </header>
        <section>
          <Slider/>
        </section>
        <main className="container">
         
          <div className="box-product  tabs-block  box-product-style2 box-st">

            <div>
              <Category />
            </div>
            <h2 className="title-block-product text-center fs-2 pt-7">
              Tất cả sản phẩm<br />
              <i className="icon-title-1" />
            </h2>
            <div>
              <Outlet />
            </div>
          </div>
        </main>

      </div>
      <footer>
          <Footer/>
        </footer>

    </div>

  )
}

export default WebsiteLayout