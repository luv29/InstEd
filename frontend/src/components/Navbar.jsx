import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-[#FFFFFFE0] border-b border-black">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6">
          <li><a href="#" className="text-xl font-chunkfive">InstEd</a></li>
          <li><a href="#" className="text-sm font-yatra hover:text-lg hover:transition hover:duration-1000">COMMUNITY</a></li>
          <li><a href="#" className="text-sm font-yatra">ABOUT</a></li>
          <li><a href="#" className="text-sm font-yatra">CONTACT US</a></li>
          <li><a href="#" className="text-sm font-yatra">LEADERBOARD</a></li>
        </ul>

        {/* Sign In / Sign Up (Desktop) */}
        <div className="hidden lg:flex gap-4">
          <a href="#" className="border-[#FF1F01] border-2 text-black px-4 py-2 rounded-full text-sm font-yatra">SIGN IN</a>
          <a href="#" className="bg-[#FF1F01] border-2 border-[#FFFFFFE0] text-black px-4 py-2 rounded-full text-sm font-yatra flex">SIGN UP</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col space-y-1">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white border-t border-black">
          <li><a href="#" className="text-sm font-yatra">COMMUNITY</a></li>
          <li><a href="#" className="text-sm font-yatra">ABOUT</a></li>
          <li><a href="#" className="text-sm font-yatra">CONTACT US</a></li>
          <li><a href="#" className="text-sm font-yatra">LEADERBOARD</a></li>
          <li><a href="#" className="bg-[#FF1F01] text-black px-4 py-2 rounded-full text-sm font-yatra">SIGN IN</a></li>
          <li><a href="#" className="bg-[#FF1F01] text-black px-4 py-2 rounded-full text-sm font-yatra">SIGN UP</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
