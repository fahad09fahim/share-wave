const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a>Media</a>
      </li>
      <li>
        <a>Message</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Login</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-0 md:px-12">
      <div className="navbar-start">
        {/* small device navLinks */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        {/* logo */}
        <h2 className="text-xl font-semibold ">
          Share W<span className="text-red-700">a</span>
          <span className="text-green-700">v</span>
          <span className="text-blue-700">e</span>
        </h2>
      </div>
      {/* large device navLinks */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
