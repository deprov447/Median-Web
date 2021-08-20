import { useParams } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useQuery, gql } from "@apollo/client";

import "./Blog.css";

const BLOG_QUERY = gql`
  query something($id: ID!) {
    blog(id: $id) {
      author {
        name
        image
        about
      }
      publishedIn
      title
      readTime
      date
      isStarred
      tags
      content
      claps
      tweets
    }
  }
`;

const Blog = () => {
  var { id } = useParams();

  var { data, loading, error } = useQuery(BLOG_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <div>Loading</div>;
  }

  console.log(data);
  console.log(error);

  var blog = data.blog;

  return (
    <div className="container mx-auto">
      <h1>{blog.title}</h1>
      <h2>
        {() => {
          if (data.subheading) return data.subheading;
        }}
      </h2>
      <div className="authorBox">
        <img src={blog.author.image} />
        <div className="div">
          <div className="line1">
            <span className="name">{blog.author.name}</span>
            <button>Follow</button>
          </div>
          <div className="line2">
            <span className="dateAndTime">
              <span>{blog.date}</span>
            </span>
            {() => {
              if (blog.isStarred) return <AiFillStar />;
            }}
          </div>
        </div>
        <div className="icon">
          <TiSocialTwitter size="30px" />
          <TiSocialTwitter size="30px" />
          <TiSocialTwitter size="30px" />
          <TiSocialTwitter size="30px" />
        </div>
      </div>
      {/* Blog itself */}
      {/* floating box for subscribe */}
      <div className="tagsAndStat">
        <div className="tags">
          <ul>
            {blog.tags.map((tag) => {
              return <li>{tag}</li>;
            })}
          </ul>
        </div>
        <p>{blog.content}</p>
        <div className="stat">
          <span>
            <TiSocialTwitter className="buttons" />{" "}
            <counts>{blog.claps}</counts>
            <TiSocialTwitter className="buttons" />{" "}
            <counts>{blog.tweets}</counts>
          </span>
          <span>
            <TiSocialTwitter />
            <TiSocialTwitter />
            <TiSocialTwitter />
            <TiSocialTwitter />
          </span>
        </div>
      </div>
      <div className="aboutAuthor">
        <img src={blog.author.image} />
        <div className="aboutAuthorContent">
          <span className="writtenByHeading">Written by </span>
          <span className="name">{blog.author.name}</span>
          <span className="about">{blog.author.about}</span>
        </div>
        <button>Follow</button>
        <button>
          <AiOutlineMail />
        </button>
      </div>
      {/* MoreFromMedian */}
      {/* Footer */}
    </div>
  );
};

export default Blog;
