import React from "react";
import "./Blog.css";
import { assets } from "../../assets/assets";

const Blog = () => {
  const blogs = [
    {
      title: "How Robotics is Shaping the Future",
      description:
        "Discover how robotics is revolutionizing industries and creating new opportunities.",
      image: assets.Robotics_1,
    },
    {
      title: "The Rise of AI in Everyday Life",
      description:
        "From smart assistants to self-driving cars, AI is becoming a part of our daily routines.",
      image: assets.AI_1,
    },
    {
      title: "Web Development Trends in 2025",
      description:
        "Explore the latest tools, frameworks, and best practices in modern web development.",
      image: assets.Web_1,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">📰 Latest Blog Posts</h2>
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow h-100">
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{blog.title}</h5>
                <p className="card-text text-muted">{blog.description}</p>
                <button className="btn btn-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
