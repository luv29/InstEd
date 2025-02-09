import { AlignLeft } from 'lucide-react';
import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

function SignUpInterests() {
  const allInterests = ['Life Science', 'Human Body', 'Plants and Microbiology',
    'Biotechnology', 'Genetics', 'Motion', 'Energy', 'Electricity',
    'Modern Physics', 'Atoms', 'Chemical Reactions',
    'Organic and Inorganic Chemistry', 'Thermodynamics & Kinetics',
    'Acids and Bases', 'Ecology', 'Climate change',
    'Pollution & Waste Management', 'Sustainability',
    'Problem-Solving Techniques', 'Mathematical Reasoning & IQ Tests',
    'Arithmetic (Fractions, Decimals, Ratios, Percentages)',
    'Word based problems', 'Algebra & Linear Equations', 'Trigonometry',
    'Calculus', 'Differential Equations', 'Discrete Mathematics',
    'Data Analysis', 'Basic Statistics', 'Probability',
    'Computer Operations & MS Office', 'C', 'C++', 'Scratch', 'Python',
    'JAVA', 'Backend', 'Full-Stack Development (Frontend & Backend)',
    'Databases (SQL, NoSQL) & APIs', 'Mobile App Development',
    'Object-Oriented Programming', 'Web Development',
    'Data Structures & Algorithms', 'AI & Machine Learning',
    'Cybersecurity & Ethical Hacking', 'History', 'Geography',
    'Civics & Political Science', 'Psychology & Sociology', 'Economics',
    'Communication & Soft Skills', 'Entrepreneurship']; 
  const [interests, setInterests] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState('');
  const [rating, setRating] = useState(0);
  const { toast } = useToast()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);


  const handleAddInterest = () => {
    if (selectedInterest && rating > 0) {
      let exists = false;
      const updatedInterests = interests.map(interest => {
        if (interest.name === selectedInterest) {
          exists = true;
          return { ...interest, rating };
        }
        return interest;
      });

      if (!exists) {
        updatedInterests.push({ name: selectedInterest, rating });
      }

      setInterests(updatedInterests);
      setSelectedInterest('');
      setRating(0);
    }
  };

  const handleRemoveInterest = (interestToRemove) => {
    setInterests(interests.filter(interest => interest.name !== interestToRemove));
  };

  const handleSubmit = async () => {
    const interestArray = allInterests.map(interest => {
      const matchedInterest = interests.find(item => item.name === interest);
      return matchedInterest ? matchedInterest.rating : 0;
    });

    try {
      setIsLoading(true)
      const response = await axios.post('/api/user/sign-up/interests', { interests: interestArray });
      if(response.data.success) {
        toast({
          title: "Interest added Successfully!",
        })
        navigate('/signup/info')
      } else {
        toast({
          title: response.data.message,
        })
        navigate('/')
      }
    } catch (error) {
      toast({
        title: "Error Adding Intereset"
      })
      console.error("Error submitting interests:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center  p-6 w-full max-w-lg">
      <h2 className="font-worksans text-2xl font-semibold mb-6 text-[#3C3C3C]">Sign Up Now</h2>
      
      <select
        value={selectedInterest}
        onChange={(e) => setSelectedInterest(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
        <option value="">Select an Interest</option>
        {allInterests.map((interest, index) => (
          <option key={index} value={interest}>{interest}</option>
        ))}
      </select>

      <div className="mb-4 w-full">
        <span className='text-xl'>Rate this Interest:</span>
        <div className="flex mt-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => setRating(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={handleAddInterest}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-4">
        Add Interest
      </button>

      <div className="w-full mt-6">
        <h3 className="font-semibold mb-2">Selected Interests</h3>
        <ul className="space-y-2 overflow-auto max-h-40">
          {interests.map((interest, index) => (
            <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
              <span>{interest.name}</span>
              <div className="flex">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-xl ${starIndex < interest.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleRemoveInterest(interest.name)}
                className="text-red-500 text-lg ml-4">
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSubmit}
        className='mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600'>
        {!isLoading ? <>Submit</> : <>Please Wait....</>}
      </button>
    </div>
  );
}

export default SignUpInterests;
