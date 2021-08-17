import { useParams } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import "./Author.css";
import { useQuery, gql } from "@apollo/client";

var id = "61025b16fb5e551bfebf8f8";

const AUTHOR_QUERY = gql`
  query {
    author(id: "6102b5b16fb5e551bfebf8f8") {
      id
      name
      image
      about
      following {
        name
        image
      }
      blogs {
        title
        content
        isStarred
        date
        readTime
        claps
        tweets
      }
    }
  }
`;

//on load scroll to the top

const Author = () => {
  id = useParams().id;
  const { data, loading, error } = useQuery(AUTHOR_QUERY);

  if (loading) {
    return <div>Loading</div>;
  }

  console.log(data);
  console.log(error);

  return (
    <div className="container mx-auto AuthorPage">
      {/* {id} */}
      <About authorData={data.author} />
      <Blog blogData={data.author.blogs} />
    </div>
  );
};

export default Author;
