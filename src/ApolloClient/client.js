import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
// import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink({
  uri: "https://graphqlzero.almansi.me/api",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
