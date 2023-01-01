const bodyParser = require('body-parser')
const express = require('express')
// graphqlhttp acts like a middleware and will handle the resolvers 
// to run our server code 
const {graphqlHTTP} = require('express-graphql')

const { buildSchema } = require('graphql')

const app = express() 

const events = []; 

app.use(bodyParser.json())

// using the #graphql tag allows syntax highlghting in VS code 
// # makes comments in graphql 
app.use("/graphql", graphqlHTTP({
    schema: buildSchema(`#graphql
        type Event { 
            _id: ID! 
            title: String! 
            description: String! 
            price: Float! 
            date: String! 
        }

        input EventInput { 
            title: String! 
            description: String! 
            price: Float! 
            date: String! 
        }

        type RootQuery { 
            events: [Event!]!
        }

        type RootMutation {
            createEvent(input: EventInput): Event
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `), // graph ql schema 
    rootValue: {
        events: () => {
            return events 
        }, 
        createEvent: ( args ) => {
            const event = {
                _id: Math.random.toString(), 
                title: args.input.title, 
                description: args.input.description, 
                price: args.input.price, 
                date: args.input.date, 
            }
            events.push(event); 
            return event; 
        }
    }, // points to our resolvers - must match the schema 
    graphiql: true // will get a graphical interface to interface with the code 
}) )

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})