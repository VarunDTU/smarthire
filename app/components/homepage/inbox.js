"use client";
import { useState } from "react";
import { FcPieChart } from "react-icons/fc";
import { IoIosAdd, IoMdArrowBack, IoMdSearch } from "react-icons/io";
import { IoCheckmarkDoneOutline, IoPeople } from "react-icons/io5";

export default function Inbox() {
  const [activeInbox, setActiveInbox] = useState("messages");
  const messages = [
    {
      name: "John Doe",
      message: "Hello, how are you?",
      readReciepts: "read",
      profilePicture: "https://randomuser.me/api/portraits/women/60.jpg",
      socialmediaLink:
        "https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png",
    },
    {
      name: "Jane Doe",
      message: "Hello, how are you?",
      readReciepts: "unread",
      profilePicture: "https://randomuser.me/api/portraits/women/60.jpg",
      socialmediaLink:
        "https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png",
    },
  ];
  return (
    <>
      <div className="w-full h-full p-2 px-6">
        <div className="w-full flex flex-row justify-between items-center text-black">
          <IoMdArrowBack size={20}></IoMdArrowBack>
          <div className="text-xl h-16 flex items-center">
            <FcPieChart size={40} className="m-2"></FcPieChart>
            <div className="font-semibold flex flex-col">
              BlueChat
              <div className="text-slate-500 text-sm">Inbox</div>
            </div>
          </div>
          <div className="flex flex-row text-slate-500 ">
            <IoMdSearch size={25}></IoMdSearch>
            <IoIosAdd size={25} className="border rounded-md  ml-2"></IoIosAdd>
          </div>
        </div>
        <div className="">
          <div className=" bg-slate-100 rounded font-semibold cursor-pointer">
            <div className="flex flex-row items-center p-1 ">
              <div
                className={`p-1 w-1/2 text-center transition-all transform duration-150 ${
                  activeInbox == "messages"
                    ? "shadow-sm shadow-slate-400 rounded bg-white"
                    : ""
                } `}
                onClick={() => setActiveInbox("messages")}
              >
                Messages
              </div>
              <div
                className={`p-1 w-1/2 text-center transition-all transform duration-150 ${
                  activeInbox == "segments"
                    ? "shadow-sm shadow-slate-400 rounded bg-white"
                    : ""
                } `}
                onClick={() => setActiveInbox("segments")}
              >
                Segments
              </div>
            </div>
          </div>
          <div className="w-full font-bold  flex flex-row justify-between p-2">
            <div className="flex items-center justify-center">
              <IoPeople className="m-2"></IoPeople>
              All
              <span className="bg-green-200 rounded-full text-xs font-medium text-green-900 pt-0 px-1 mx-1">
                238
              </span>
              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="relative mt-2">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex  cursor-pointer items-center gap-2  border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                  <span className="text-sm flex items-center justify-center  ">
                    {" "}
                    Oldest{" "}
                  </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
              </details>
            </div>
          </div>

          <div className="flex flex-col">
            {messages.map((message, index) => (
              <div
                key={index}
                className="flex flex-col justify-center px-2 p-2 border-b border-gray-200 font-bold"
              >
                <div className="flex justify-between ">
                  <div className="flex flex-row items-center">
                    <img
                      src={message.profilePicture}
                      className="h-8 w-8 rounded-full"
                    ></img>
                    <div className="mx-2">{message.name}</div>
                    <img
                      src={message.socialmediaLink}
                      className="h-4 w-4 rounded-full mx-2"
                    ></img>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-slate-600 font-semibold text-sm">
                    {message.message}
                  </div>
                  <IoCheckmarkDoneOutline> </IoCheckmarkDoneOutline>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
