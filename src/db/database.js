const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
}, (error, client) => {
    if(error){
        return console.log(error)
    }

    console.log('Connection to database successful')
})