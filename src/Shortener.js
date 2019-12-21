import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { FaUniversalAccess, FaRegDizzy } from "react-icons/fa";

const FETCH_URL = gql`
  query urlshortener($url: String!) {
    urlshortener(where: { short_url: { _eq: $url } }) {
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
    result = (
      <p className="loading">
        <span className="spinner" aria-label="Redirecting Spinner">
          <FaUniversalAccess />
        </span>
        <span className="loading-text">Redirecting...</span>
      </p>
    );
  } else if (error) {
    console.log("Error: ", error);
    result = (
      <p className="spinner loading">
        <span aria-label="Loading Spinner">
          <FaRegDizzy />
        </span>
      </p>
    );
    window.location.href = "https://vishwas.tech";
  } else if (data && data.urlshortener && data.urlshortener.length) {
    const { long_url } = data.urlshortener[0];
    window.location.href = long_url;
  } else if (data.urlshortener.length === 0) {
    result = (
      <p className="spinner loading">
        <span aria-label="Loading Spinner">
          <FaRegDizzy />
        </span>
      </p>
    );
    window.location.href = "https://vishwas.tech";
  }

  return <div className="container">{result}</div>;
};

export default Shortener;
