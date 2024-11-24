import appicon from "../assets/appicon.png";
import profileicon from "../assets/profile.png";
import burgericon from "../assets/burgerIcon.png";
import { useState } from "react";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false); // Mobile menu state
  const [dropdownToggle, setDropdownToggle] = useState(null); // Dropdown toggle state

  const toggleDropdown = (dropdown) => {
    setDropdownToggle(dropdownToggle === dropdown ? null : dropdown);
  };

  const linkStyles =
    "font-medium text-gray-700 hover:text-gray-900 transition";

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            <img src={appicon} alt="logo" className="h-8 w-8" />
            <span className="ml-2 text-2xl font-semibold text-gray-800">
              Grow
            </span>
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className={linkStyles}>
              Home
            </a>
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("Products")}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium"
              >
                <span>Products</span>
                <svg
                  className="w-4 h-4 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownToggle === "Products" && (
                <div className="absolute mt-2 bg-white rounded-lg shadow-lg z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Product 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Product 2
                  </a>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("Resources")}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium"
              >
                <span>Resources</span>
                <svg
                  className="w-4 h-4 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownToggle === "Resources" && (
                <div className="absolute mt-2 bg-white rounded-lg shadow-lg z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Resource 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Resource 2
                  </a>
                </div>
              )}
            </div>
            <a href="#" className={linkStyles}>
              Pricing
            </a>
          </div>
        </div>

        {/* Profile Icon */}
        <div className="hidden md:flex items-center space-x-4">
          <img
            src={profileicon}
            alt="profile"
            className="h-11 w-11 rounded-full"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <img
            src={menuToggle ? " " : burgericon}
            alt="menu icon"
            onClick={() => setMenuToggle(!menuToggle)}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuToggle && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("Products")}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <span>Products</span>
              <svg
                className={`w-4 h-4 transform ${
                  dropdownToggle === "Products" ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownToggle === "Products" && (
              <div className="ml-4 mt-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Product 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Product 2
                </a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("Resources")}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <span>Resources</span>
              <svg
                className={`w-4 h-4 transform ${
                  dropdownToggle === "Resources" ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownToggle === "Resources" && (
              <div className="ml-4 mt-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Resource 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Resource 2
                </a>
              </div>
            )}
          </div>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Pricing
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
