import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const FETCH_URL = gql`
  query urlShortner($url: String!) {
    urlshortner(where: { short_url: { _eq: $url } }) {
      long_url
    }
  }
`;

const Shortener = props => {
  const { loading, error, data } = useQuery(FETCH_URL, {
    skip: !props.match,
    variables: {
      url: props.match.params.shorturl
    }
  });
  let result;
  if (loading) {
    result = "Loading";
  } else if (error) {
    console.log("TCL: error", error);
    result = "Error";
  } else if (data && data.urlshortner && data.urlshortner.length) {
    const { long_url } = data.urlshortner[0];
    window.location.href = long_url;
  }
  return <div>{result}</div>;
};

export default Shortener;
