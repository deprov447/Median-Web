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

  var publishData;
  if (data.publishedIn.length > 0)
    publishData = (
      <wrapper>
        <span>in</span>
        <Link to="/">{data.publishedIn[0]}</Link>
      </wrapper>
    );

  return (
    <div className="mainBlogCard">
      <div className="cardpart">
        <div className="publishedIn">
          <img src={data.author.image} alt="" className="authorIcon" />
          <span>
            <Link to={`/author/${data.author.id}`}>{data.author.name}</Link>
            {publishData}
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
        <span className="length">{data.readTime}</span>
        <span className="dot">·</span>
        <span className="tag">
          <a href="/">tag</a>
        </span>
        {/* <span className="bookmark" onClick={() => this.toggleBookmarked()}>
          {this.state.BookmarkIcon}
        </span> */}
      </div>
    </div>
  );
};

export default MainBlogCard;
