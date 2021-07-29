import TrendingCard from "./Card";
import "./main.css";
import { useQuery, gql } from "@apollo/client";

const RANDOM_QUERY = gql`
  query postsAndLazeFields {
    post1: post(id: "1") {
      title
      id
      body
    }
  }
`;

const Trendings = () => {
  const { data, loading, error } = useQuery(RANDOM_QUERY);

  if (loading) {
    return <div>LOADing</div>;
  }

  // console.log(data);

  return (
    <div className="trending-wrapper container mx-auto">
      <span className="trending-head">Trending on Median</span>
      <div className="trending-content grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <TrendingCard data={TempData} />
        <TrendingCard data={TempData} />
        <TrendingCard data={TempData} />
        <TrendingCard data={TempData} />
        <TrendingCard data={TempData} />
        <TrendingCard data={TempData} />
      </div>
    </div>
  );
};

export default Trendings;

const TempData = {
  id: "1",
  title: "My Temporary Blog Post",
  author: {
    name: "Anubhav",
    id: "1",
    icon: "https://assets.leetcode.com/users/megaspazz/avatar_1571494876.png",
  },
  published: ["The CoinDX Blog"],
  date: "June 31st 2021",
  readTime: "5 min",
  tags: ["tag1", "tag2", "tag3"],
  rank: "02",
  isStarred: true,
};
