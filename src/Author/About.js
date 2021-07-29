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
          {AuthorData.following.map((i, index) => {
            return (
              <li className="followlist">
                <img src={i.image} alt="" />
                <span>{i.name}</span>
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
