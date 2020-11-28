import React from "react";
// import "./styles/main.css";
import { FcEngineering } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { BsHeart } from "react-icons/bs";

function EmailVerify() {
  return (
    <div className="text-gray-900" style={{ boxSizing: "border-box" }}>
      <div className="flex items-center px-10 py-12 border-b-2 border-gray-300 overflow ">
        <div className="flex flex-col items-center">
          <div className="-mb-3">
            <FcEngineering color="blue" size="6em" />
          </div>
          <div className="py-0.5 -mt-3 text-xl font-extrabold tracking-wider bg-white ">
            Tech <span className="text-teal">Factory</span>
          </div>
        </div>
        <div className="ml-16 font-medium text-1xl">Categories</div>
        <div className="relative pl-4 pr-10 py-2.5 ml-16 border-2 border-gray-400 rounded-full">
          <div className="absolute inset-y-0 flex flex-col justify-center ml-1">
            <FaSearch size="25px" color="#4B5563" />
          </div>
          <input
            style={{ wordSpacing: 10 }}
            className="p-2 ml-12 tracking-widest"
            type="text"
            placeholder="Search for anything"
          />
        </div>
        <div className="ml-40 space-x-9 ">
          <button className="w-32 py-3 font-semibold rounded-xl text-teal ring-2 ring-teal text-1xl">
            Login
          </button>
          <button className="w-32 py-3 font-semibold text-white bg-blue-500 rounded-xl ring-2 ring-blue-500 text-1xl">
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center h-screen text-gray-900">
        <div className="">
          <div className="text-4xl">Enter your Email</div>
          <form className="mt-10 space-y-10">
            <input
              className="px-20 py-5 text-2xl border-2 border-gray-400"
              type="email"
              placeholder="Email"
              name=""
              id=""
            />
            <button
              className="block w-full px-20 py-5 text-2xl text-white bg-blue-500 border-2 border-blue-500 "
              type="submit"
            >
              Send Link
            </button>
          </form>
        </div>
      </div>

      <div className="px-20 pt-40 pb-20 bg-teal">
        <div className="grid grid-cols-3 grid-rows-3">
          <div className="space-y-6 text-2xl font-medium text-white">
            <div className="">Courses</div>
            <div className="">About Us</div>
            <div className="">Contact Us</div>
          </div>
          <div className="space-y-6 text-2xl font-medium text-white">
            <div className="">Terms and Conditions</div>
            <div className="">FAQs</div>
          </div>
          <div className="flex flex-col items-end justify-end row-span-3">
            <div className="flex flex-col items-center mr-2">
              <div className="-mb-3">
                <FcEngineering color="blue" size="6em" />
              </div>
              <div className="pt-0.5 -mt-3 text-xl font-extrabold tracking-wider bg-teal text-white">
                Tech <span className="">Factory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerify;
