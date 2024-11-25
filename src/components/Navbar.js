import profileicon from "../assets/profile.png";
import burgericon from "../assets/burgerIcon.png";
import closeIcon from "../assets/closeIcon.png";
import { useState } from "react";
import { Appicon, DropDownIcon } from "../assets/Icons";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [dropdownToggle, setDropdownToggle] = useState(null);

  const toggleDropdown = (dropdown) => {
    setDropdownToggle(dropdownToggle === dropdown ? null : dropdown);
  };

  const linkStyles = "font-medium text-gray-700 hover:text-gray-900 transition";

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            <Appicon />
            <span className="ml-2 text-2xl font-semibold text-gray-800">
              Grow
            </span>
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className={linkStyles}>
              Home
            </a>
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("Products")}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium"
              >
                <span>Products</span>
                <DropDownIcon />
              </button>
            </div>
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("Resources")}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium"
              >
                <span>Resources</span>
                <DropDownIcon />
              </button>
            </div>
            <a href="/" className={linkStyles}>
              Pricing
            </a>
          </div>
        </div>

        {/* Profile Icon */}
        <div className="hidden md:flex items-center space-x-4">
           <img
             src={profileicon}
             alt="profile-icon"
             className="w-10 h-10"
           />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <img
            src={menuToggle ? closeIcon : burgericon}
            alt="menu icon"
            onClick={() => setMenuToggle(!menuToggle)}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuToggle && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <a
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("Products")}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <span>Products</span>
              <DropDownIcon />
            </button>
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("Resources")}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <span>Resources</span>
              <DropDownIcon />
            </button>
          </div>
          <a
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Pricing
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
