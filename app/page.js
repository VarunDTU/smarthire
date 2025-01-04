"use client";
import About from "./components/homepage/about";
import Inbox from "./components/homepage/inbox";
import MessageInbox from "./components/homepage/message";

export default function Home() {
  return (
    <div className="w-screen max-h-screen flex flex-row">
      <div className="w-1/4">
        <Inbox></Inbox>
      </div>
      <div className="w-1/2">
        <MessageInbox></MessageInbox>
      </div>
      <div className="w-1/4 h-screen">
        <About></About>
      </div>
    </div>
  );
}
