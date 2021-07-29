import "./card.css";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";

class MainBlogCard extends React.Component {
  state = {
    isBookmarked: false,
    BookmarkIcon: <BsBookmark />,
    //has to come from user
  };

  toggleBookmarked = () => {
    this.setState(() => {
      if (this.state.isBookmarked === true) {
        return {
          isBookmarked: !this.state.isBookmarked,
          BookmarkIcon: <BsBookmark />,
        };
      }
      return {
        isBookmarked: !this.state.isBookmarked,
        BookmarkIcon: <BsBookmarkFill />,
      };
    });
  };

  render() {
    var data = this.props.data;
    var publishData;
    if (data.published.length > 0)
      publishData = (
        <wrapper>
          <span>in</span>
          <Link to="/">{data.published[0]}</Link>
        </wrapper>
      );

    return (
      <div className="mainBlogCard">
        <div className="cardpart">
          <div className="publishedIn">
            <img src={data.authorIcon} alt="" className="authorIcon" />
            <span>
              <Link to={`/author/${data.author.id}`}>{data.author.name}</Link>
              {publishData}
            </span>
          </div>
          <h3>
            <Link to={`/blog/${data.id}`}>{data.title}</Link>
          </h3>
          <p className="content">
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem i
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
          <span className="bookmark" onClick={() => this.toggleBookmarked()}>
            {this.state.BookmarkIcon}
          </span>
        </div>
      </div>
    );
  }
}

export default MainBlogCard;
