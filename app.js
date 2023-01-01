const bodyParser = require('body-parser')
const express = require('express')
// graphqlhttp acts like a middleware and will handle the resolvers 
// to run our server code 
const {graphqlHTTP} = require('express-graphql')


const app = express() 


app.use(bodyParser.json())

const { schema, resolvers } = require("./graphql/index")

// using the #graphql tag allows syntax highlghting in VS code 
// # makes comments in graphql 
app.use("/graphql", graphqlHTTP({
    schema: schema, // graph ql schema 
    rootValue: resolvers, // points to our resolvers - must match the schema 
    graphiql: true // will get a graphical interface to interface with the code 
}) )

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})