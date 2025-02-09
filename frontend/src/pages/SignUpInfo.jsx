import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const SignUpInfo = () => {
  const { register, handleSubmit } = useForm();
  const [profileImage, setProfileImage] = useState(null);
  const { toast } = useToast()
  const navigate = useNavigate()


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("profileImage", data.profileImage[0]);
    formData.append("educationLevel", data.educationLevel);
    formData.append("bio", data.bio);

    try {
      const response = await axios.post("/api/user/sign-up/info", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if(response.data.success) {
        toast({
          title: "Interest added Successfully!",
        })
        navigate('/')
      } else {
        toast({
          title: response.data.message,
        })
        navigate('/')
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full max-w-lg">
      <h2 className="font-worksans text-2xl font-semibold mb-6 text-[#3C3C3C] self-start">
        Additional Info
      </h2>
      
      <div className="flex flex-col items-center mb-4">
        <label className="cursor-pointer">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center bg-gray-100">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500">Upload</span>
            )}
          </div>
          <input type="file" accept="image/*" className="hidden" {...register("profileImage")} onChange={handleImageChange} />
        </label>
      </div>

      <div className="w-full mb-4">
        <label className="block text-gray-700 font-medium mb-2">Educational Level</label>
        <select {...register("educationLevel")} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select Level</option>
          <option value="High School">High School</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Graduate">Graduate</option>
          <option value="Doctorate">Doctorate</option>
        </select>
      </div>

      <div className="w-full mb-4">
        <label className="block text-gray-700 font-medium mb-2">Bio (Optional)</label>
        <textarea {...register("bio")} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about yourself..." rows={3}></textarea>
      </div>
      
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
    </form>
  );
};

export default SignUpInfo;