import React from 'react';

const Register = () => {
    return (
        <div className="flex justify-center items-center h-screen background ">
            <form className="backdrop-blur-xl  shadow-md rounded px-14 pt-14 pb-6 space-y-5 mb-4" >
                <div className="mb-4">
                    <label className="block text-white  font-bold mb-2 text-xl" htmlFor="email">
                        Name
                    </label>
                    <input
                        className="shadow  border rounded py-2 px-3 md:w-[400px] w-full text-black leading-tight "
                        id="name"
                        type="text"
                        name='name'
                        placeholder="Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white  font-bold mb-2 text-xl" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow  border rounded py-2 px-3 md:w-[400px] w-full text-black leading-tight "
                        id="email"
                        type="text"
                        name='email'
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-xl font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow  border rounded w-full py-2 px-3 text-black mb-3 leading-tight "
                        id="password"
                        type="password"
                        name='password'
                        placeholder="Password"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-xl font-bold mb-2" htmlFor="password">
                        Photo URL
                    </label>
                    <input
                        className="shadow  border rounded w-full py-2 px-3 text-black mb-3 leading-tight "
                        id="photo"
                        type="text"
                        name='photo'
                        placeholder="Photo url"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="btn btn-info"

                    >
                        Sign Up
                    </button>
                </div>
                <div className="mt-5 text-sm">
                    <p className="inline-block align-baseline text-slate-300 mr-3">
                        Already have an account ?
                    </p>
                    <a href="/login" className="text-blue-500 hover:text-blue-800"  >
                        Login here.
                    </a>
                </div>
                <p className='text-green-500 relative top-5 text-center text-sm'></p>
            </form>
        </div>
    );
};

export default Register;