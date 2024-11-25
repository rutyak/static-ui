import React from "react";
import image1 from "../../assets/blogImage1.png";
import image2 from "../../assets/blogImage2.png";
import image3 from "../../assets/blogImage3.png";
import user1 from "../../assets/candisPreofileIcon.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import StartYourTrial from "./StarYourTrial";
import BlogCard from "./Blogcard";

const BlogSection = () => {
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
      <div className="flex justify-between items-center mb-12 max-w-7xl mx-auto mobile:px-5">
        <div>
          <h2 className="text-lg font-semibold text-purple-600">Our blog</h2>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mobile:mt-0 mobile:text-2xl lg:mt-2 lg:text-3xl">
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
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto mobile:px-5">
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

      <StartYourTrial/>
    </div>
  );
};

export default BlogSection;
