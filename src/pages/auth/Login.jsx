import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import ProvectusLogo from '../../assets/images/provectus_logo.svg';
import API from '../../API';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const target = e.target;
    setData(prev => ({ ...prev, [target.name]: target.value }));
  }

  // when click the login button
  const handleLogin = () => {
    API.auth.login(data).then(res => {
      if (res.user !== undefined) {
        localStorage.setItem('access_token', res.token);
        navigate('/device/details');
      }
    });
  }

  return <>
    <div className="flex h-screen">
      <div className="hidden md:flex w-5/12 h-full bg-maindark bg-auth-aside bg-cover px-10 relative items-center">
        <div className="max-w-[440px] mx-auto">
          <img src={Logo} className="mx-auto mb-20" alt="logo" />
          <h1 className="text-4xl font-bold my-4">Welcome Back!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img src={ProvectusLogo} className="mt-56" alt="logo" />
        </div>
      </div>
      <div className="w-full h-full md:w-7/12 sm:px-2 md:px-10">
        <div className="w-full h-full flex items-center relative">
          <div className="mx-auto lg:mx-40 2xl:mx-56">
            <h1 className="text-2xl py-3 font-semibold text-center md:text-left">Welcome back!</h1>
            <p className="text-sm mb-12 text-center md:text-left">Log in to get started.</p>

            <div className="input-wrap mb-6">
              <label htmlFor="">E-mail</label>
              <input type="email" name="email" className="form-control" placeholder="Type your e-mail address" value={data.email} onChange={handleChange} />
            </div>
            <div className="input-wrap mb-6">
              <label htmlFor="">Password</label>
              <input type="password" name="password" className="form-control" placeholder="" value={data.password} onChange={handleChange} />
            </div>

            <div className="w-full">
              <button 
                onClick={()=>handleLogin()}
                className="rounded-lg bg-auth-btn w-full py-3 text-sm" type="button">Sign in</button>
            </div>
            <div className="flex justify-between items-center py-6">
              <div className="w-10 h-[2px] bg-[#EDF2F7]"></div>
              <div className="text-[8.75px]">or do it via other accounts</div>
              <div className="w-10 h-[2px] bg-[#EDF2F7]"></div>
            </div>

            <div className="flex justify-center gap-3">
              <button className="bg-main p-3 rounded-lg">
                <img src="/icons/Google_logo.svg" width={20} alt="goolge" />
              </button>
              <button className="bg-main p-3 rounded-lg">
                <img src="/icons/Apple_logo.svg" width={20} alt="goolge" />
              </button>
            </div>
          </div>
          <div className="absolute w-full bottom-10">
            <p className="text-[12.6px] text-center md:text-right md:mr-20">Don't have an account? <a href="#" className="text-yellow-300">Get started</a></p>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Login