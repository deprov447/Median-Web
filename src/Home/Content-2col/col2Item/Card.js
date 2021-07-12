import "./card.css"

const MainBlogCard = () => {
  return (
    <div className="mainBlogCard">
      <div className="cardpart">
        <div className="publishedIn">
          <img src="" alt="" />
          <span>
            Brian Armstrong
            <span>in</span> 
            The Coinbase Blog
          </span>
        </div>
        <h3>Embracing decentralization at Coinbase</h3>
        <span className="date">June 30</span>
        <span className="dot">·</span>
        <span className="length">5 min read</span>
      </div>
    </div>
  );
};

export default MainBlogCard;
