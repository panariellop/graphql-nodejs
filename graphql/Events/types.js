const types = `#graphql
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
`

module.exports = types