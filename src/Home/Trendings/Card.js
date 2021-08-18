import "./card.css";
import { Link } from "react-router-dom";

const TrendingCard = (props) => {
  const data = props.data;

  const publishData = () => {
    if (data.publishedIn.length > 0)
      return (
        <wrapper>
          <span>in</span>
          <Link to="/">{data.publishedIn}</Link>
        </wrapper>
      );
  };

  var isStarred = () => {
    if (data.isStarred) return <span className="star"> ★ </span>;
    else return;
  };

  return (
    <div className="trendingCard">
      <div className="numbering">{"0" + data.rank}</div>
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
        <span className="date">
          {data.date.substr(0, data.date.length - 5)}
        </span>
        <span className="dot">·</span>
        <span className="length">{data.readTime} min read</span>
        <span className="length">{isStarred()}</span>
      </div>
    </div>
  );
};

export default TrendingCard;
