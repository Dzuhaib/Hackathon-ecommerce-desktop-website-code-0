import React from "react";
import Image from "next/image";

const page = () => {
  const title = " > My Account";
  return (
    <div>
      <div className='flex items-center bg4-center bg4-cover h-[320px] flex-col justify-center bg-[url("/images/shopbg.png")] bg-cover'>
        <Image src="/icons/shop1.png" height={70} width={70} alt="" />
        <h1 className="text-[48px] font-semibold">My Account</h1>
        <p>
          <span className="font-semibold">Home</span>
          {title}
        </p>
      </div>

      <div className="flex justify-between gap-5 py-20 px-20">
        <div className="flex-1 items-center justify-center  bg-white">
          <form className="p-6 border border-gray-300 rounded-md">
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex-1 items-center justify-center bg-white">
          <form className=" p-6 border border-gray-300 rounded-md">
            <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                placeholder="Enter your email"
              />
            </div>

            <p className="text-sm text-gray-600 mt-4">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="text-black font-medium">
                privacy policy
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 mt-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
