import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-boost";

const httpLink = createHttpLink({
  uri: "http://127.0.0.1:4000/graphql"
});

const client = new ApolloClient({
  uri: httpLink
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
