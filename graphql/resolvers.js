const { Events } = require("./Events")

const resolvers = {
    Query: {
        ...Events.resolvers.queries, 
    },
    Mutation: {
        ...Events.resolvers.mutations
    }
}

module.exports = resolvers