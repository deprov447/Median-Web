import "./card.css";
// import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const RANDOMBLOG_QUERY = gql`
  query {
    randomBlog {
      id
      title
      author {
        name
        id
        image
      }
      content
      publishedIn
      date
      readTime
      rank
      isStarred
      tags
    }
  }
`;

var MainBlogCard = (props) => {
  var { data, loading, error } = useQuery(RANDOMBLOG_QUERY);

  if (loading) {
    return <div>Loading</div>;
  }

  console.log(data);
  console.log(error);

  // toggleBookmarked = () => {
  //   this.setState(() => {
  //     if (this.state.isBookmarked === true) {
  //       return {
  //         isBookmarked: !this.state.isBookmarked,
  //         BookmarkIcon: <BsBookmark />,
  //       };
  //     }
  //     return {
  //       isBookmarked: !this.state.isBookmarked,
  //       BookmarkIcon: <BsBookmarkFill />,
  //     };
  //   });
  // };

  data = data.randomBlog;

  const publishData = () => {
    if (data.publishedIn.length > 0)
      return (
        <wrapper>
          <span>in</span>
          <Link to="/">{data.publishedIn}</Link>
        </wrapper>
      );
  };

  const renderTags = () => {
    if (data.tags.length > 0)
      return (
        <span>
          <span className="dot">·</span>
          <span className="tag">
            <a href="/">data.tags[0]</a>
          </span>
        </span>
      );
  };

  const renderStars = () => {
    if (data.isStarred) return <span className="star"> ★ </span>;
    else return;
  };

  return (
    <div className="mainBlogCard">
      <div className="cardpart">
        <div className="publishedIn">
          <img src={data.author.image} alt="" className="authorIcon" />
          <span>
            <Link to={`/author/${data.author.id}`}>{data.author.name}</Link>
            {publishData()}
          </span>
        </div>
        <h3>
          <Link to={`/blog/${data.id}`}>{data.title}</Link>
        </h3>
        <p className="content">
          {data.content.substr(0, 150)} {/* Shouldn't show incomplete words */}
        </p>
        <span className="date">
          {data.date.substr(0, data.date.length - 5)}
        </span>
        <span className="dot">·</span>
        <span className="length">{data.readTime} min read</span>
        {renderTags()}
        {renderStars()}
        {/* <span className="bookmark" onClick={() => this.toggleBookmarked()}>
          {this.state.BookmarkIcon}
        </span> */}
      </div>
      <div className="imagePart">
        {/* Todo: add image to blog schema */}
        <img
          src="https://miro.medium.com/fit/c/200/134/1*lzj4TgE2Og4deBavBl8BFA.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MainBlogCard;
