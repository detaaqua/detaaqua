import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './blog.css';
import blogData from '../blogs/blogData.json'; // Importing the JSON file

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    // Load blogs from the JSON file
    setBlogs(blogData);
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Blog</h2> {/* Centered blog title */}
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.date}</p>
            <Link to={`/blog/${blog.id}`}>
              <button>Show</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
