import TrendingCard from "./Card";
import "./main.css";
import { useQuery, gql } from "@apollo/client";

const BLOGBYRANK_QUERY = gql`
  query {
    blogsByRank(num: 6) {
      id
      title
      author {
        name
        id
        image
      }
      publishedIn
      date
      readTime
      rank
      isStarred
    }
  }
`;

const Trendings = () => {
  const { data, loading, error } = useQuery(BLOGBYRANK_QUERY);

  if (loading) {
    return <div>Loading</div>;
  }

  console.log(data);
  console.log(error);

  return (
    <div className="trending-wrapper container mx-auto">
      <span className="trending-head">Trending on Median</span>
      <div className="trending-content grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {data.blogsByRank.map((obj) => {
          return <TrendingCard data={obj} />;
        })}
      </div>
    </div>
  );
};

export default Trendings;
