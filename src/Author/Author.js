import { useParams } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import { useQuery, gql } from "@apollo/client";
import "./Author.css";

const AUTHOR_QUERY = gql`
  query authorQuery($id: ID!) {
    author(id: $id) {
      name
      image
      about
      following {
        id
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
  const { id } = useParams();
  
  var { data, loading, error } = useQuery(AUTHOR_QUERY, {
    variables: { id },
  });

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
