import React from "react";
// import "../styles/main.css";
import { FcEngineering } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { BsHeart } from "react-icons/bs";

function CourseVideos() {
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
      <div className="mt-20 mb-20 mx-18">
        <div className="">
          <div className="text-5xl font-medium tracking-wide">Javascript</div>
          <div className="text-xl leading-loose">
            some text | some more text
          </div>
        </div>
        <div className="mt-20 space-y-20">
          <div className="">
            <div className="font-medium text-1xl">Javascript Fundamentals</div>
            <div className="grid grid-cols-3 gap-12 px-6 mt-20">
              <div className="relative overflow-hidden bg-purple-500 rounded-3xl pb-100">
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
              <div className="relative overflow-hidden bg-purple-500 rounded-3xl pb-100">
                <iframe
                  className="absolute w-full h-full"
                  // width="332"
                  // height="253"
                  src="https://www.youtube.com/embed/papg2tsoFzg?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="relative overflow-hidden bg-purple-500 rounded-3xl pb-100">
                <iframe
                  className="absolute w-full h-full"
                  // width="332"
                  // height="253"
                  src="https://www.youtube.com/embed/BMKWdLX9w3M?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="relative overflow-hidden pb-100 rounded-3xl">
                <iframe
                  className="absolute w-full h-full"
                  // width="804"
                  // height="453"
                  src="https://www.youtube.com/embed/7z-VseyACaE?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="relative overflow-hidden pb-100 rounded-3xl">
                <iframe
                  className="absolute w-full h-full"
                  // width="804"
                  // height="453"
                  src="https://www.youtube.com/embed/ycLqC41TO1U?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="relative overflow-hidden pb-100 rounded-3xl">
                <iframe
                  className="absolute w-full h-full"
                  // width="804"
                  // height="453"
                  src="https://www.youtube.com/embed/Sb5_BIprKDs?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="">
            <div className="font-medium text-1xl">
              Object Oriented Fundamentals
            </div>
            <div className="grid grid-cols-3 gap-12 px-6 mt-20">
              <div className="relative overflow-hidden bg-green-500 rounded-3xl pb-100">
                <iframe
                  className="absolute w-full h-full"
                  // width="804"
                  // height="453"
                  src="https://www.youtube.com/embed/WxyFRb0_eUQ?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="relative overflow-hidden bg-green-500 rounded-3xl pb-100">
                <iframe
                  className="absolute w-full h-full"
                  // width="804"
                  // height="453"
                  src="https://www.youtube.com/embed/nvKktNrJXcY?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="relative overflow-hidden bg-green-500 rounded-3xl pb-100">
                <iframe
                  className="absolute w-full h-full"
                  // width="804"
                  // height="453"
                  src="https://www.youtube.com/embed/gx7N3QGrVWE?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="relative overflow-hidden bg-green-500 pb-100 rounded-3xl">
                <iframe
                  className="absolute w-full h-full"
                  // width="804"
                  // height="453"
                  src="https://www.youtube.com/embed/uT9n7iIxEw8?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="relative overflow-hidden bg-green-500 pb-100 rounded-3xl">
                <iframe
                  className="absolute w-full h-full"
                  // width="804"
                  // height="453"
                  src="https://www.youtube.com/embed/R0HJtkYtjwk?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="relative overflow-hidden bg-green-500 pb-100 rounded-3xl">
                <iframe
                  className="absolute w-full h-full"
                  // width="804"
                  // height="453"
                  src="https://www.youtube.com/embed/_wyPpPlFwrI?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
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

export default CourseVideos;
