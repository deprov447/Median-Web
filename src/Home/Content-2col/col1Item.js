import MainBlogCard from "./col1Item/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

class Col1Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

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
      <div className="leftCol">
        <div className="col1Item">
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {this.state.items.map((i, index) => (
              <MainBlogCard />
            ))}
          </InfiniteScroll>

          {/* ToDo :: Self Loading at bottom */}
        </div>
      </div>
    );
  }
}

export default Col1Item;
