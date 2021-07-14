import "./card.css";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import React from "react";

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
          <a href="/">{data.published[0]}</a>
        </wrapper>
      );

    return (
      <div className="mainBlogCard">
        <div className="cardpart">
          <div className="publishedIn">
            <img src={data.authorIcon} alt="" className="authorIcon" />
            <span>
              <a href="/">{data.author}</a>
              {publishData}
            </span>
          </div>
          <h3>
            <a href="/">{data.title}</a>
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
