import "./card.css";

const TrendingCard = (props) => {
  const data = props.data;
  let publishData;
  if (data.published.length > 0)
    publishData = (
      <wrapper>
        <span>in</span>
        <a href="/">{data.published[0]}</a>;
      </wrapper>
    );

  return (
    <div className="trendingCard">
      <div className="numbering">{data.rank}</div>
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
