const todoItems = require('../data/todoItems');

const resolvers = {
    Query: {
        todoItems: () => todoItems
    }
};

module.exports = resolvers;