import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";

const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.REACT_APP_HASURA_ENDPOINT,
    headers: {
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET,
      "content-type": "application/json"
    }
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
