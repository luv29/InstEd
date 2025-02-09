import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const messages = [
    { id: 1, sender: "user1", text: "Hey, how's it going?" },
    { id: 2, sender: "user2", text: "All good! You?" },
    { id: 3, sender: "user1", text: "Doing great, just working on a project." },
    { id: 4, sender: "user2", text: "Nice! What kind of project?" },
    { id: 5, sender: "user1", text: "A chat app with real-time messaging!" },
    { id: 6, sender: "user2", text: "That sounds awesome!" },
    { id: 7, sender: "user1", text: "Yeah! Using React, Socket.io, and Express." },
    { id: 8, sender: "user2", text: "Solid stack! Let me know if you need help." },
    { id: 9, sender: "user1", text: "Appreciate it! Will do. 🚀" }
  ];

  const user = { id: "user1" }; // Current logged-in user


  return (
    <div className='flex flex-col w-full'>
      <div className="flex items-center justify-between space-x-3 border-b-2 border-b-gray-300 p-3">
        <div className='flex gap-x-6 justify-center items-center'>
          <FaRegUserCircle className="w-12 h-12 text-purple-800" />
          <span className="font-yatra text-2xl">Msg reciever/sender</span>
        </div>
        <IoMdInformationCircleOutline className='w-7 h-7' />
      </div>

      <div className="flex flex-col w-full h-full p-2">
        <div className="flex flex-col-reverse h-full w-full overflow-y-auto space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex w-full ${msg.sender === user.id ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === user.id ? <></> :
                <FaRegUserCircle className="w-9 h-9 pt-1 pr-1 text-purple-800" />
              }
              <div
                className={`max-w-xs p-2 rounded-lg ${msg.sender === user.id ? "bg-[#625B71] text-white" : "bg-[#ECE6F0] text-black"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full p-2 bg-white">
          <div className="flex items-center bg-[#625B71] text-white p-2 rounded-2xl gap-x-2 w-full">
            <MdOutlineEmojiEmotions className="w-7 h-7" />
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
            />
            <CiCirclePlus className="w-7 h-7" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat