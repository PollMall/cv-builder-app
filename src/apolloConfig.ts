import { ApolloClient, InMemoryCache } from '@apollo/client';
console.log(process.env.REACT_APP_API_URL);

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

export { client };
