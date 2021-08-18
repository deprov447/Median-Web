import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
// import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink(
  {
    uri: process.env.REACT_APP_GQL_SERVER_URL,
  },
  () => console.log(`GQL server on ${process.env.REACT_APP_GQL_SERVER_URL}`)
);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
