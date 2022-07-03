import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { signin } from '../../api/auth';
import { authenticated } from '../../utils/localStorage';
import Password from 'antd/lib/input/Password';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
type TypeInputs = {
  email: string,
  password: string
}
const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<TypeInputs> = async data => {
    const { data: user } = await signin(data);
    authenticated(user, () => {
      navigate("/")
    })

  }
  return (

    <div>
      <Header />
      <form className="mt-8 space-y-6 w-[550px] mx-auto text-center " onSubmit={handleSubmit(onSubmit)} >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md  -space-y-px">

          <div className="pb-4">
            <label htmlFor="input-email" className="py-2">Email</label>
            <input {...register('email')} type="email" required className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#2a4a84] focus:outline-none focus:ring-[#2a4a84] focus:border-[#2a4a84] focus:z-10 sm:text-sm" placeholder="Email" />
          </div>
          <div className="pb-4">
            <label htmlFor="input-password" className="py-2">Mật khẩu</label>
            <input {...register('password')} type="password" required className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#2a4a84] focus:outline-none focus:ring-[#2a4a84] focus:border-[#2a4a84] focus:z-10 sm:text-sm" placeholder="Mật khẩu" />
          </div>


        </div>
        <div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2a4a84] hover:bg-[#466bb1] ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Đăng Nhập
          </button>
        </div>
        <p className="mt-3 text-center text-sm text-gray-600">
          Bạn chưa có tài khoản?
          <Link to="/signup" className="font-medium ease-in-out duration-300 text-[#2a4a84] hover:text-[#466bb1]"> Đăng Ký </Link>
        </p>
      </form>
      <Footer />
    </div>

  )
}

export default Signin