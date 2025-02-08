import { FaAngleDown } from "react-icons/fa6";
import {
  FaRegUserCircle,
  FaSearch,
  FaPlus,
} from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function MessagingUI() {
  return (
    <div className="flex w-screen h-screen">
      {/* Sidebar */}
      <div className="lg:w-[20vw] w-[30vw] border-r-2 border-gray-300 h-full">
        {/* Username */}
        <div className="flex items-center space-x-3 border-b-2 border-b-gray-300 p-4">
          <FaRegUserCircle className="w-10 h-10" />
          <span className="font-yatra text-2xl">username</span>
          <span className=""><FaAngleDown /></span>
        </div>

        {/* Inbox Section */}
        <div className="mt-3 p-2">
          <div className="flex">
            <h2 className="font-chunkfive text-2xl">INBOX</h2>
            <div className=" flex ml-auto space-x-2">
              <FaSearch />
              <FaPlus />
            </div>
          </div>
          <div className="flex w-full space-x-2 mt-2">
            <button className="bg-red-500 w-[50%] font-[var(--font-family-outfit)] px-4 py-1 rounded-sm">Unread</button>
            <button className="bg-red-500 w-[50%] px-4 py-1 rounded-sm">Requests</button>
          </div>
        </div>

        {/* Chat List */}
        <div className="mt-1 max-h-[75.5vh] overflow-y-auto">
          {Array(9).fill(0).map((_, index) => (
            <div key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
              <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center">
                <span className="text-purple-700">○</span>
              </div>
              <div className="flex-1 space-y-0">
                <p >Name</p>
                <p className="text-gray-500 text-sm">Supporting line text...</p>
              </div>
              <span className="text-gray-500 text-sm">10 mins</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex-col flex items-center justify-center">
        <div className="text-center">
          <HiOutlinePencilSquare className="text-8xl m-auto font-light" />
          <h2 className="mt-2 text-xl">Your Messages</h2>
          <button className="p-1 bg-red-500 text-xs font-bold rounded-xl">Send Message</button>
        </div>
      </div>
    </div>
  );
}
