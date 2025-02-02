function Navbar() {

  return (
    <nav className="relative bg-[#FFFFFFE0] border-b border-black">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
      
        <ul className="hidden lg:flex gap-6">
          <li><a href="#" className="text-xl font-chunkfive">InstEd</a></li>
          <li><a href="#" className="text-sm font-yatra">COMMUNITY</a></li>
          <li><a href="#" className="text-sm font-yatra">ABOUT</a></li>
          <li><a href="#" className="text-sm font-yatra">CONTACT US</a></li>
          <li><a href="#" className="text-sm font-yatra">LEADERBOARD</a></li>
        </ul>

        <div className="hidden lg:flex gap-4">
          <a href="#" className="border-[#FF1F01] border-2 text-black px-4 py-2 rounded-full text-sm font-yatra">SIGN IN</a>
          <a href="#" className="bg-[#FF1F01] border-2 border-[#FFFFFFE0] text-black px-4 py-2 rounded-full text-sm font-yatra flex">SIGN UP</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
