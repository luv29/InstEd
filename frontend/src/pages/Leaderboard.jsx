import React from "react";
import FirstImg from "../assets/images/1.jpeg";
import SecondImg from "../assets/images/2.jpeg";
import ThirdImg from "../assets/images/3.jpeg";
import First from "../assets/images/1st.png";
import Second from "../assets/images/2nd.png"; 
import Third from "../assets/images/3rd.png";

const Leaderboard = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center bg-gradient-to-b from-orange-600 to-yellow-400 text-white text-center p-6 min-h-screen">
      <h1 className="text-5xl font-extrabold uppercase tracking-widest">
        Leaderboard
      </h1>

      <div className="flex justify-center items-center w-full">
        <div className="text-center flex flex-col justify-center items-center mt-5.5">
          <img
            src={SecondImg}
            alt="Emily Rossouw"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <p className="text-lg font-bold">Derek Jackson</p>
          <img
            src={Second}
            alt="Top 1 Podium"
            className="w-32 h-46"
          />
        </div>

        <div className="text-center flex flex-col justify-center items-center">
          <img
            src={FirstImg}
            alt="Derek Jackson"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <p className="text-lg font-bold">Emily Rossouw</p>
          <img
            src={First}
            alt="Top 2 Podium"
            className="w-32 h-52"
          />
        </div>

        <div className="text-center flex flex-col justify-center items-center mt-10">
          <img
            src={ThirdImg}
            alt="Eric Matthews"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <p className="text-lg font-bold">Eric Matthews</p>
          <img
            src={Third}
            alt="Top 3 Podium"
            className="w-32 h-42"
          />
        </div>
      </div>

      <div className="overflow-x-auto w-[60vw]">
        <table className="w-full mx-auto border-collapse text-lg">
          <thead>
            <tr className="bg-black text-white uppercase tracking-wider text-xl">
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Solved</th>
              <th className="py-3 px-4">Accuracy</th>
              <th className="py-3 px-4">Points</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-black font-semibold">
              <td className="py-2 px-4">4</td>
              <td className="py-2 px-4">John Quick</td>
              <td className="py-2 px-4">85</td>
              <td className="py-2 px-4">88.4%</td>
              <td className="py-2 px-4">1856</td>
            </tr>
            <tr className="bg-white text-black font-semibold">
              <td className="py-2 px-4">5</td>
              <td className="py-2 px-4">Matt Murdock</td>
              <td className="py-2 px-4">84</td>
              <td className="py-2 px-4">86.0%</td>
              <td className="py-2 px-4">1803</td>
            </tr>
            <tr className="bg-white text-black font-semibold">
              <td className="py-2 px-4">6</td>
              <td className="py-2 px-4">Shaquille Oatmeal</td>
              <td className="py-2 px-4">80</td>
              <td className="py-2 px-4">83.4%</td>
              <td className="py-2 px-4">1766</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
