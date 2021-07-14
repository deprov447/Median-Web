import Col1Item from "./col1Item";
import Col2 from "./col2";
import "./style.css";

const HomeContent = () => {
  return (
    <div className="homeContent container mx-auto">
      <Col1Item />
      <div className="rightCol">
        <Col2 />
      </div>
    </div>
  );
};

export default HomeContent;
