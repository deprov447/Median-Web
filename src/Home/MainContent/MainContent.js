import BloglistColumn from "./BloglistColumn";
import TopicsColumn from "./TopicsColumn";
import "./MainContent.css";

const HomeContent = () => {
  return (
    <div className="homeContent container mx-auto">
      <BloglistColumn />
      <div className="rightCol">
        <TopicsColumn />
      </div>
    </div>
  );
};

export default HomeContent;
