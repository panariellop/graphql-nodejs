const { buildSchema } = require('graphql');
//compile all the types 
const eventTypes = require('./types/Events.types')
const userTypes = require("./types/User.types")
const schemaDef = `#graphql
    type RootQuery { 
        events: [Event!]!
        users: [User!]!
    }

    type RootMutation { 
        createEvent(input: EventInput): Event
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`    
const schema = buildSchema(
    eventTypes + userTypes + schemaDef
)

//compile all the resolvers 
const eventResolvers = require('./resolvers/Events.resolvers')
const resolvers = {
    ...eventResolvers
}

exports.schema = schema; 
exports.resolvers = resolvers; 