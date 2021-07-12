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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navbar />
          <hr className="seperator" />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/our-story">
                <OurStory />
              </Route>
              <Route path="/membership">
                <Membership />
              </Route>
              <Route path="/write">
                <Write />
              </Route>
              <Route path="/sign-in">
                <SignIn />
              </Route>
              <Route path="/get-started">
                <GetStarted />
              </Route>
              <Route path="*">
                <Lost404 />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
