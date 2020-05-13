const { gql } = require('apollo-server');

/**
 * A schema is a collection of type definitions (hence "typeDefs")
 * that together define the "shape" of queries that are executed against
 * your data.
 *
 * The "Todo" type defines the queryable fields for every todo item in our data source.
 * The "Query" type is special: it lists all of the available queries that
 * clients can execute, along with the return type for each. In this
 * case, the "todoItems" query returns an array of zero or more Todos (defined above).
 * */
const typeDefs = gql`
    type Todo {
        id: Int
        item: String
    }
    
    type Query {
        todoItems: [Todo]
        todoItem(id: Int): Todo
    }
`;

module.exports = typeDefs;