import appicon from "../assets/appicon.png";
import profileicon from "../assets/profile.png";
import burgericon from "../assets/burgerIcon.png";

const Navbar = () => {
  
  const linkStyles ="font-medium text-gray-700 hover:text-gray-900 transition font-medium";

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-center items-center gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src={appicon} alt="logo" className="h-8 w-8" />
              <span className="ml-2 text-lg font-semibold text-gray-800">
                Grow
              </span>
            </div>

            {/* Navbar links */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className={linkStyles}
              >
                Home
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 transition font-medium">
                  Products
                </button>
              </div>
              <a
                href="#"
                className={linkStyles}
              >
                Resources
              </a>
              <a
                href="#"
                className={linkStyles}
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-4">
            <img
              src={profileicon}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <img
              src={burgericon}
              alt="burger icon"
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
