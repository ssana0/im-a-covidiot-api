const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs/todo');
const resolvers = require('./resolvers/todoItems');

const config = {
    typeDefs,
    resolvers
};

const server = new ApolloServer(config);

server
    .listen()
    .then(
        ({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        }
    );