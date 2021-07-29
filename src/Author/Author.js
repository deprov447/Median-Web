import { useParams } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import "./Author.css";

//on load scroll to the top

const Author = () => {
  var { id } = useParams();
  return (
    <div className="container mx-auto AuthorPage">
      {id}
      <About authorData={AuthorData} />
      <Blog />
    </div>
  );
};

export default Author;

const AuthorData = {
  name: "Jessica Powell",
  image: "https://miro.medium.com/fit/c/131/131/2*IrAmmV8aB0OYcrc0KFrkGA.jpeg",
  about:
    "Technophile, technophobe. Music software start-up founder. Former Google VP. Author, The Big Disruption. Fan of shochu, chocolate, and the absurd.",
  following: [
    {
      name: "someone1",
      image:
        "https://miro.medium.com/fit/c/20/20/1*PiUCAtGxOGxhyQdX79Wlow.jpeg",
    },
    {
      name: "someone2",
      image:
        "https://miro.medium.com/fit/c/20/20/1*PiUCAtGxOGxhyQdX79Wlow.jpeg",
    },
    {
      name: "someon3",
      image:
        "https://miro.medium.com/fit/c/20/20/1*PiUCAtGxOGxhyQdX79Wlow.jpeg",
    },
    {
      name: "someon4",
      image:
        "https://miro.medium.com/fit/c/20/20/1*PiUCAtGxOGxhyQdX79Wlow.jpeg",
    },
    {
      name: "someon5",
      image:
        "https://miro.medium.com/fit/c/20/20/1*PiUCAtGxOGxhyQdX79Wlow.jpeg",
    },
  ],
};
