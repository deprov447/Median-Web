import Col1Item from "./col1Item";
import "./style.css"

const HomeContent = () => {
  return (
    <div className="homeContent container mx-auto">
      <div className="leftCol">
        <Col1Item />
      </div>
      <div className="rightCol">
          <h3 className="trending-head">DISCOVER MORE OF WHAT MATTERS TO YOU</h3>
        <div className="topics">
          <span className="topicItem">Self</span>
          <span className="topicItem">Relationships</span>
          <span className="topicItem">Self</span>
          <span className="topicItem">Self</span>
          <span className="topicItem">Self</span>
          <span className="topicItem">Self</span>
          <span className="topicItem">Self</span>
          <span className="topicItem">Self</span>
          <span className="topicItem">Self</span>
          <a href="/">See all topics</a>
        </div>
        <hr/>
        <div className="footer">
          <span className="footerItem">Help</span>
          <span className="footerItem">Status</span>
          <span className="footerItem">Writers</span>
          <span className="footerItem">Blog</span>
          <span className="footerItem">Careers</span>
          <span className="footerItem">Privacy</span>
          <span className="footerItem">Terms</span>
          <span className="footerItem">About</span>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
