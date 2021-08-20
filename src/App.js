import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

import Navbar from "./Navbar/main";
import Home from "./Home/main";
import OurStory from "./OurStory/OurStory";
import Membership from "./Membership/Membership";
import Write from "./Write/Write";
import SignIn from "./SignIn/SignIn";
import GetStarted from "./GetStarted/GetStarted";
import Lost404 from "./Lost404/Lost404";
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
