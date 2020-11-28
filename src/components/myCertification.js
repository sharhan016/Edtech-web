import React from "react";
// import "../styles/main.css";
import { FcEngineering } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { BsHeart } from "react-icons/bs";

function MyCertification() {
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
        <div className="ml-16 font-medium tracking-wide transition duration-300 transform hover:-translate-y-2 hover:scale-90 text-1xl">
          Categories
        </div>
        <div className="relative pl-4 pr-10 py-2.5 ml-16 border-2 border-gray-400 rounded-full">
          <div className="absolute inset-y-0 flex flex-col justify-center ml-1">
            <FaSearch size="25px" color="#4B5563" />
          </div>
          <input
            style={{ wordSpacing: 10 }}
            className="p-2 ml-12 tracking-widest focus:outline-none"
            type="text"
            placeholder="Search for anything"
          />
        </div>
        <div className="flex items-center">
          <div className="font-medium tracking-wide transition duration-300 transform text-1xl ml-28 hover:-translate-y-2 hover:scale-90">
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

      <div className="px-12 pt-20 pb-10 space-y-20">
        <div className="">
          <div className="flex px-10">
            <div className="flex flex-col items-center">
              <div className="text-4.5xl font-medium px-2.5">
                My Certification
              </div>
              <div className="bg-blue-800 py-1.5 h-3.5 w-full mt-1.5 rounded-lg"></div>
            </div>
          </div>
          <div className="mx-12 my-10 space-y-6 w-9/10">
            <div className="pt-6 pb-4 pl-6 pr-10 border-4 rounded-2xl">
              <div className="flex ">
                <div className="w-19">
                  <div className="relative pb-100">
                    <img
                      className="absolute object-cover w-full h-full"
                      src="https://via.placeholder.com/600/92c952"
                      alt="image1"
                    />
                  </div>
                </div>
                <div className="flex-grow mt-10 ml-8 font-medium ">
                  <div className="text-2xl text-gray-900">
                    JAVA- beginner course
                  </div>
                  <div className="mt-2 ml-2 leading-relaxed text-gray-800">
                    <div className="text-xl">Completed 100%</div>
                  </div>
                  <div className="flex justify-end mt-10 space-x-6 text-2xl">
                    <button className="w-1/4 px-6 py-5 font-medium text-white bg-blue-500 rounded-xl">
                      View
                    </button>
                    <button className="w-1/4 px-6 py-5 font-medium text-white bg-purple-500 rounded-xl">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-xl text-blue-700">
                search job related to course
              </div>
            </div>
            <div className="pt-6 pb-4 pl-6 pr-10 border-4 rounded-2xl">
              <div className="flex ">
                <div className="w-19">
                  <div className="relative pb-100">
                    <img
                      className="absolute object-cover w-full h-full"
                      src="https://via.placeholder.com/600/92c952"
                      alt="image1"
                    />
                  </div>
                </div>
                <div className="flex-grow mt-10 ml-8 font-medium ">
                  <div className="text-2xl text-gray-900">
                    JAVA- beginner course
                  </div>
                  <div className="mt-2 ml-2 leading-relaxed text-gray-800">
                    <div className="text-xl">Completed 100%</div>
                  </div>
                  <div className="flex justify-end mt-10 space-x-6 text-2xl">
                    <button className="w-1/4 px-6 py-5 font-medium text-white bg-blue-500 rounded-xl">
                      View
                    </button>
                    <button className="w-1/4 px-6 py-5 font-medium text-white bg-purple-500 rounded-xl">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-xl text-blue-700">
                search job related to course
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

export default MyCertification;
