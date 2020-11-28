import React, { Component } from "react";
import { FcEngineering } from "react-icons/fc";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { BsHeart } from "react-icons/bs";

function HomePage() {
  const [courseDropdown, setCourseDropdown] = React.useState(false);
  const [categoriesDrop, setCategoriesDrop] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
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
        <div
          onClick={() => setCategoriesDrop(!categoriesDrop)}
          className="relative z-10 ml-16 font-medium tracking-wide transition duration-300 transform cursor-pointer text-1xl hover:text-gray-500"
        >
          Categories
        </div>
        {categoriesDrop && (
          <button
            onClick={() => setCategoriesDrop(false)}
            className="fixed inset-0 z-20 w-full h-full focus:outline-none"
          ></button>
        )}
        {categoriesDrop && (
          <div className="absolute z-30 text-lg bg-white top-48 left-40">
            <div className="inline-block py-8 pl-5 pr-8 space-y-5 border-2 border-t-0">
              <div className="">
                <a href="https://google.com" target="_blank">
                  Some text
                </a>
              </div>
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text.........</div>
            </div>
            <div className="inline-block py-8 pl-5 pr-8 space-y-5 border-2 border-t-0">
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text..........</div>
            </div>
            <div className="inline-block py-8 pl-5 pr-8 space-y-5 border-2 border-t-0">
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text</div>
              <div className="">Some text.........</div>
            </div>
          </div>
        )}
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
          <div
            onClick={() => setCourseDropdown(!courseDropdown)}
            className="relative z-10 font-medium tracking-wide transition duration-300 cursor-pointer text-1xl ml-28 hover:text-gray-500"
          >
            My Courses
          </div>
          {courseDropdown && (
            <button
              tabIndex="-1"
              onClick={() => setCourseDropdown(false)}
              className="fixed inset-0 z-20 w-full h-full focus:outline-none"
            ></button>
          )}
          {courseDropdown && (
            <div className="absolute z-30 mt-2 transition duration-1000 transform scale-100 bg-white border-4 border-t-0 divide-y-4 divide-gray-500 right-44 top-48 w-37">
              <div className="flex px-10 pt-10 pb-6">
                <div className="relative pb-34 w-37">
                  <img
                    className="absolute object-cover w-full h-full"
                    src="https://via.placeholder.com/600/d32776"
                    alt="image1"
                  />
                </div>
                <div className="flex flex-col justify-between pt-6 pb-2 pl-6 pr-10 text-xl ">
                  <div className="">Java Complete Beginner Course</div>
                  <div className="text-1xl">
                    $700 <span className="ml-2 text-lg">60% off</span>
                  </div>
                </div>
              </div>
              <div className="flex px-10 pt-10 pb-6">
                <div className="relative pb-34 w-37">
                  <img
                    className="absolute object-cover w-full h-full"
                    src="https://via.placeholder.com/600/d32776"
                    alt="image1"
                  />
                </div>
                <div className="flex flex-col justify-between pt-6 pb-2 pl-6 pr-10 text-xl ">
                  <div className="">Java Complete Beginner Course</div>
                  <div className="text-1xl">
                    $700 <span className="ml-2 text-lg">60% off</span>
                  </div>
                </div>
              </div>
              <div className="px-10 pt-6 pb-6 text-3xl ">
                <div className="">Total: $ 1500</div>
                <button className="block text-white w-full py-2.5 mt-4 text-center bg-blue-500">
                  Go To Cart
                </button>
              </div>
            </div>
          )}
          <div className="flex items-center ml-8 space-x-5">
            <div className="">
              <IoMdCart size="3em" color="#4B5563" />
            </div>
            <div className="">
              <BsHeart size="2.5em" color="#4B5563" />
            </div>
            <div
              onClick={() => setProfile(!profile)}
              className="flex items-center justify-center text-2xl font-semibold text-white bg-blue-800 border rounded-full cursor-pointer focus:ring w-14 h-14"
            >
              <div>S</div>
            </div>
            {profile && (
              <button
                onClick={() => setProfile(false)}
                className="fixed inset-0 z-20 w-full h-full focus:outline-none"
              ></button>
            )}
            {profile && (
              <div className="absolute z-30 w-1/3 mt-2 bg-white border-2 border-t-0 divide-y-2 top-48 right-14">
                <div className="flex items-center px-8 py-7">
                  <div className="">
                    <div className="flex items-center justify-center  text-4.5xl font-semibold text-white bg-blue-800 border rounded-full w-18 h-18">
                      <div>S</div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-2xl">Sushma</div>
                    <div className="">some texttttttttt</div>
                  </div>
                </div>
                <div className="px-8 space-y-3 text-lg py-7">
                  <div className="flex items-center space-x-4">
                    <div className="">
                      <FaUserCircle />
                    </div>
                    <a href="https://google.com" target="_blank">
                      <button className="">Edit Profile</button>
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="">
                      <IoMdCart />
                    </div>
                    <button className="">My Cart</button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="">
                      <FaUserCircle />
                    </div>
                    <button className="">Wishlist</button>
                  </div>
                </div>
                <div className="px-8 space-y-3 text-lg py-7">
                  <div className="flex items-center space-x-4">
                    <div className="">
                      <FaUserCircle />
                    </div>
                    <button className="">My Courses</button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="">
                      <FaUserCircle />
                    </div>
                    <button className="">My Certification</button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="">
                      <FaUserCircle />
                    </div>
                    <button className="">Notifications</button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="">
                      <FaUserCircle />
                    </div>
                    <button className="">Discuss</button>
                  </div>
                </div>
                <div className="px-8 space-y-3 text-lg py-7">
                  <div className="flex items-center space-x-4">
                    <div className="">
                      <FaUserCircle />
                    </div>
                    <button className="">Jobs</button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="">
                      <FaUserCircle />
                    </div>
                    <button className="">Logout</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex py-8 text-3xl font-medium border-b-8 space-x-9 px-18">
        <div className="">Software Development</div>
        <div className="">Design</div>
        <div className="">Marketing</div>
        <div className="">Competetive Exam</div>
        <div className="">IT Software</div>
      </div>
      <div className="px-12 py-20 space-y-20 tracking-wider">
        <div className="">
          <div className="text-4.5xl font-medium">Courses for you</div>
          <div className="grid grid-cols-3 px-8 py-16 gap-11">
            <div className="border">
              <div className="relative pb-2/3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://via.placeholder.com/600/92c952"
                  alt="image1"
                />
              </div>
              <div className="px-8 border-4 border-t-0">
                <div className="py-3 text-2xl font-medium text-center">
                  JAVA
                </div>
                <div className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  excepturi quas eveniet eos distinctio officiis animi
                </div>
                <div className="my-1 text-right">something</div>
              </div>
            </div>
            <div className="border">
              <div className="relative pb-2/3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://via.placeholder.com/600/771796"
                  alt="image2"
                />
              </div>
              <div className="px-8 border-4 border-t-0">
                <div className="py-3 text-2xl font-medium text-center">
                  Python
                </div>
                <div className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  excepturi quas eveniet eos distinctio officiis animi
                </div>
                <div className="my-1 text-right">something</div>
              </div>
            </div>
            <div className="border">
              <div className="relative pb-2/3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://via.placeholder.com/600/d32776"
                  alt="image2"
                />
              </div>
              <div className="px-8 border-4 border-t-0">
                <div className="py-3 text-2xl font-medium text-center">C++</div>
                <div className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  excepturi quas eveniet eos distinctio officiis animi
                </div>
                <div className="my-1 text-right">something</div>
              </div>
            </div>
          </div>
          <div className="px-8 text-2xl text-right">View all</div>
        </div>
        <div className="">
          <div className="text-4.5xl font-medium">Top Courses in IT</div>
          <div className="grid grid-cols-3 px-8 py-16 gap-11">
            <div className="border">
              <div className="relative pb-2/3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://via.placeholder.com/600/92c952"
                  alt="image1"
                />
              </div>
              <div className="px-8 border-4 border-t-0">
                <div className="py-3 text-2xl font-medium text-center">
                  JAVA
                </div>
                <div className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  excepturi quas eveniet eos distinctio officiis animi
                </div>
                <div className="my-1 text-right">something</div>
              </div>
            </div>
            <div className="border">
              <div className="relative pb-2/3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://via.placeholder.com/600/771796"
                  alt="image2"
                />
              </div>
              <div className="px-8 border-4 border-t-0">
                <div className="py-3 text-2xl font-medium text-center">
                  Python
                </div>
                <div className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  excepturi quas eveniet eos distinctio officiis animi
                </div>
                <div className="my-1 text-right">something</div>
              </div>
            </div>
            <div className="border">
              <div className="relative pb-2/3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://via.placeholder.com/600/d32776"
                  alt="image2"
                />
              </div>
              <div className="px-8 border-4 border-t-0">
                <div className="py-3 text-2xl font-medium text-center">C++</div>
                <div className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  excepturi quas eveniet eos distinctio officiis animi
                </div>
                <div className="my-1 text-right">something</div>
              </div>
            </div>
          </div>
          <div className="px-8 text-2xl text-right">View all</div>
        </div>
        <div className="">
          <div className="text-4.5xl font-medium">Top Courses in Design</div>
          <div className="grid grid-cols-3 px-8 py-16 gap-11">
            <div className="border">
              <div className="relative pb-2/3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://via.placeholder.com/600/92c952"
                  alt="image1"
                />
              </div>
              <div className="px-8 border-4 border-t-0">
                <div className="py-3 text-2xl font-medium text-center">
                  JAVA
                </div>
                <div className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  excepturi quas eveniet eos distinctio officiis animi
                </div>
                <div className="my-1 text-right">something</div>
              </div>
            </div>
            <div className="border">
              <div className="relative pb-2/3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://via.placeholder.com/600/771796"
                  alt="image2"
                />
              </div>
              <div className="px-8 border-4 border-t-0">
                <div className="py-3 text-2xl font-medium text-center">
                  Python
                </div>
                <div className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  excepturi quas eveniet eos distinctio officiis animi
                </div>
                <div className="my-1 text-right">something</div>
              </div>
            </div>
            <div className="border">
              <div className="relative pb-2/3">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://via.placeholder.com/600/d32776"
                  alt="image2"
                />
              </div>
              <div className="px-8 border-4 border-t-0">
                <div className="py-3 text-2xl font-medium text-center">C++</div>
                <div className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  excepturi quas eveniet eos distinctio officiis animi
                </div>
                <div className="my-1 text-right">something</div>
              </div>
            </div>
          </div>
          <div className="px-8 text-2xl text-right">View all</div>
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

export default HomePage;
