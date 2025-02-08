const ProfilePage = () => {
  return (
    <div className="h-[91vh] flex flex-col bg-gradient-to-b from-red-500 to-gray-200 overflow-hidden">

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center">
        {/* Profile Card */}
        <div className="w-[90%] h-[85%] bg-white p-9 rounded-3xl shadow-lg flex space-x-10">

          {/* Left Section: Profile */}
          <div className="flex flex-col w-[25%]">
            <div
              className="w-full h-[66%] bg-gray-300 bg-cover bg-center"
              style={{ backgroundImage: `url(#)` }}
            >
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-light text-lg">(USERNAME)</p>
              <div className="mt-2 flex flex-col items-center justify-center space-y-0">
                <p className="font-bold">BIO</p>
                <p className="text-center text-gray-600 px-4 space-y-0">Sncbshvbbskskskvs Vvjevevhvejhvhdvdvhjev</p>
              </div>

              <div className="flex space-x-8 mt-4">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-red-500 font-semibold text-2xl"> 25 </p>
                  <span className="text-black font-bold">FOLLOWERS</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-semibold text-2xl"> 40 </p>
                  <span className="text-black font-bold">FOLLOWING</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Section: Details */}
          <div className="flex flex-col h-full w-[40%] space-y-3">
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-3 items-center text-lg font-mono">
                <span>FULL NAME:</span>
                <p> Aaryan Singh</p>
              </div>
              <div className="flex space-x-3 items-center text-lg font-mono">
                <span>EDUCATION LEVEL:</span>
                <p> Undergraduate</p>
              </div>
              <div className="flex space-x-3 items-center text-lg font-mono">
                <span>USER EXPERIENCE:</span>
                <p> Novice</p>
              </div>
              <div className="bg-red-500 border-1 border-black px-3 py-1 rounded-lg text-lg font-bold inline-block">
                DOUBTS SOLVED: 115
              </div>
            </div>
            {/* Recents Section */}
            <div className="p-4 h-full border-1 border-black rounded-lg shadow-md">
              <p className="font-bold text-xl">RECENTS</p>
              <div className="space-y-3 mt-4">
                <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
                <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
                <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>



          {/* Sidebar: Stats */}
          <div className="flex flex-col space-y-4 w-[35%]">
            <div className="grid grid-cols-2 h-[65%] w-full p-4 gap-5">
              <div className="flex flex-col items-center border-1 border-gray-950 shadow-lg rounded-2xl">
                <span className="text-2xl font-bold ">TIER</span>

              </div>
              <div className="flex flex-col items-center border-1 border-gray-950 shadow-lg rounded-2xl">
                <span className="text-2xl font-bold ">XP</span>

              </div>
              <div className="flex flex-col items-center border-1 border-gray-950 shadow-lg rounded-2xl">
                <span className="text-2xl font-bold ">BADGES</span>

              </div>
              <div className="flex flex-col items-center border-1 border-gray-950 shadow-lg rounded-2xl">
                <span className="text-2xl font-bold ">RANK</span>

              </div>
            </div>
            <div className="p-4 h-[34%]">
              <div className="p-4 h-full bg-gray-700 text-white text-center rounded-lg font-bold">
                SUBJECTS OF INTEREST
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProfilePage;
