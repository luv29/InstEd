import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  const { toast } = useToast()
  const navigate = useNavigate()
  const [userData, setUserData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    // if (!user) {
    //   toast({
    //     title: "Please LogIn first!",
    //   })
    //   navigate('/')
    //   return;
    // }
    try {
      const fetchUserData = async () => {
        setIsLoading(true)
        const response = await axios.get('/api/user/get-user',)

        if(!response.data.success) {
          toast({
            title: response.data.message,
          })
        } else {
          setUserData(response.data.data)
        }
      }
      console.log("Hi")
      fetchUserData()
    } catch (error) { 
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  if(isLoading) {
    return <></>
  }

  return (
    <div className="h-[91vh] flex flex-col bg-gradient-to-b from-red-500 to-gray-200 overflow-hidden">

      <div className="flex-grow flex justify-center items-center">
        <div className="w-[90%] h-[85%] bg-white p-9 rounded-3xl shadow-lg flex space-x-10">

          <div className="flex flex-col w-[25%]">
            <div
              className="w-full h-[66%] bg-gray-300 bg-cover bg-center"
              style={{ backgroundImage: `url(${userData.profileImage})` }}
            >
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-light text-lg">({userData.username})</p>
              <div className="mt-2 flex flex-col items-center justify-center space-y-0">
                <p className="font-bold">BIO</p>
                <p className="text-center text-gray-600 px-4 space-y-0">{userData.bio}</p>
              </div>

              <div className="flex space-x-8 mt-4">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-red-500 font-semibold text-2xl"> {userData.followers} </p>
                  <span className="text-black font-bold">FOLLOWERS</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-semibold text-2xl"> {userData.following} </p>
                  <span className="text-black font-bold">FOLLOWING</span>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col h-full w-[40%] space-y-3">
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-3 items-center text-lg font-mono">
                <span>FULL NAME:</span>
                <p> {userData.firstname} {userData.lastname}</p>
              </div>
              <div className="flex space-x-3 items-center text-lg font-mono">
                <span>EDUCATION LEVEL:</span>
                <p> {userData.educationLevel}</p>
              </div>
              <div className="flex space-x-3 items-center text-lg font-mono">
                <span>USER EXPERIENCE:</span>
                <p> {userData.userexperience} </p>
              </div>
              <div className="bg-red-500 border-1 border-black px-3 py-1 rounded-lg text-lg font-bold inline-block">
                DOUBTS SOLVED: {userData.doubtssolved}
              </div>
            </div>
            <div className="p-4 h-full border-1 border-black rounded-lg shadow-md">
              <p className="font-bold text-xl">RECENTS</p>
              <div className="space-y-3 mt-4">
                <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
                <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
                <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>



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
