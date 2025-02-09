import React, { useState } from "react";
import dan from "../assets/images/dan.png";
import jane from "../assets/images/jane.png";
import verify from "../assets/images/verify.png";
import emily from "../assets/images/emily.png";
import { Search, X } from "lucide-react";

const Feeds = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bg-[#EBEBEB] flex w-screen h-[91.2vh]">
      <div className="h-full bg-white w-[15%]"></div>
      <div className="h-full bg-[#EBEBEB] w-[60%] flex flex-col p-5 gap-6.5">
        <div className="h-[30%] w-full bg-white rounded-[10.5px]">

        </div>
        <div className="h-[67%] w-full bg-white rounded-[10.5px]">

        </div>
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
                <div className="flex items-center gap-2 w-full">
                    <img src={jane} className="h-10 w-10"/>
                    <div className="flex flex-col justify-center">
                        <p className="font-wg font-semibold">Jane Cooper</p>
                        <p className="font-wg font-semibold text-[#666666] text-sm">@Jcooper</p>
                    </div> 
                    <button className='font-wg font-semibold bg-[#1FA1FF] ml-auto text-sm text-white border-[0.5px] border-[#1FA1FF] px-2 py-1 rounded-full flex hover:bg-white hover:border-[0.5px] hover:text-[#1FA1FF] hover:border-[#1FA1FF] transition duration-200 ease-in-out'>
              Follow
            </button>
                </div>
                <div className="flex items-center gap-2 w-full">
                    <img src={dan} className="h-10 w-10"/>
                    <div className="flex flex-col justify-center"><p className="font-wg font-semibold">Dan Randall</p><p className="font-wg font-semibold text-[#666666] text-sm">@dan101</p></div>
                    <button className='font-wg font-semibold bg-[#1FA1FF] ml-auto text-sm text-white border-[0.5px] border-[#1FA1FF] px-2 py-1 rounded-full flex hover:bg-white hover:border-[0.5px] hover:text-[#1FA1FF] hover:border-[#1FA1FF] transition duration-200 ease-in-out'>
              Follow
            </button>
                </div>
                <div className="flex items-center gap-2 w-full">
                    <img src={emily} className="h-11 w-11"/>
                    <div className="flex flex-col justify-center"><p className="font-wg font-semibold">Emily Shelby</p><p className="font-wg font-semibold text-[#666666] text-sm">@emil_y</p></div>
                    <button className='font-wg font-semibold bg-[#1FA1FF] ml-auto text-sm text-white border-[0.5px] border-[#1FA1FF] px-2 py-1 rounded-full flex hover:bg-white hover:border-[0.5px] hover:text-[#1FA1FF] hover:border-[#1FA1FF] transition duration-200 ease-in-out'>
              Follow
            </button>
                </div>
            </div>
            <p className="font-worksans text-xs underline text-[#FF1F01]">Show more</p>
        </div>
        <div className="border-[1px] rounded-xl h-[60%] py-1 px-2 flex flex-col">
            <p className="font-worksans font-semibold text-base">Viral Questions</p>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
