import React, { useState } from "react";
import dan from "../assets/images/dan.png";
import jane from "../assets/images/jane.png";
import emily from "../assets/images/emily.png";
import question from "../assets/images/question.jpg";
import { Search, X, UserCircle, Camera } from "lucide-react";

const questions = [
  {
    name: "Ravi Gupta",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    points: "+5 pts",
    question: "A sum of money at compound interest becomes double of itself in 15 yrs. The rate of interest is ?",
  },
  {
    name: "Rose Abby",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    points: "+7 pts",
    question: "Six years ago, the ratio of the ages of Kunal and Sagar was 6:5. After four years, the ratio of ....",
  },
  {
    name: "Shamar Jackson",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    points: "+10 pts",
    question: "12 men or 20 women can complete a work in 4 days. How many days will it take to complete ....",
  },
  {
    name: "Edward Langston",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    points: "+5 pts",
    question: "Explain mechanism of transportation in hydra, flatworms, insect, snails and man.",
  },
];

const Feeds = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bg-[#EBEBEB] flex w-screen h-[91.2vh]">
      <div className="h-full bg-white w-[15%]"></div>
      
      {/* Middle Section */}
      <div className="h-full bg-[#EBEBEB] w-[60%] flex flex-col p-5 gap-6.5">
        {/* Question Input */}
        <div className="h-[25%] w-full bg-white rounded-[10.5px] p-4 shadow-sm">
          <div className="flex items-center justify-between border-b pb-1">
            <div className="flex items-center gap-2 text-gray-700 font-semibold w-full h-[90%]">
              <UserCircle className="w-5 h-5" />
              Make Post
              <span className="text-gray-400">|</span>
              <Camera className="w-5 h-5" />
              Photo / Video
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <img src="https://randomuser.me/api/portraits/men/4.jpg" className="w-10 h-10 rounded-full" alt="User" />
            <input
              type="text"
              placeholder="What is your question?"
              className="flex-grow bg-transparent outline-none text-wrap text-gray-700"
            />
            <button className="bg-red-500 text-white text-sm border-[0.5px] border-red-500 hover:bg-white hover:border-[0.5px] hover:text-red-500 transition duration-200 ease-in-out px-4 py-1 rounded-full">Post</button>
          </div>
        </div>

        {/* Post Feeds */}
        <div className="h-[70%] w-full bg-white rounded-[10.5px] p-4 overflow-auto">
          {questions.map((q, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm mb-4 border-1">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={q.image} alt={q.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="ml-3">
                    <h4 className="font-semibold">{q.name}</h4>
                    <p className="text-gray-500 text-sm">@user_{index} • 2h</p>
                  </div>
                </div>
                <div className="flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {q.points}
                </div>
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mt-2">{q.question}</p>
              <img src={question}/>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="h-full bg-white w-[25%] p-5 flex flex-col gap-y-5">
        {/* Search Bar */}
        <div className="w-full border-[1px] rounded-full py-2 px-3 flex items-center">
          <Search className="text-gray-500 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow bg-transparent outline-none placeholder-gray-500 text-gray-900"
          />
          {searchText && (
            <button onClick={() => setSearchText("")} className="text-gray-500">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Recommended Leaders */}
        <div className="border-[1px] rounded-xl h-[35%] py-1 px-2 flex flex-col">
          <p className="font-worksans font-semibold text-base">Recommended Leaders To Follow</p>
          <div className="flex flex-col gap-2">
            {[{ name: "Jane Cooper", username: "@Jcooper", img: jane }, { name: "Dan Randall", username: "@dan101", img: dan }, { name: "Emily Shelby", username: "@emil_y", img: emily }].map((user, index) => (
              <div key={index} className="flex items-center gap-2 w-full">
                <img src={user.img} className="h-10 w-10 rounded-full" alt={user.name} />
                <div className="flex flex-col justify-center">
                  <p className="font-wg font-semibold">{user.name}</p>
                  <p className="font-wg font-semibold text-[#666666] text-sm">{user.username}</p>
                </div>
                <button className="font-wg font-semibold bg-[#1FA1FF] ml-auto text-sm text-white border-[0.5px] border-[#1FA1FF] px-2 py-1 rounded-full hover:bg-white hover:text-[#1FA1FF] transition duration-200 ease-in-out">
                  Follow
                </button>
              </div>
            ))}
          </div>
          <p className="font-worksans text-xs underline text-[#FF1F01] cursor-pointer">Show more</p>
        </div>

        {/* Viral Questions */}
        <div className="border-[1px] rounded-xl h-[60%] py-2 px-3 flex flex-col overflow-auto">
          <p className="font-worksans font-semibold text-base mb-2">Viral Questions</p>
          {questions.map((q, index) => (
            <div key={index} className="flex items-start gap-3 bg-gray-100 p-3 rounded-lg mb-2">
              <img src={q.image} alt={q.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-sm">{q.name}</h3>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{q.points}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">{q.question}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feeds;
