import React from "react";
// import "../styles/main.css";
import { FcEngineering } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { BsHeart } from "react-icons/bs";

function Video() {
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
            className="p-2 ml-12 tracking-widest focus:outline-none"
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
      <div className="">
        <div className="mt-20 mb-10 mx-18">
          <div className="">
            <div className="text-5xl font-medium tracking-wide">Javascript</div>
            <div className="text-xl leading-loose">
              some text | some more text
            </div>
          </div>
          <div className="mt-20 space-y-20">
            <div className="">
              <div className="font-medium text-1xl">
                Javascript Introduction
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10">
          <div className="relative pb-50">
            <iframe
              className="absolute w-full h-full"
              // width="332"
              // height="253"
              src="https://www.youtube.com/embed/2md4HQNRqJA?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="my-20 text-right">
            <button className="px-20 py-6 rounded-lg text-3.5xl text-white bg-purple-400">
              Take a Quizz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
