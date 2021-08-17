import "./Blog.css";

const Blog = (props) => {
  const blogData = props.blogData;
  console.log(blogData);

  return (
    <div>
      {blogData.map((blog) => {
        return (
          <div className="blog">
            <h3>{blog.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
