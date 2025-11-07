import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 className="text-5xl my-8 font-bold uppercase">{title}</h2>
      <div class="grid gap-6 grid-cols-3">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <div class="w-full h-[200px] bg-gray-300 mt-1 mb-3"></div>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default BlogList;
