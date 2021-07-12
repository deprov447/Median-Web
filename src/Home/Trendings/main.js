import TrendingCard from "./Card";
import "./main.css"

const Trendings = () => {
  return (
    <div className="trending-wrapper container mx-auto">
      <span className="trending-head">Trending on Median</span>
      <div className="trending-content grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>
    </div>
  );
};

export default Trendings;
