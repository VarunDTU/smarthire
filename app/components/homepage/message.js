"use client";
import { CiMenuKebab } from "react-icons/ci";
import { FaChevronDown, FaFacebookMessenger } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown, IoIosContact } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import { LuMessageCircle, LuSend } from "react-icons/lu";
import { RiImageAddLine } from "react-icons/ri";
import ChatMessage from "./chatmessage";

export default function MessageInbox() {
  const chat = {
    user: {
      name: "admin",
      profilePicture: "https://randomuser.me/api/portraits/men/39.jpg",
    },
    user1: {
      name: "John Doe",
      email: "johndoe@gmail.com",
      profilePicture: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    messages: [
      {
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        readReciepts: "read",
        profilePicture: "https://randomuser.me/api/portraits/women/60.jpg",
        user: "John Doe",
        date: new Date(),
        source: true,
      },
      {
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        readReciepts: "read",
        profilePicture: "https://randomuser.me/api/portraits/men/39.jpg ",
        user: "admin",
        date: new Date(),
      },
    ],
  };

  return (
    <div className="w-full h-full p-2 px-6">
      <div className="w-full flex flex-row justify-between items-center text-black h-20">
        <div className="flex flex-row justify-center items-center">
          <img
            className="w-11 h-11 rounded-full"
            src={chat.user1.profilePicture}
          />
          <div className="flex flex-col ml-2">
            <h2 className="font-semibold text-sm">John Doe</h2>
            <div className="font-semibold text-xs text-slate-600">
              johnDoe@gmail.com
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-row justify-evenly items-center">
          <button className="flex flex-row items-center p-1 border rounded-lg text-sm font-semibold justify-center ">
            <FaFacebookMessenger
              size={15}
              className="text-purple-800"
            ></FaFacebookMessenger>
            <div className="mx-2">Messenger</div>
            <IoIosArrowDown size={10}></IoIosArrowDown>
          </button>
          <FaCheck size={20} className="border p-0.5 rounded-lg "></FaCheck>
          <CiMenuKebab></CiMenuKebab>
          <img
            src="https://randomuser.me/api/portraits/women/60.jpg"
            className="w-8 h-8 rounded-full border p-0.5"
          />
          <IoInformationCircle size={20}></IoInformationCircle>
        </div>
      </div>
      <div className="h-3/4 ">
        <div className=" rounded-lg bg-[url('https://cdn.wallpapersafari.com/27/32/jt4AoG.jpg')] w-full h-full overflow-hidden p-2">
          <div className="w-full bg-white rounded-lg shadow-md p-4 justify-evenly items-stretch flex flex-col">
            <div className="flex flex-row items-center">
              <img
                src={chat.user1.profilePicture}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col font-semibold mx-2">
                <div>{chat.user1.name}</div>
                <div className="text-slate-600 text-sm">{chat.user1.email}</div>
              </div>
            </div>
            <div className="text-sm pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <span className="bg-green-200 font-semibold text-green-800 rounded px-0.5 mx-1 ">
                @{chat.user1.name}
              </span>
            </div>
          </div>
          <ChatMessage messages={chat}></ChatMessage>
        </div>
      </div>
      <div>
        <label htmlFor="Message" className="sr-only">
          Message
        </label>

        <div className="overflow-hidden border rounded-lg mt-5 active:border-blue-700 active:border ">
          <input
            className="w-full border-none active:border-none focus:border-none outline-none p-2 "
            placeholder="Message John doe "
          ></input>
          <div className="flex flex-row justify-between items-center p-2">
            <div className="flex flex-row">
              <LuMessageCircle
                size={20}
                className="m-2 text-slate-600"
              ></LuMessageCircle>
              <IoIosContact
                size={20}
                className="m-2 text-slate-600"
              ></IoIosContact>
              <RiImageAddLine
                size={20}
                className="m-2 text-slate-600"
              ></RiImageAddLine>
            </div>
            <div className="flex flex-row items-center">
              <LuSend size={20} className="m-2 text-slate-400"></LuSend>
              <FaChevronDown
                size={20}
                className="m-2 text-slate-400"
              ></FaChevronDown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
