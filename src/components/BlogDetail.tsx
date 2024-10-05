import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Import remark-gfm for GitHub flavored markdown
import blogData from '../blogs/blogData.json';
import './blogDetail.css';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const blog = blogData.find((blog) => blog.id === id);

    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    } else {
      setTitle('Blog post not found');
      setContent('Sorry, the blog post you are looking for does not exist.');
    }
  }, [id]);

  return (
    <div className="blog-detail">
      <h2>{title}</h2>
      <Link to="/blog" className="back-link">Back to All Posts</Link>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown> {/* Use remark-gfm plugin */}
    </div>
  );
};

export default BlogDetail;
