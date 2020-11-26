import React from "react";
// import "../styles/main.css";
import { FcEngineering } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { BsHeart } from "react-icons/bs";

function MyCart() {
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
        <div className="ml-16 font-medium tracking-wide text-1xl">
          Categories
        </div>
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
        <div className="flex items-center">
          <div className="font-medium tracking-wide text-1xl ml-28 ">
            My Courses
          </div>
          <div className="flex items-center ml-8 space-x-5">
            <div className="">
              <IoMdCart size="3em" color="#4B5563" />
            </div>
            <div className="">
              <BsHeart size="2.5em" color="#4B5563" />
            </div>
            <div className="flex items-center justify-center text-2xl font-semibold text-white bg-blue-800 border rounded-full w-14 h-14">
              <div>S</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 py-20 space-y-20">
        <div className="">
          <div className="flex px-10">
            <div className="flex flex-col items-center">
              <div className="text-4.5xl font-medium px-2.5">My Cart</div>
              <div className="bg-blue-800 py-1.5 h-3.5 w-full mt-1.5 rounded-lg"></div>
            </div>
          </div>
          <div className="my-10">
            <div className="flex px-10 py-10 border-b-4">
              <div className="w-30">
                <div className="relative pb-2/3">
                  <img
                    className="absolute object-cover w-full h-full"
                    src="https://via.placeholder.com/600/92c952"
                    alt="image1"
                  />
                </div>
              </div>
              <div className="flex-grow mt-16 ml-8 font-medium ">
                <div className="text-gray-900 text-1xl">
                  Java Complete Course for Beginners
                </div>
                <div className="mt-3 leading-relaxed text-gray-800">
                  <div className="">Lorem ipsum dolor, sit amet </div>
                  <div className="">Lorem ipsuum dolor</div>
                </div>
              </div>
              <div className="flex flex-col mt-20 font-medium">
                <div className="flex flex-col items-center flex-grow">
                  <div className="">
                    <div className="text-gray-900 text-1xl">$700</div>
                    <div className="text-lg text-gray-800">Some text</div>
                  </div>
                </div>
                <div className="text-gray-800">
                  <button className="mr-12">Button1</button>
                  <button>Button2</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 pt-40 pb-20 bg-teal">
        <div className="grid grid-cols-3 grid-rows-3">
          <div className="space-y-6 text-2xl font-medium text-white">
            <div className="">Courses</div>
            <div className=""> Us</div>
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

export default MyCart;
