import React from "react";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "node-fetch";

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: "https://api.graphql.jobs/",
    fetch
  }),
  cache: new InMemoryCache()
});

const ProviderMock = props => {
  <ApolloClient client={client}>{props.children}</ApolloClient>;
};

export default ProviderMock;
