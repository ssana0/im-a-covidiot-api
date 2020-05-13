const todoItems = require('../data/todoItems');

const resolvers = {
    Query: {
        todoItems: () => {
            return todoItems
        },
        todoItem: (id) => {
            return todoItems.filter(x => x.id === id)[0]
        }
    }
};

module.exports = resolvers;