import { Link } from "react-router-dom";
import "./About.css";

const About = (props) => {
  const AuthorData = props.authorData;
  return (
    <div className="author">
      <div className="divtop">
        <img src={AuthorData.image} alt="Author" />
        <h3 className="name">{AuthorData.name}</h3>
        <p className="about">{AuthorData.about}</p>
        <button className="followButton">Follow</button>
      </div>
      <hr className="seperator" />
      <div className="divbottom">
        <span className="head">{AuthorData.name} follows</span>
        <ul>
          {AuthorData.following.map((person) => {
            console.log(person);
            return (
              <li className="followlist">
                <img src={person.image} alt="" />
                <Link to={"/author/" + person.id}>
                  <span>{person.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="followmore">{`See all (${AuthorData.following.length})`}</button>
      </div>
    </div>
  );
};

export default About;
