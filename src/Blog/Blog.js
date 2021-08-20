import { Link, useParams } from "react-router-dom";
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
  TiBookmark,
} from "react-icons/ti";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useQuery, gql } from "@apollo/client";
import MainBlogContent from "./MainBlogContent";

import "./Blog.css";
import TopBar from "./TopBar";

const BLOG_QUERY = gql`
  query something($id: ID!) {
    blog(id: $id) {
      author {
        id
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
    <div className="container mx-auto ">
      <h1 className="customContentWrapper">{blog.title}</h1>
      <h2 className="customContentWrapper">
        {() => {
          if (data.subheading) return data.subheading;
        }}
      </h2>
      <div className="customContentWrapper">
        <TopBar about={blog} />
        <MainBlogContent content={blog.content} />
      </div>
      {/* floating box for subscribe */}
      <div className="tagsAndStat customContentWrapper">
        <div className="tags">
          <ul>
            {blog.tags.map((tag) => {
              return <li>{tag}</li>;
            })}
          </ul>
        </div>
        <div className="stat">
          <span>
            <FaRegHeart className="buttons" /> <counts>{blog.claps}</counts>
            <FaRegComment className="buttons" /> <counts>{blog.tweets}</counts>
          </span>
          <span>
            <TiSocialTwitter />
            <TiSocialLinkedin />
            <TiSocialFacebook />
            <TiBookmark />
          </span>
        </div>
      </div>
      <hr className="customContentWrapper" />
      <div className="aboutAuthor customContentWrapper">
        <img src={blog.author.image} />
        <div className="aboutAuthorContent">
          <div className="writtenByHeading">Written by </div>
          <div className="name">
            <Link to={"/author/" + blog.author.id}>{blog.author.name}</Link>
          </div>
          <div className="about">{blog.author.about}</div>
        </div>
        <button className="follow">Follow</button>
        <button className="email">
          <AiOutlineMail />
        </button>
      </div>
      {/* MoreFromMedian */}
      {/* Footer */}
    </div>
  );
};

export default Blog;
