import { Link } from "react-router-dom";
const BannerStyle = require("./Banner.css");

const Banner = () => {
  return (
    <div className="banner">
      <div className="wrapper container mx-auto">
        <h1>
          Median is a place to write, read, and connect
        </h1>
        <p>
          It's easy and free to post your thinking on any topic and connect with
          tens of readers.
        </p>
        <Link to="/write">
          Start Writing
        </Link>
      </div>
    </div>
  );
};

export default Banner;
