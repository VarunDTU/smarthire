"use client";
import { FcAddressBook } from "react-icons/fc";
import { LuMessageCircleMore } from "react-icons/lu";
export default function ChatMessage({ messages }) {
  console.log(messages);
  return (
    <div className="">
      <div className="w-full text-center rounded-lg  flex items-center justify-center m-2">
        <div className="bg-slate-200/70 text-slate-500 backdrop-blur-lg rounded-lg p-1  text-sm">
          Today
        </div>
      </div>
      {messages.messages.map((message, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <div
              className={` text-md text-sm py-2 flex ${
                message.user != messages.user.name
                  ? "items-start justify-start"
                  : "items-end justify-end"
              } flex-row `}
            >
              <div
                className={` w-3/4 p-1 rounded-lg flex ${
                  message.user != messages.user.name
                    ? "flex-row "
                    : "flex-row-reverse "
                }`}
              >
                <img
                  src={message.profilePicture}
                  className={`h-8 rounded-full my-1 ${
                    message.user != messages.user.name ? "mr-1" : "ml-1"
                  }`}
                ></img>
                <div
                  className={` rounded-lg flex flex-col p-3  shadow-md ${
                    message.user != messages.user.name
                      ? " bg-white "
                      : " bg-blue-600 text-white/90 "
                  }`}
                >
                  <div className="flex flex-row">
                    <div>{message.message}</div>
                    <div
                      className={`${
                        message.source ? "flex justify-start" : "hidden"
                      }`}
                    >
                      <FcAddressBook size={20} />
                    </div>
                  </div>
                  <div
                    className={`bg-slate-100/80 p-2 my-1 rounded-lg font-semibold flex  ${
                      message.user != messages.user.name ? "" : "hidden"
                    }`}
                  >
                    <div className="w-1/2 flex items-center">
                      <LuMessageCircleMore
                        size={25}
                        className="text-blue-600 m-1"
                      />{" "}
                      Smart Response detected!
                    </div>
                    <div className="flex justify-end items-center w-1/2 ">
                      <button className="bg-white px-2 py-1.5 rounded mx-1 border">
                        Cancel
                      </button>
                      <button className="bg-blue-500 px-2 py-1.5 mx-1 border rounded text-white">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` text-md text-sm flex mx-12 font-semibold text-slate-500 ${
                message.user != messages.user.name
                  ? "items-start justify-start"
                  : "items-end justify-end"
              } flex-row `}
            >
              {message.date.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "numeric",
                minute: "numeric",
              })}{" "}
              PM
            </div>
          </div>
        );
      })}
    </div>
  );
}
