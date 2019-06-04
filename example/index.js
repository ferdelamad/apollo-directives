const { ApolloServer } = require('apollo-server');
const { renameField, toUpper, toLower } = require('apollo-directives')

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const LaunchAPI = require('./datasources/launch');

const dataSources = () => ({
  launchAPI: new LaunchAPI()
});

const server = new ApolloServer({
  schemaDirectives: {
    renameField,
    toUpper,
    toLower,
  },
  typeDefs,
  resolvers,
  dataSources,
});

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`🚀 app running at ${url}`));
