import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useName } from '../utils/localStorage';
import '../../src/App.css';

const Header = () => {
  const [users, setUsers] = useState(1);
  const handlerRemove = () => {
    localStorage.removeItem('user');
    setUsers(0);
  };
  return (
      <div className='header h-[60px]'>
        <div className='logo mb-7 w-[100px]'>
          <NavLink to='/'>
            {' '}
            <img
              src='https://res.cloudinary.com/assignment22/image/upload/v1656786391/Ass-reactjs/pngegg_lxh4jf.png'
              alt=''
            />
          </NavLink>
        </div>

        <nav className=' mt-[20px] mb-[40px]  mx-auto text-center   lg:block hidden text-[16px] font-normal'>
          <ul>
            <li className='inline-block'>
              <NavLink
                to='/'
                className='inline-block py-[10px] px-[20px] text-slate-600   focus:text-[#235e12] hover:text-[#3de940] ease-in-out duration-200 no-underline'
              >
                Trang Chủ
              </NavLink>
            </li>
            <li className='inline-block'>
              <NavLink
                to='/product'
                className='inline-block py-[10px] px-[20px] text-slate-600  focus:text-[#235e12] hover:text-[#3de940]  ease-in-out duration-200 no-underline'
              >
                Sản Phẩm
              </NavLink>
            </li>
            <li className='inline-block'>
              <NavLink
                to='/new'
                className='inline-block py-[10px] px-[20px] text-slate-600   focus:text-[#235e12] hover:text-[#3de940]  ease-in-out duration-200 no-underline'
              >
                Tin tức
              </NavLink>
            </li>
            <li className='inline-block'>
              <NavLink
                to='#'
                className='inline-block py-[10px] px-[20px] text-slate-600   focus:text-[#235e12] hover:text-[#3de940]  ease-in-out duration-200 no-underline'
              >
                Liên Hệ
              </NavLink>
            </li>
          </ul>
        </nav>

        <div id='actions' className='mb-[31px]'>
          <div className='login text-black group ml-[-110px] group '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-6 group-hover:text-[#2a4a84]'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            <div className='in-up--sub absolute top-[63px] ml-[-39px] bg-white shadow-xl z-50 p-2 rounded-lg hidden ease-linear duration-300 w-[150px]  group-hover:block before:absolute before:-top-2 before:left-10 before:w-5 before:h-5 before:bg-white before:rounded before:rotate-45 before:z-10 before:shadow-xl'>
              {localStorage.getItem('user') ? (
                <div>
                  <div className='flex items-center pb-3 w-full'>
                    <div className='ml-4'>
                      <div className='text-sm text-gray-500'>Xin chào !</div>
                      <div>
                        <span className='user-name text-sm font-medium text-gray-900'>
                          {useName()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li className='rounded-lg hover:bg-[#d0c0b9] '>
                      <Link className='inline-block p-2' to='/admin'>
                        <span className='text-black font-semibold'>
                          Trang quản trị
                        </span>
                      </Link>
                    </li>
                    <li
                      className='logout rounded-lg hover:bg-[#d0c0b9] cursor-pointer'
                      onClick={handlerRemove}
                    >
                      <span
                        onClick={handlerRemove}
                        className='inline-block p-2 font-semibold'
                      >
                        Đăng xuất
                      </span>
                    </li>
                  </ul>
                </div>
              ) : (
                <ul>
                  <li className='rounded-lg hover:bg-[#d0c0b9] hover:text-white'>
                    <Link className='inline-block p-2' to='/signin'>
                      <span className='text-black font-semibold'>
                        Đăng nhập
                      </span>
                    </Link>
                  </li>
                  <li className='rounded-lg hover:bg-[#d0c0b9] hover:text-white'>
                    <Link className='inline-block p-2' to='/signup'>
                      <span className='text-black font-semibold'>Đăng ký</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className='cart'>
            <Link
              to='/cart'
              className='text-[#122031]  hover:text-[#2a4a84]  ease-in-out duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

  );
};

export default Header;
