import {SubmitHandler,useForm} from "react-hook-form"
import {Link, useNavigate} from "react-router-dom";
import {signup } from '../../api/auth';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
type TypeInputs = {
    name:string,
    email:string,
    password:string
}
const Signup = () => {
    const {register,handleSubmit,formState:{errors}}=useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit:SubmitHandler<TypeInputs>=data=>{
        signup(data);
        navigate("/signin");
    }
  return (

<div>
  <Header/>
<form className="mt-8 space-y-6 w-[550px] mx-auto text-center " id="form-signup" action="#" method="POST" onSubmit={handleSubmit(onSubmit)} >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md  -space-y-px">
            <div className="pb-4">
                <label htmlFor="input-email" className="py-2">Email</label>
                <input {...register('email')}  type="email"  required className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#466bb1] focus:outline-none focus:ring-[#] focus:border-[#466bb1] focus:z-10 sm:text-sm" placeholder="Email" />
              </div>
              <div className="pb-4">
                <label htmlFor="input-username" className="py-2">Họ và tên</label>
                <input {...register('name')}   type="text" required className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#466bb1] focus:outline-none focus:ring-[#466bb1] focus:border-[#466bb1] focus:z-10 sm:text-sm" placeholder="Họ và tên" />
              </div>
              <div className="pb-4">
                <label htmlFor="input-password" className="py-2">Mật khẩu</label>
                <input {...register('password')} type="password" required className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#466bb1] focus:outline-none focus:ring-[#466bb1] focus:border-[#466bb1] focus:z-10 sm:text-sm" placeholder="Mật khẩu" />
              </div>


            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2a4a84] hover:bg-[#466bb1] ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Đăng ký
              </button>
            </div>
            <p className="mt-3 text-center text-sm text-gray-600">
              Bạn đã có tài khoản? 
              <Link to="/signin" className="font-medium ease-in-out duration-300 text-[#2a4a84] hover:text-[#466bb1]"> Đăng nhập </Link>
            </p>
          </form>
          <Footer/>
</div>

  )
}

export default Signup