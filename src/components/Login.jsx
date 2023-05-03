import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [success, setSuccess] = useState('')
    const handleSignIn = event => {
        event.preventDefault();
        setSuccess('')
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }




    return (
        <div className="flex justify-center items-center h-screen background ">
            <form className="backdrop-blur-xl  shadow-md rounded px-14 pt-14 space-y-10 mb-4" onSubmit={handleSignIn}>  
                <div className="mb-4">
                    <label className="block text-white  font-bold mb-2 text-2xl" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 md:w-[400px] w-full text-black leading-tight focus:outline-none focus:shadow-outline-gray"
                        id="email"
                        type="text"
                        name='email'
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline-gray"
                        id="password"
                        type="password"
                        name='password'
                        placeholder="Password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="btn btn-info"

                    >
                        Sign In
                    </button>
                </div>
                <div className="mt-5 text-sm">
                    <p className="inline-block align-baseline text-slate-300 mr-3">
                        Don't have an account yet?
                    </p>
                    <a href="/register" className="text-blue-500 hover:text-blue-800"  >
                        Sign up here.
                    </a>
                </div>
                <p className='text-green-500 relative top-5 text-center text-sm'>{success}</p>
            </form>
        </div>
    );
};

export default Login;
