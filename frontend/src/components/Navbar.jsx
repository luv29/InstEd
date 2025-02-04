import { Link, useNavigate } from 'react-router-dom';



function Navbar() {

  const navigate = useNavigate();

  const navItems = [
    {
      name: 'COMMUNITY',
      slug: '/community',
      active: true,
    },
    {
      name: 'ABOUT',
      slug: '/about-us',
      active: true,
    },
    {
      name: 'CONTACT US',
      slug: '/contact-us',
      active: true,
    },
    {
      name: 'LEADERBOARD',
      slug: '/leaderboard',
      active: true,
    },
  ]
  const rightNavItems = [
    {
      className: "border-[#FF1F01] border-2 text-black px-4 py-2 rounded-full text-sm font-yatra",
      name: 'SIGN IN',
      slug: '/signin',
      active: true,
    },
    {
      className: "bg-[#FF1F01] border-2 border-[#FFFFFFE0] text-black px-4 py-2 rounded-full text-sm font-yatra flex",
      name: 'SIGN UP',
      slug: '/signup',
      active: true,
    },
  ]



  return (
    <nav className="relative bg-[#FFFFFFE0] border-b border-black">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">

        <ul className="hidden lg:flex gap-6">
          <li><Link to="/" className="text-xl font-chunkfive">InstEd</Link></li>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <Link
                  to={item.slug}
                  className="text-sm font-yatra"
                >
                  {item.name}
                </Link>
              </li>
            ) : null
          )}
        </ul>

        <div className="hidden lg:flex gap-4">
          {rightNavItems.map((item) =>
            item.active ? (
              <Link
                key={item.name}
                to={item.slug}
                className={item.className}
              >
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
