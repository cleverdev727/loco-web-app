const Login = () => {
    return <>
        <div className="flex h-screen">
            <div className="hidden md:block w-5/12 h-full bg-maindark bg-auth-aside bg-cover px-10 relative">
                <div className="max-w-[440px] mx-auto">
                    <img src="/images/logo.png" className="mx-auto my-20" alt="logo" />
                    <h1 className="text-4xl font-bold my-4">Welcome Back!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <img src="/images/provectus_logo.svg" className="absolute bottom-20 left-[50%] transform -translate-x-1/2" alt="logo" />
            </div>
            <div className="w-full h-full md:w-7/12 sm:px-2 md:px-10">
                <div className="w-full h-full flex items-center relative">
                    <div className="mx-auto lg:mx-32">
                        <h1 className="text-2xl py-3 font-semibold text-center md:text-left">Welcome back!</h1>
                        <p className="text-sm mb-12 text-center md:text-left">Log in to get started.</p>

                        <div className="input-wrap mb-6">
                            <label htmlFor="">E-mail</label>
                            <input type="email" className="form-control" placeholder="Type your e-mail address" />
                        </div>
                        <div className="input-wrap mb-6">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" placeholder="" />
                        </div>

                        <div className="w-full">
                            <button className="rounded-lg bg-auth-btn w-full py-3 text-sm" type="button">Sign in</button>
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