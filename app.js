const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const {typeDefs, resolvers} = require("./graphql")

const server= new ApolloServer({
    typeDefs, 
    resolvers, 
    introspection: true, 
    playground: true
})

const app = express() 
server.applyMiddleware({ app })

app.listen(3000, () => {
    console.log(`GQL server on port 3000${server.graphqlPath}`)
})