import { useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollTarget, setScrollTarget] = useState(null);

  const navItems = [
    { name: 'COMMUNITY', slug: 'community' },
    { name: 'ABOUT', slug: 'about' },
    { name: 'CONTACT US', slug: 'contact-us' },
    { name: 'LEADERBOARD', slug: '/leaderboard' },
  ];

  const rightNavItems = [
    {
      className: "border-[#FF1F01] border-2 text-black px-4 py-2 rounded-full text-sm font-yatra hover:bg-[#FF1F01] hover:border-2 transition hover:text-[#FFFFFFE0] duration-100 transition-discrete ease-in-out",
      name: 'SIGN IN',
      slug: '/signin',
      active: !user,
    },
    {
      className: "bg-[#FF1F01] border-2 border-[#FF1F01] text-[#FFFFFFE0] px-4 py-2 rounded-full text-sm font-yatra flex hover:bg-white hover:border-2 hover:text-[#FF1F01] hover:border-[#FF1F01] transition duration-100 transition-discrete ease-in-out",
      name: 'SIGN UP',
      slug: '/signup',
      active: !user,
    },
  ];

  const handleNavigation = (slug) => {
    if (['about', 'community', 'contact-us'].includes(slug)) {
      if (location.pathname === '/') {
        document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        setScrollTarget(slug);
        navigate('/');
      }
    } else {
      navigate(slug);
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && scrollTarget) {
      setTimeout(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
        setScrollTarget(null);
      }, 300);
    }
  }, [location.pathname, scrollTarget]);

  return (
    <nav className="relative bg-[#FFFFFFE0] border-b border-black w-screen">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <ul className="hidden lg:flex gap-6">
          <li><Link to="/" className="text-xl font-chunkfive">InstEd</Link></li>
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavigation(item.slug)}
                className="text-sm hover:text-base transition duration-1000 pr-3 hover:pr-0 transition-discrete ease-in-out font-yatra"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-4">
          {rightNavItems.map((item) =>
            item.active ? (
              <Link key={item.name} to={item.slug} className={item.className}>
                {item.name}
              </Link>
            ) : null
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
