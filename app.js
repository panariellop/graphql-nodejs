const bodyParser = require('body-parser')
const express = require('express')
// graphqlhttp acts like a middleware and will handle the resolvers 
// to run our server code 
const {graphqlHTTP} = require('express-graphql')

const { buildSchema } = require('graphql')

const app = express() 

app.use(bodyParser.json())

// using the #graphql tag allows syntax highlghting in VS code 
// # makes comments in graphql 
app.use("/graphql", graphqlHTTP({
    schema: buildSchema(`#graphql
        type RootQuery { 
            events: [String!]!
        }

        type RootMutation {
            createEvent(name: String): String
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `), // graph ql schema 
    rootValue: {
        events: () => {
            return ['Romantic Cooking', 'Sailing', ]
        }, 
        createEvent: ( args ) => {
            const eventName = args.name; 
            return eventName;  
        }
    }, // points to our resolvers - must match the schema 
    graphiql: true // will get a graphical interface to interface with the code 
}) )

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})