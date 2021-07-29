import { useParams } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import "./Blog.css";

const Blog = () => {
  let { id } = useParams();
  return (
    <div className="container mx-auto">
      {id}
      {/* Content */}
      <h1>6 Brain Damaging Habits You May Want to Quit</h1>
      <h2>Do twice as much as you should, half as well as you could</h2>
      <div className="authorBox">
        <img src="https://miro.medium.com/fit/c/48/48/1*QnnvVghEGiFnkBs2-tJu6g.jpeg" />
        <div className="div">
          <div className="line1">
            <span className="name">Shivendra Misra</span>
            <button>Follow</button>
          </div>
          <div className="line2">
            <span className="dateAndTime">
              <span>Jun 16 . 8 min read</span>
            </span>
            <AiFillStar />
          </div>
        </div>
        <div className="icon">
          <TiSocialTwitter size="30px" />
          <TiSocialTwitter size="30px" />
          <TiSocialTwitter size="30px" />
          <TiSocialTwitter size="30px" />
        </div>
      </div>
      {/* Blog itself */}
      {/* floating box for subscribe */}
      <div className="tagsAndStat">
        <div className="tags">
          <ul>
            <li>Mental Health</li>
            <li>Neuroscience</li>
            <li>Self Improvement</li>
            <li>Habits</li>
            <li>Mindfulness</li>
          </ul>
        </div>
        <div className="stat">
          <span>
            <TiSocialTwitter className="buttons" /> <counts>20K</counts>
            <TiSocialTwitter className="buttons" /> <counts>160</counts>
          </span>
          <span>
            <TiSocialTwitter />
            <TiSocialTwitter />
            <TiSocialTwitter />
            <TiSocialTwitter />
          </span>
        </div>
      </div>
      <div className="aboutAuthor">
        <img src="https://miro.medium.com/fit/c/48/48/1*QnnvVghEGiFnkBs2-tJu6g.jpeg" />
        <div className="aboutAuthorContent">
          <span className="writtenByHeading">Written by</span>
          <span className="name">Shivendra Misra</span>
          <span className="about">
            15x Top Writer | Rethinking human growth through meditation and
            spirituality. Join me: bit.ly/reinventnewsletter
          </span>
        </div>
        <button>Follow</button>
        <button>
          <AiOutlineMail />
        </button>
      </div>
      {/* MoreFromMedian */}
      {/* Footer */}
    </div>
  );
};

export default Blog;
