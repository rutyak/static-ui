import React from "react";
import appicon from "../assets/appicon.png";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-8 bg-white text-gray-800">
        {/* Product Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Product</h3>
          <ul className="space-y-2">
            <li>Overview</li>
            <li>Features</li>
            <li>
              Solutions{" "}
              <span className="ml-2 px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded">
                New
              </span>
            </li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Use Cases Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Use cases</h3>
          <ul className="space-y-2">
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS centre</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Social</h3>
          <ul className="space-y-2">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="flex w-full justify-between items-center border-t border-gray-200 pt-8 mobile:flex-col mobile:items-start mobile:px-5 lg:flex-row">
        <div className="flex items-center space-x-2">
          <img src={appicon} alt="appicon" className="w-10 h-10" />
          <p className="text-gray-900 font-bold">Grow</p>
        </div>
        <p className="text-gray-500 text-sm mt-2 mobile:text-sm lg:text-lg">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
