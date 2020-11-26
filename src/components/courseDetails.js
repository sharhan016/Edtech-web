import React from "react";
// import "../styles/main.css";
import { FcEngineering } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

function CourseDetails() {
  const [courseDropdown, setCourseDropdown] = React.useState(false);
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
        <div
          style={{ paddingTop: "0.625rem", paddingBottom: "0.625rem" }}
          className="relative pl-4 pr-10 py-2.5 ml-16 border-2 border-gray-400 rounded-full"
        >
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
        <div className="flex items-center ">
          <div
            onClick={() => setCourseDropdown(!courseDropdown)}
            className="font-medium tracking-wide cursor-pointer text-1xl ml-28"
          >
            My Courses
          </div>
          {courseDropdown && (
            <div className="absolute z-10 mt-2 bg-white border-4 border-t-0 divide-y-4 divide-gray-500 right-44 top-48 w-37">
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
            <div className="flex items-center justify-center text-2xl font-semibold text-white bg-blue-800 border rounded-full w-14 h-14">
              <div>S</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 text-white bg-gradient-to-b from-blue-700 to-purple-800">
        <div className="flex items-center space-x-6 text-white">
          <div className="">Some text</div>
          <div className="">Some text</div>
          <div className="">Some text</div>
        </div>
        <div
          className="grid grid-cols-3 grid-rows-2 px-6"
          style={{ paddingTop: "2.5rem" }}
        >
          <div className="col-span-2 row-span-2 py-4 ">
            <div
              className="text-4.5xl font-medium tracking-wide text-white"
              style={{ fontSize: "2.5rem", lineHeight: "3.5rem" }}
            >
              JavaScript Fundamentals: A course for Absolute Beginners
            </div>
            <div className="my-8 text-2xl font-medium tracking-wider text-white">
              Learn JavaScript Fundamentals from the Scratch
            </div>
            <div className="flex items-center py-1">
              <div className="flex overflow-hidden rounded-full w-1/10">
                <img
                  className="object-cover"
                  src="https://via.placeholder.com/600/92c952"
                  alt="image2"
                />
              </div>
              <div className="ml-2 text-white">
                <div className="text-xl font-medium">Brad Traversy</div>
                <div className="">12 Courses</div>
              </div>
              <div
                className="flex items-center px-6 py-3.5 ml-6 bg-white rounded-md"
                style={{ paddingTop: "0.875rem", paddingBottom: "0.875rem" }}
              >
                <div className="text-lg text-gray-900">4.4 reviews</div>
                <div className="flex items-center ml-4 space-x-1">
                  <BsStarFill size="1.700rem" color="yellow" />
                  <BsStarFill size="1.700rem" color="yellow" />
                  <BsStarFill size="1.700rem" color="yellow" />
                  <BsStarFill size="1.700rem" color="yellow" />
                  <BsStarHalf size="1.700rem" color="yellow" />
                </div>
              </div>
            </div>
            <div
              style={{ marginTop: "2.5rem", marginBottom: "1.750rem" }}
              className="ml-6 text-3xl font-medium text-white "
            >
              $ 699 <span className="pl-3 text-base">60% off</span>
            </div>
            <div className="mt-4 space-x-5">
              <button className="px-10 py-4 text-xl font-medium text-white bg-red-700 rounded-lg ">
                Add to cart
              </button>
              <button className="px-10 py-4 text-xl font-medium text-white bg-purple-900 rounded-lg">
                Buy now
              </button>
            </div>
          </div>
          <div className="ml-14">
            <div className="relative overflow-hidden pb-1/2 rounded-xl">
              <img
                className="absolute object-cover w-full h-full"
                src="https://via.placeholder.com/600/d32776"
                alt="image1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-20">
        <div className="px-16 border-b-4">
          <div className="text-4xl font-semibold tracking-wide text-gray-900">
            This Course Includes
          </div>
          <div className="mt-12 space-y-10 text-3xl tracking-wider">
            <div className="">2.5 hours on-demand video</div>
            <div className="">3 articles</div>
            <div className="">Full lifetime access</div>
            <div className="">Certificate of completion</div>
          </div>
        </div>
      </div>
      <div className="px-10 py-10">
        <div className="px-16">
          <div className="text-4xl font-semibold tracking-wide text-gray-900">
            Description
          </div>
          <div className="my-10 text-3xl leading-11">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            nulla laborum minus quod. Harum enim minus eum recusandae omnis
            incidunt quod maiores, soluta autem dolorem et maxime iste nostrum
            nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate voluptatum dolores sint nobis accusantium, recusandae
            alias blanditiis quasi totam maiores, non, quod eius consequatur
            quisquam et quam praesentium vitae unde. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Reiciendis, fugiat consequuntur. Minus
            velit consequatur nulla fugit ad odio incidunt eveniet. Rerum,
            officia? At, repudiandae.
          </div>
        </div>
        <div className="px-16 py-12 text-4xl font-semibold tracking-wide text-gray-900 border-4">
          78 Quizzes
        </div>
        <div className="px-16 py-10 my-10 border-4">
          <div className="">
            <div className="text-4xl font-semibold tracking-wide text-gray-900">
              Syllabus
            </div>
            <div className="text-2xl" style={{ marginTop: "15px" }}>
              Some text
            </div>
          </div>
          <div
            className="pl-4 mt-20"
            style={{ marginTop: "80px", paddingLeft: "" }}
          >
            <div className="">
              <div className="flex items-center justify-between text-3xl font-medium">
                <div className="">JavaScript Fundamentals</div>
                <div className="mr-4">
                  <TiMinus color="blue" size="2rem" />
                </div>
              </div>
              <div className="my-10 ml-6 space-y-12 text-3xl">
                <div className="flex items-center space-x-9">
                  <div className="" style={{}}>
                    1
                  </div>
                  <div className="space-y-1">
                    <div className="">Introduction to JavaScript</div>
                    <div className="text-xl">Some text</div>
                  </div>
                </div>
                <div className="flex items-center space-x-9">
                  <div className="" style={{}}>
                    2
                  </div>
                  <div className="space-y-1">
                    <div className="">ECMA Script</div>
                    <div className="text-xl">Some text</div>
                  </div>
                </div>
                <div className="flex items-center space-x-9">
                  <div className="" style={{}}>
                    3
                  </div>
                  <div className="space-y-1">
                    <div className="">Debugger and Objects</div>
                    <div className="text-xl">Some text</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 mb-8">
              <div className="flex items-center justify-between text-3xl font-medium">
                <div className="">Object Oriented Concepts</div>
                <div className="mr-4">
                  <TiPlus color="blue" size="2rem" />
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

export default CourseDetails;
