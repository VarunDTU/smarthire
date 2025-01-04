"use client";
import { useState } from "react";
import { FaClock, FaSearch, FaStore } from "react-icons/fa";
import { FaPerson, FaX } from "react-icons/fa6";
import { HiOutlineCurrencyDollar, HiOutlineEye } from "react-icons/hi2";
import { IoIosAdd, IoIosCall, IoIosVideocam } from "react-icons/io";
export default function About() {
  const [activeInbox, setActiveInbox] = useState("messages");
  return (
    <>
      <div className="w-full h-full p-2 px-6 pt-4">
        <div className="w-full flex flex-col justify-center items-center ">
          <img
            src="https://randomuser.me/api/portraits/women/60.jpg"
            className="rounded-full h-20"
          ></img>
          <div className="font-bold text-xl">John Doe</div>
          <div className=" text-slate-500 font-semibold text-sm">
            16:31 pm Delhi,India
          </div>
          <div className="pt-8 w-full flex justify-evenly items-stretch">
            <div className="text-slate-600 flex items-center flex-col">
              {" "}
              <IoIosCall></IoIosCall> Call
            </div>
            <div className="text-slate-600 flex items-center flex-col">
              <IoIosVideocam></IoIosVideocam> Video
            </div>
            <div className="text-slate-600 flex items-center flex-col">
              <IoIosAdd />
              More
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-evenly my-5 text-xs text-slate-500 font-semibold  ">
          <div className="p-2 w-1/2 mx-1 border min-h-10 rounded ">
            <div className=" flex flex-row items-center text-xs text-slate-500 font-semibold">
              <HiOutlineCurrencyDollar className="mx-1" /> Revenue{" "}
            </div>
            <div className="py-1 font-bold text-xl text-black">$3,433</div>
            <span>3 orders </span>
          </div>
          <div className="p-2  w-1/2 mx-1  border min-h-10 rounded">
            <div className="flex flex-row items-center text-xs text-slate-500 font-semibold">
              <HiOutlineEye className="mx-1"> </HiOutlineEye> Web visits{" "}
            </div>
            <div className="py-1 font-bold text-xl text-black">42</div>
            <span>4 click links </span>
          </div>
        </div>
        {/* SELECTOR */}
        <div className=" bg-slate-100 rounded font-semibold cursor-pointer">
          <div className="flex flex-row items-center p-1 ">
            <div
              className={`p-2 w-1/2 text-center flex justify-center transition-all transform duration-150 ${
                activeInbox == "messages"
                  ? "shadow-sm shadow-slate-400 rounded bg-white "
                  : ""
              } `}
              onClick={() => setActiveInbox("messages")}
            >
              <FaPerson className="m-1"></FaPerson>
            </div>
            <div
              className={`p-2 w-1/2 text-center flex justify-center transition-all transform duration-150 ${
                activeInbox == "segments"
                  ? "shadow-sm shadow-slate-400 rounded bg-white"
                  : ""
              } `}
              onClick={() => setActiveInbox("segments")}
            >
              <FaStore className="m-1"></FaStore>
            </div>
            <div
              className={`p-2 w-1/2 text-center flex justify-center transition-all transform duration-150 ${
                activeInbox == "time"
                  ? "shadow-sm shadow-slate-400 rounded bg-white"
                  : ""
              } `}
              onClick={() => setActiveInbox("time")}
            >
              <FaClock className="m-1" />
            </div>
          </div>
        </div>

        {/* SEARCHBAR */}

        <div className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 mt-2">
          <FaSearch></FaSearch>
          <input
            placeholder="Search here"
            className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm outline-none"
          />
        </div>

        {/* dropdowns
         */}

        <div className="text-sm overflow-x-hidden overflow-y-auto overflow-auto mt-2">
          <div className="   ">
            <details
              className="group [&_summary::-webkit-details-marker]:hidden "
              open
            >
              <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 border p-1 py-2 text-gray-900">
                <div className="flex flex-row items-center ">
                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 mr-1 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <h2 className="font-medium">Information</h2>
                </div>

                <div className="flex flex-row text-blue-600 font-semibold">
                  + Add
                </div>
              </summary>
              <div className="text-slate-500 font-semibold">
                <div className="flex flex-row p-1 py-2 justify-between">
                  <div>Segments</div>
                  <div className="text-black">Abandoned Cart</div>
                </div>
                <div className="flex flex-row p-1 py-2 justify-between">
                  <div>Email</div>
                  <div className="text-black">Johndoe@gmail.com</div>
                </div>
                <div className="flex flex-row p-1 py-2 justify-between">
                  <div>Phone</div>
                  <div className="text-black">+91-999999999</div>
                </div>
                <div className="flex flex-row p-1 py-2 justify-between">
                  <div>LastVisited</div>
                  <div className="text-black">Today</div>
                </div>
              </div>
            </details>
            <details
              className="group [&_summary::-webkit-details-marker]:hidden my-1 "
              open
            >
              <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 border p-1 py-2 text-gray-900">
                <div className="flex flex-row items-center ">
                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 mr-1 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <h2 className="font-medium">Tags</h2>
                </div>

                <div className="flex flex-row text-blue-600 font-semibold">
                  + Add
                </div>
              </summary>
              <div className="flex flex-wrap">
                <div className="flex mx-1  pt-2 font-semibold">
                  <span className="bg-slate-200 rounded p-1 flex flex-row items-center">
                    Abandoned cart <FaX className="mx-2 text-slate-700 "></FaX>{" "}
                  </span>
                </div>
                <div className="flex mx-1 pt-2 font-semibold">
                  <span className="bg-slate-200 rounded p-1 flex flex-row items-center">
                    Popup <FaX className="mx-2 text-slate-700 "></FaX>{" "}
                  </span>
                </div>
                <div className="flex mx-1 pt-2 font-semibold">
                  <span className="bg-slate-200 rounded p-1 flex flex-row items-center">
                    Shop error <FaX className="mx-2 text-slate-700 "></FaX>{" "}
                  </span>
                </div>
                <div className="flex mx-1 pt-2 font-semibold">
                  <span className="bg-slate-200 rounded p-1 flex flex-row items-center">
                    Successfull <FaX className="mx-2 text-slate-700 "></FaX>{" "}
                  </span>
                </div>
              </div>
            </details>
            {/* 
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details> */}
          </div>
        </div>
      </div>
    </>
  );
}
