function SigninComponent() {
    return (
        <>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80'})` }}></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center text-secondary_text ">
                        Welcome back!
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b  lg:w-1/4"></span>
                        <p className="text-xs text-center text-gray-500 uppercase  hover:underline">login
                            with email</p>
                        <span className="w-1/5 border-b  lg:w-1/4"></span>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-secondary_text " >Email Address</label>
                        <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-secondary_text " >Password</label>
                            {/* <a href="#" className="text-xs text-gray-500  hover:underline">Forget Password?</a> */}
                        </div>

                        <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-300 hover:text-primary_text">
                            Sign In
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b  md:w-1/4"></span>

                        <a href="#" className="text-xs text-gray-500 uppercase  hover:underline">or sign up</a>

                        <span className="w-1/5 border-b md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SigninComponent