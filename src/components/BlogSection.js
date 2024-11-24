import React from "react";
import image1 from "../assets/blogImage1.png";
import image2 from "../assets/blogImage2.png";
import image3 from "../assets/blogImage3.png";
import user1 from "../assets/candisPreofileIcon.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

// Reusable BlogCard Component
const BlogCard = ({
  image,
  category,
  title,
  description,
  authorImg,
  authorName,
  date,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 rounded-lg object-cover"
      />
      <p className="text-purple-600 font-semibold text-sm mt-4">{category}</p>
      <h3 className="text-lg font-bold text-gray-800 mt-2">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
      <div className="flex items-center mt-4">
        <img
          src={authorImg}
          alt={authorName}
          className="w-8 h-8 rounded-full"
        />
        <div className="ml-2 text-sm text-gray-500">
          <p>{authorName}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

// Main BlogSection Component
const BlogSection = () => {
  // Data for blog posts
  const blogs = [
    {
      image: image1,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      authorImg: user1,
      authorName: "Olivia Rhye",
      date: "20 Jan 2024",
    },
    {
      image: image2,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      authorImg: user2,
      authorName: "Phoenix Baker",
      date: "19 Jan 2024",
    },
    {
      image: image3,
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      authorImg: user3,
      authorName: "Lane Steiner",
      date: "18 Jan 2024",
    },
  ];

  return (
    <div className="bg-white">
      {/* Blog Header */}
      <div className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
        <div>
          <h2 className="text-lg font-semibold text-purple-600">Our blog</h2>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">
            Latest blog posts
          </h1>
          <p className="text-gray-600 mt-2">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 mobile:hidden md:block">
          View all posts
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            category={blog.category}
            title={blog.title}
            description={blog.description}
            authorImg={blog.authorImg}
            authorName={blog.authorName}
            date={blog.date}
          />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-100 mt-12 py-14 px-6 text-center rounded-lg shadow flex flex-col gap-4">
        <div>
          <h2 className="text-3xl font-semibold font-sans text-gray-800">
            Start your free trial
          </h2>
          <p className="text-gray-600 mt-2">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>
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
