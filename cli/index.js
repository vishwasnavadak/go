const dotenv = require("dotenv");
dotenv.config();
const { ApolloClient } = require("apollo-boost");
const gql = require("graphql-tag");
const { fetch } = require("cross-fetch/polyfill");
const { createHttpLink } = require("apollo-link-http");
const { InMemoryCache } = require("apollo-cache-inmemory");
const shortid = require("shortid");

const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.HASURA_ENDPOINT,
    fetch: fetch,
    headers: {
      "x-hasura-admin-secret": process.env.HASURA_SECRET,
      "content-type": "application/json"
    }
  }),
  cache: new InMemoryCache()
});

const ADD_URL = gql`
  mutation addURL($URLS: [urlshortener_insert_input!]!) {
    insert_urlshortener(objects: $URLS) {
      returning {
        id
        short_url
      }
    }
  }
`;

const addToHasura = async (longURL, shortURL) => {
  let result = await client
    .mutate({
      mutation: ADD_URL,
      variables: {
        URLS: { long_url: longURL, short_url: shortURL }
      }
    })
    .then(res => {
      console.log(
        `Short URL: https://vishwas.tech/go/#${res.data.insert_urlshortener.returning[0].short_url}`
      );
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

const asciiText = () => {
  console.log(
    `      .__       .__                                __                .__          /\\                      /\\ `
  );
  console.log(
    `___  _|__| _____|  |____  _  _______    ______   _/  |_  ____   ____ |  |__      / /    ____   ____      / / `
  );
  console.log(
    `\\  \\/ /  |/  ___/  |  \\ \\/ \\/ /\\__  \\  /  ___/   \\   __\\/ __ \\_/ ___\\|  |  \\    / /    / ___\\ /  _ \\    / /  `
  );
  console.log(
    ` \\   /|  |\\___ \\|   Y  \\     /  / __ \\_\\___ \\     |  | \\  ___/\\  \\___|   Y  \\  / /    / /_/  >  <_> )  / /   `
  );
  console.log(
    `  \\_/ |__/____  >___|  /\\/\\_/  (____  /____  > /\\ |__|  \\___  >\\___  >___|  / / /     \\___  / \\____/  / /    `
  );
  console.log(
    `              \\/     \\/             \\/     \\/  \\/           \\/     \\/     \\/  \\/     /_____/          \\/     \n\n`
  );
};

const shortener = async () => {
  const [nodePath, filePath, ...params] = process.argv;
  console.log(
    "\n\n============================================================================================================\n\n"
  );
  asciiText();
  if (params.length === 0 || params.length > 2) {
    console.error(
      "Invalid Parameters. \n\nUsage: shorten <long_url> [<short_url>]"
    );
  }
  if (params.length === 1) {
    await addToHasura(params[0], shortid.generate());
  }

  if (params.length === 2) {
    await addToHasura(params[0], params[1]);
  }
  console.log(
    "\n\n============================================================================================================\n\n"
  );
};

shortener();
