import React from "react";

const Footer = ({ sections, branding, copyright }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-8 bg-white text-gray-800">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  {link.label}
                  {link.badge && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded">
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-between items-center border-t border-gray-200 pt-8 mobile:flex-col mobile:items-start mobile:px-5 lg:flex-row">
        <div className="flex items-center space-x-2">
          {branding.icon}
          <p className="text-gray-900 font-bold">{branding.name}</p>
        </div>
        <p className="text-gray-500 text-sm mt-2 mobile:text-sm lg:text-lg">
          {copyright}
        </p>
      </div>
    </div>
  );
};

export default Footer;
