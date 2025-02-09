import React, { useState } from "react";
import dan from "../assets/images/dan.png";
import jane from "../assets/images/jane.png";
import emily from "../assets/images/emily.png";
import { Search, X } from "lucide-react";

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
      <div className="h-full bg-[#EBEBEB] w-[60%] flex flex-col p-5 gap-6.5">
        <div className="h-[30%] w-full bg-white rounded-[10.5px] p-4">
          <div className="flex items-center gap-3 border-b pb-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <input
              type="text"
              placeholder="What is your question?"
              className="flex-grow bg-transparent outline-none text-gray-700"
            />
            <button className="bg-red-500 text-white text-sm px-4 py-1 rounded-full">Post</button>
          </div>
        </div>
        <div className="h-[67%] w-full bg-white rounded-[10.5px]"></div>
      </div>
      <div className="h-full bg-white w-[25%] p-5 flex flex-col gap-y-5">
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
          <p className="font-worksans text-xs underline text-[#FF1F01]">Show more</p>
        </div>
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
