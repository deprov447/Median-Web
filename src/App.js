import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

import Navbar from "./Navbar/main";
import Home from "./Home/main";
import OurStory from "./OurStory/main";
import Membership from "./Membership/main";
import Write from "./Write/main";
import SignIn from "./SignIn/main";
import GetStarted from "./GetStarted/main";
import Lost404 from "./Lost404/main";
import Blog from "./Blog/Blog";
import Author from "./Author/Author";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navbar />
          <hr className="seperator" />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/our-story" component={OurStory} />
              <Route path="/membership" component={Membership} />
              <Route path="/write" component={Write} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/get-started" component={GetStarted} />
              <Route path="/blog/:id" component={Blog} />
              <Route path="/author/:id" component={Author} />
              <Route path="*" component={Lost404} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
