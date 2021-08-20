import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiBookmark } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopBar = (props) => {
  var about = props.about;
  return (
    <div className="authorBox customContentWrapper">
      <img src={about.author.image} />
      <div className="div">
        <div className="line1">
          <Link to={"/author/" + about.author.id}>
            <span className="name">{about.author.name}</span>
          </Link>
          <button>Follow</button>
        </div>
        <div className="line2">
          <span className="dateAndTime">
            <span>{about.date}</span>
          </span>
          <span>{about.readTime} min read</span>
          {() => {
            if (about.isStarred) return <AiFillStar />;
          }}
        </div>
      </div>
      <div className="icon">
        <TiSocialTwitter size="30px" />
        <TiSocialLinkedin size="30px" />
        <TiSocialFacebook size="30px" />
        <TiBookmark size="30px" />
      </div>
    </div>
  );
};

export default TopBar;
