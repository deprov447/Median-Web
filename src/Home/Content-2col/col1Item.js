import MainBlogCard from "./col1Item/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

class Col1Item extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 })),
      });
    }, 1500);
  };

  render() {
    return (
      <div className="col1Item">
        <div className="leftCol">
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {this.state.items.map((i, index) => (
              <MainBlogCard data={TempData} />
            ))}
          </InfiniteScroll>

          {/* ToDo :: Self Loading at bottom */}
        </div>
        <img src="" alt="" />
      </div>
    );
  }
}

export default Col1Item;

const TempData = {
  id: "1",
  title: "My Temporary Blog Post",
  author: {
    name: "Anubhav",
    id: "1",
  },
  published: ["The CoinDX Blog"],
  date: "June 31st 2021",
  readTime: "5 min",
  tags: ["tag1", "tag2", "tag3"],
  rank: "02",
  authorIcon:
    "https://assets.leetcode.com/users/megaspazz/avatar_1571494876.png",
  isStarred: true,
};
