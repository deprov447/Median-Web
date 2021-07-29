import Banner from "./Banner";
import Trendings from "./Trendings/main";
import Content2Col from "./Content-2col/main";

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
