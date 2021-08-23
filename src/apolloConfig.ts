import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://cv-builder-server-1.herokuapp.com/',
  cache: new InMemoryCache(),
});

export { client };
