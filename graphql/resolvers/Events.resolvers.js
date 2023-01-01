let events = []; 

const resolvers = {
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
}

module.exports = resolvers 