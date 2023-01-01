const { gql } = require('apollo-server-express')
const { Event } = require('./Events')

const typeDefs = gql`
    ${Event.types}

    type Query{
        ${Event.queries}
    }

    type Mutation{
        ${Event.mutations}
    }

`

module.exports = typeDefs