import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
  uri: "https://api.graphql.jobs/"
});

const container = document.getElementById("app");

ReactDOM.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>,
  container
);
