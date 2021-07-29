import "./card.css";
import { Link } from "react-router-dom";

const TrendingCard = (props) => {
  const data = props.data;
  let publishData;
  if (data.published.length > 0)
    publishData = (
      <wrapper>
        <span>in</span>
        <Link to="/">{data.published[0]}</Link>
      </wrapper>
    );

  return (
    <div className="trendingCard">
      <div className="numbering">{data.rank}</div>
      <div className="cardpart">
        <div className="publishedIn">
          <img src={data.author.icon} alt="" className="authorIcon" />
          <span>
            <Link to={`/author/${data.author.id}`}>{data.author.name}</Link>
            {publishData}
          </span>
        </div>
        <h3>
          <Link to={`/blog/${data.id}`}>{data.title}</Link>
        </h3>
        <span className="date">
          {data.date.substr(0, data.date.length - 5)}
        </span>
        <span className="dot">·</span>
        <span className="length">{data.readTime}</span>
      </div>
    </div>
  );
};

export default TrendingCard;
