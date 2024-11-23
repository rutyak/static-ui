import React from "react";

const BlogSection = () => {
  return (
    <div className="bg-white py-12 px-6">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <h2 className="text-lg font-semibold text-purple-600">Our blog</h2>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Latest blog posts</h1>
        <p className="text-gray-600 mt-2">
          Tools and strategies modern teams need to help their companies grow.
        </p>
        <button className="mt-4 text-purple-600 font-medium hover:underline">
          View all posts
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-lg shadow p-4">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Blog post 1"
            className="w-full h-48 rounded-lg object-cover"
          />
          <p className="text-purple-600 font-semibold text-sm mt-4">Design</p>
          <h3 className="text-lg font-bold text-gray-800 mt-2">
            UX review presentations
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            How do you create compelling presentations that wow your colleagues and
            impress your managers?
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://via.placeholder.com/32"
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-2 text-sm text-gray-500">
              <p>Olivia Rhye</p>
              <p>20 Jan 2024</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-lg shadow p-4">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Blog post 2"
            className="w-full h-48 rounded-lg object-cover"
          />
          <p className="text-purple-600 font-semibold text-sm mt-4">Product</p>
          <h3 className="text-lg font-bold text-gray-800 mt-2">
            Migrating to Linear 101
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. Here's how to get started.
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://via.placeholder.com/32"
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-2 text-sm text-gray-500">
              <p>Phoenix Baker</p>
              <p>19 Jan 2024</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 rounded-lg shadow p-4">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Blog post 3"
            className="w-full h-48 rounded-lg object-cover"
          />
          <p className="text-purple-600 font-semibold text-sm mt-4">
            Software Engineering
          </p>
          <h3 className="text-lg font-bold text-gray-800 mt-2">
            Building your API stack
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            The rise of RESTful APIs has been met by a rise in tools for creating,
            testing, and managing them.
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://via.placeholder.com/32"
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-2 text-sm text-gray-500">
              <p>Lane Steiner</p>
              <p>18 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-100 mt-12 py-8 px-6 text-center rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800">Start your free trial</h2>
        <p className="text-gray-600 mt-2">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
            Learn more
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
