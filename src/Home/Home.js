import Banner from "./Banner";
import Trendings from "./Trendings/Trendings";
import Content2Col from "./MainContent/MainContent";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <hr className="seperator" />
      <Trendings />
      <hr />
      <Content2Col />
    </div>
  );
};

export default Home;
